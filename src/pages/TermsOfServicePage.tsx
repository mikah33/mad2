import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const TermsOfServicePage = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Mikah's Auto Detailing"
        description="Terms of Service for Mikah's Auto Detailing. Read our service terms, conditions, and policies."
        keywords="terms of service, service terms, auto detailing terms"
        canonical="https://mikahsmobiledetailingsc.com/terms"
        ogType="website"
      />

      <Navigation />


      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">
              Last Updated: January 26, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services of Mikah's Auto Detailing ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Services</h2>
            <p>Mikah's Auto Detailing provides professional mobile auto detailing services in Columbia, SC and surrounding areas, including but not limited to:</p>
            <ul>
              <li>Interior and exterior detailing</li>
              <li>Ceramic coating application</li>
              <li>Paint correction</li>
              <li>Mobile detailing services</li>
              <li>Specialty detailing services</li>
            </ul>

            <h2>Booking and Scheduling</h2>
            <h3>Appointments</h3>
            <ul>
              <li>All services must be scheduled in advance by phone at (803) 667-8731 or through our website booking system.</li>
              <li>We will confirm your appointment via phone, email, or text message.</li>
              <li>Appointment times are estimates and may vary based on vehicle condition and service requirements.</li>
            </ul>

            <h3>Cancellation and Rescheduling</h3>
            <ul>
              <li>Cancellations must be made at least 24 hours prior to scheduled appointment.</li>
              <li>Cancellations made with less than 24 hours notice may be subject to a cancellation fee.</li>
              <li>We reserve the right to reschedule appointments due to weather conditions or unforeseen circumstances.</li>
            </ul>

            <h2>Payment Terms</h2>
            <ul>
              <li>Payment is due upon completion of services unless otherwise arranged.</li>
              <li>We accept cash, credit cards, and other payment methods as specified.</li>
              <li>Prices quoted are estimates and may vary based on vehicle condition and additional services required.</li>
              <li>Any additional services requested during the appointment will be quoted and must be approved before work begins.</li>
            </ul>

            <h2>Service Location Requirements</h2>
            <p>For mobile detailing services:</p>
            <ul>
              <li>You must provide a safe, accessible location for our technicians to perform services.</li>
              <li>Access to electricity may be required for certain services (we bring generators as backup).</li>
              <li>You are responsible for ensuring pets are secured during service.</li>
              <li>Parking must be available for our service vehicle near your vehicle.</li>
            </ul>

            <h2>Customer Responsibilities</h2>
            <ul>
              <li>Remove all personal belongings and valuables from the vehicle before service.</li>
              <li>Inform us of any pre-existing damage or special concerns.</li>
              <li>Ensure vehicle is accessible at the scheduled appointment time.</li>
              <li>Provide accurate information about vehicle condition when booking.</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              While we take utmost care in providing our services, Mikah's Auto Detailing shall not be liable for:
            </p>
            <ul>
              <li>Pre-existing damage to paint, interior, or other vehicle components</li>
              <li>Damage resulting from improper prior repairs or maintenance</li>
              <li>Damage to aftermarket modifications or non-OEM parts</li>
              <li>Loss of personal items left in the vehicle</li>
              <li>Clear coat or paint failure on vehicles with compromised paint</li>
              <li>Stains or odors that cannot be removed despite best efforts</li>
            </ul>
            <p>
              Our total liability for any claim arising from our services shall not exceed the amount paid for the specific service in question.
            </p>

            <h2>Warranty and Guarantees</h2>
            <ul>
              <li>We guarantee professional workmanship on all services performed.</li>
              <li>If you are not satisfied with our work, contact us within 48 hours and we will address your concerns.</li>
              <li>Warranty does not cover damage from improper maintenance or use after service.</li>
              <li>Ceramic coating warranties are subject to separate terms and proper maintenance requirements.</li>
            </ul>

            <h2>Weather Policy</h2>
            <ul>
              <li>Outdoor services may be rescheduled due to rain, extreme temperatures, or other adverse weather conditions.</li>
              <li>We will notify you as soon as possible if weather requires rescheduling.</li>
              <li>Indoor or covered location services proceed regardless of weather.</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property of Mikah's Auto Detailing and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2>Photography and Marketing</h2>
            <p>
              By using our services, you consent to us taking before and after photographs of your vehicle for quality control, training, and marketing purposes. If you do not wish to have your vehicle photographed, please inform us before service begins.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Mikah's Auto Detailing, its employees, and contractors from any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services shall be resolved through:
            </p>
            <ul>
              <li>Direct communication with our management team</li>
              <li>Mediation if direct communication is unsuccessful</li>
              <li>Arbitration or small claims court in Richland County, South Carolina if necessary</li>
            </ul>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of South Carolina, without regard to its conflict of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Phone:</strong> (803) 667-8731</li>
              <li><strong>Website:</strong> mikahsmobiledetailingsc.com</li>
              <li><strong>Service Area:</strong> Columbia, Lexington, Irmo, and surrounding areas in South Carolina</li>
            </ul>

            <p className="mt-8 text-sm text-gray-600">
              By booking or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfServicePage;
