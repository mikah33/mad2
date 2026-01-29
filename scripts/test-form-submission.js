#!/usr/bin/env node

/**
 * Simple test script to verify the Netlify function works correctly
 */

// Node.js 18+ has fetch built-in, but for older versions we can use a polyfill
const fetch = globalThis.fetch || (await import('node-fetch')).default;

async function testFormSubmission() {
  console.log('🧪 Testing form submission...');

  const testData = {
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '555-123-4567',
    location: 'Columbia, SC',
    vehicleDetails: '2023 Toyota Camry',
    service: 'Basic Detail Package - $200',
    description: 'Test submission from script',
    timestamp: new Date().toISOString(),
    source: 'Test Script'
  };

  try {
    // Test local Netlify function
    console.log('Testing local Netlify function...');
    const response = await fetch('http://localhost:8888/.netlify/functions/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Local function test passed:', result);
    } else {
      console.log('❌ Local function test failed:', response.status, await response.text());
    }

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log('⚠️  Local Netlify dev server not running (this is okay for production)');
      console.log('   To test locally, run: netlify dev');
    } else {
      console.log('❌ Local function test error:', error.message);
    }
  }

  try {
    // Test direct n8n webhook (for comparison)
    console.log('\nTesting direct n8n webhook...');
    const directResponse = await fetch('https://contractorai.app.n8n.cloud/webhook/004a0a90-39e2-4cfe-87fa-21bfc34e6d17', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    if (directResponse.ok) {
      const result = await directResponse.text();
      console.log('✅ Direct webhook test passed');
    } else {
      console.log('❌ Direct webhook test failed:', directResponse.status);
    }

  } catch (error) {
    console.log('❌ Direct webhook test error:', error.message);
  }
}

// Run the test
testFormSubmission().catch(console.error);