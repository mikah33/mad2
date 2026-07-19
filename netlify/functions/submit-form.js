// Forwards website lead forms to the Firebase madWebsiteForm function
// (email notification + GHL upsert).
const WEBHOOK_URL = 'https://us-central1-mikahs-auto-detailing-crm.cloudfunctions.net/madWebsiteForm';

exports.handler = async (event, context) => {
  // Enhanced CORS headers for all responses
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json'
  };

  // Handle CORS preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const ok = response.ok;
    const responseData = ok ? await response.text() : null;

    return {
      statusCode: ok ? 200 : 500,
      headers: corsHeaders,
      body: JSON.stringify({
        success: ok,
        message: ok ? 'Form submitted successfully' : 'Form submission failed',
        data: responseData,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        error: 'Failed to submit form',
        details: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};
