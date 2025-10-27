import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Mikah's Auto Detailing"
        description="Privacy Policy for Mikah's Auto Detailing. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, auto detailing privacy"
        canonical="https://mikahsmobiledetailingsc.com/privacy"
        ogType="website"
      />

      <Navigation />


      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Last Updated: January 26, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Mikah's Auto Detailing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Request a quote or book a service</li>
              <li>Contact us via phone, email, or contact form</li>
              <li>Subscribe to our newsletter or promotional materials</li>
              <li>Interact with our website or chatbot</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address (service location)</li>
              <li>Vehicle information</li>
              <li>Payment information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent on pages</li>
              <li>Geographic location data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our auto detailing services</li>
              <li>Process your service requests and payments</li>
              <li>Send you confirmations, updates, and service-related information</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf, such as payment processing, scheduling, or marketing.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent.</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>

            <h2>Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
            </p>

            <h2>Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us at (803) 667-8731 or through our contact form.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
            </p>

            <h2>California Privacy Rights</h2>
            <p>
              If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA). This includes the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Phone:</strong> (803) 667-8731</li>
              <li><strong>Email:</strong> Through our website contact form</li>
              <li><strong>Address:</strong> Columbia, SC</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
