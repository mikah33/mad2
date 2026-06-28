import React, { useState } from 'react';
import { useEffect } from 'react';
import { Mail, User, Phone, MapPin, Car, FileText, Briefcase } from 'lucide-react';
import { submitForm } from '../utils/formSubmission';

interface LeadFormProps {
  selectedService: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    vehicleDetails: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = [
    'Basic Detail Package - $225',
    'Factory Reset Package - $400',
    'Ceramic Coatings',
    'Paint Corrections',
    'Specialty Services',
    'Marine & RV Detailing',
    'Routine Reset - $225/Month'
  ];

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        service: selectedService,
        description: selectedService
      }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitForm({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        vehicleDetails: formData.vehicleDetails || '',
        service: formData.service || selectedService,
        description: formData.description
      });

      console.log('Form submission successful:', result);

      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          vehicleDetails: '',
          service: '',
          description: ''
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');

      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-md border border-gray-200 mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get Your Free Quote</h3>
      
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        
        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <div className="w-5 h-5 text-green-600 mr-3">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-green-800 font-medium">Thank you for your request!</p>
                <p className="text-green-700 text-sm">We'll get back to you within 24 hours with your personalized quote.</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <div className="flex items-center">
              <div className="w-5 h-5 text-red-600 mr-3">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-red-800 font-medium">Submission failed</p>
                <p className="text-red-700 text-sm">Please try again or call us at (803) 667-8731</p>
              </div>
            </div>
          </div>
        )}
        {/* Full Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="Full Name *"
            disabled={isSubmitting}
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="Email Address *"
            disabled={isSubmitting}
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="Phone Number"
            disabled={isSubmitting}
          />
        </div>

        {/* Street Address, City and Zipcode Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            autoComplete="street-address"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="Street Address, City and Zipcode"
            disabled={isSubmitting}
          />
        </div>

        {/* Vehicle Year Make and Model Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Car className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="vehicleDetails"
            value={formData.vehicleDetails}
            onChange={handleChange}
            autoComplete="off"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
            placeholder="Vehicle Year Make and Model"
            disabled={isSubmitting}
          />
        </div>

        {/* Service Selection Dropdown */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Briefcase className="h-5 w-5 text-gray-400" />
          </div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#90E0EF] focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
            disabled={isSubmitting}
          >
            <option value="">Select a Service *</option>
            {serviceOptions.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Service Description Field */}
        <div className="relative">
          <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
            <FileText className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            autoComplete="off"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
            placeholder="Brief Service Description"
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#023E8A] hover:bg-[#0077B6] disabled:bg-[#90E0EF] disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Submitting...
            </div>
          ) : (
            'Submit Request'
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;