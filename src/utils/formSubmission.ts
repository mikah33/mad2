/**
 * Form submission utility with CORS handling
 */
import { getClickIds, getLeadSource } from './analytics';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  vehicleDetails?: string;
  service: string;
  description: string;
}

interface BookingFormData {
  vehicleType?: string;
  lastDetailTiming?: string;
  cleanlinessLevel?: string;
  service: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  source?: string;
}

interface SubmissionResponse {
  success: boolean;
  message: string;
  data?: any;
  timestamp?: string;
}

/**
 * Submit form data with environment-aware CORS handling
 */
export async function submitForm(formData: FormData): Promise<SubmissionResponse> {
  const payload = {
    ...formData,
    ...getClickIds(),
    ...getLeadSource(),
    timestamp: new Date().toISOString(),
    source: 'Mikahs Auto Detailing Website'
  };

  const isDevelopment = process.env.NODE_ENV === 'development';

  // Try multiple submission strategies to handle CORS issues
  const strategies = [
    // Strategy 1: Use Netlify function (preferred)
    async () => {
      console.log('Attempting submission via Netlify function...');
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Netlify function failed: ${response.status}`);
      }

      return await response.json();
    },

    // Strategy 2: Direct submission with CORS handling (fallback for development)
    async () => {
      if (!isDevelopment) {
        throw new Error('Direct submission only allowed in development');
      }

      console.log('Attempting direct submission to n8n webhook...');
      const response = await fetch('https://us-central1-mikahs-auto-detailing-crm.cloudfunctions.net/madWebsiteForm', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Direct submission failed: ${response.status}`);
      }

      return {
        success: true,
        message: 'Form submitted successfully via direct webhook',
        timestamp: new Date().toISOString()
      };
    }
  ];

  // Try strategies in order
  for (let i = 0; i < strategies.length; i++) {
    try {
      const result = await strategies[i]();
      console.log(`Submission successful using strategy ${i + 1}`);
      return result;
    } catch (error) {
      console.warn(`Strategy ${i + 1} failed:`, error);

      // If this was the last strategy, throw the error
      if (i === strategies.length - 1) {
        throw error;
      }
    }
  }

  throw new Error('All submission strategies failed');
}

/**
 * Submit booking form data (specialized for timeline booking forms)
 */
export async function submitBookingForm(formData: BookingFormData): Promise<SubmissionResponse> {
  const payload = {
    ...formData,
    ...getClickIds(),
    ...getLeadSource(),
    timestamp: new Date().toISOString(),
    source: formData.source || 'Mikahs Auto Detailing Website'
  };

  const isDevelopment = process.env.NODE_ENV === 'development';

  // Hit the webhook DIRECTLY - fuck the proxy
  console.log('Submitting directly to n8n webhook...');

  const response = await fetch('https://us-central1-mikahs-auto-detailing-crm.cloudfunctions.net/madWebsiteForm', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Webhook failed: ${response.status}`);
  }

  console.log('Booking submission successful');
  return {
    success: true,
    message: 'Form submitted successfully',
    timestamp: new Date().toISOString()
  };
}

/**
 * Check if Netlify dev server is available
 */
export async function checkNetlifyDevServer(): Promise<boolean> {
  try {
    const response = await fetch('/.netlify/functions/submit-form', {
      method: 'OPTIONS',
    });
    return response.status === 200;
  } catch {
    return false;
  }
}