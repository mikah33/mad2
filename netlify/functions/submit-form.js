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

    // Forward to n8n webhook
    const response = await fetch('https://contractorai.app.n8n.cloud/webhook/3dd95dd5-4308-4ece-8495-9c72239e2e4b', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.text();

    return {
      statusCode: response.ok ? 200 : 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: response.ok,
        message: response.ok ? 'Form submitted successfully' : 'Form submission failed',
        data: responseData
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
