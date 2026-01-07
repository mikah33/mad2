// CRM Supabase Edge Function URL
const CRM_WEBHOOK_URL = 'https://xgjgwjpkqvcgvbtvwyjx.supabase.co/functions/v1/website-leads';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhnamd3anBrcXZjZ3ZidHZ3eWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMjU2MzIsImV4cCI6MjA2NzYwMTYzMn0.iKACzO-1euMqCUzlbRStE4xy5-adqbwR3ZcNdN6qNTk';

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Forward to both n8n webhook AND CRM in parallel
    const [n8nResponse, crmResponse] = await Promise.allSettled([
      // n8n webhook (existing)
      fetch('https://contractorai.app.n8n.cloud/webhook/41d626b4-d245-4ef6-82b1-575c623e02d6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }),
      // CRM Supabase Edge Function (new)
      fetch(CRM_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'apikey': SUPABASE_ANON_KEY
        },
        body: JSON.stringify(data)
      })
    ]);

    // Check n8n response (primary)
    const n8nOk = n8nResponse.status === 'fulfilled' && n8nResponse.value.ok;
    const n8nData = n8nOk ? await n8nResponse.value.text() : null;

    // Log CRM result (don't fail if CRM fails)
    if (crmResponse.status === 'fulfilled' && crmResponse.value.ok) {
      console.log('Lead added to CRM successfully');
    } else {
      console.log('CRM webhook failed (non-blocking):', crmResponse.reason || 'Unknown error');
    }

    return {
      statusCode: n8nOk ? 200 : 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: n8nOk,
        message: n8nOk ? 'Form submitted successfully' : 'Form submission failed',
        data: n8nData
      })
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: false,
        error: 'Failed to submit form',
        details: error.message
      })
    };
  }
};
