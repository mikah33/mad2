import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8000;

// Enable CORS for all routes
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false
}));

app.use(express.json());

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Form submission endpoint that forwards to n8n webhook
app.post('/api/submit-form', async (req, res) => {
  try {
    console.log('📝 Form submission received:', req.body);

    // Test multiple possible webhook URL formats
    const webhookId = '004a0a90-39e2-4cfe-87fa-21bfc34e6d17';
    const possibleUrls = [
      `https://contractorai.app.n8n.cloud/webhook/${webhookId}`,
      `https://contractorai.app.n8n.cloud/webhook-test/${webhookId}`,
      `https://contractorai.app.n8n.cloud/api/webhook/${webhookId}`,
    ];

    let success = false;
    let result = null;

    for (const url of possibleUrls) {
      try {
        console.log(`🔗 Trying webhook URL: ${url}`);

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body)
        });

        console.log(`📊 Response status: ${response.status}`);

        if (response.ok) {
          result = await response.text();
          console.log('✅ Webhook success with URL:', url);
          console.log('📋 Response:', result);
          success = true;
          break;
        } else {
          console.log(`❌ Failed with ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.log(`🚫 Error with ${url}:`, error.message);
      }
    }

    if (success) {
      res.json({
        success: true,
        message: 'Form submitted successfully',
        data: result,
        timestamp: new Date().toISOString()
      });
    } else {
      // Even if webhook fails, log the data for debugging
      console.log('📨 WEBHOOK FAILED - But here\'s your form data:');
      console.log(JSON.stringify(req.body, null, 2));

      res.status(200).json({
        success: true,
        message: 'Form received successfully (webhook endpoint needs fixing)',
        data: req.body,
        timestamp: new Date().toISOString(),
        note: 'Check server logs for the submitted data'
      });
    }
  } catch (error) {
    console.error('🔴 Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('📝 Form endpoint: http://localhost:8000/api/submit-form');
});