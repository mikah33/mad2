import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

export const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  let errorMessage: string;
  let errorStatus: string | number = 'Error';

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText || error.data?.message || 'An error occurred';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'An unexpected error occurred';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Error Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 p-4 rounded-full">
                <AlertTriangle className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center mb-2">
              {errorStatus === 404 ? 'Page Not Found' : 'Oops! Something Went Wrong'}
            </h1>
            <p className="text-center text-white/90 text-lg">
              {errorStatus === 404
                ? "We couldn't find the page you're looking for"
                : "Don't worry, our team has been notified"}
            </p>
          </div>

          {/* Error details */}
          <div className="p-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-1 font-semibold">Error Details:</p>
              <p className="text-gray-800 font-mono text-sm">{errorMessage}</p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Need help? Get in touch with us!</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+18036678731"
                  className="text-[#023E8A] hover:text-[#0077B6] font-semibold transition"
                >
                  Call (803) 667-8731
                </a>
                <span className="hidden sm:inline text-gray-300">•</span>
                <Link
                  to="/#booking"
                  className="text-[#023E8A] hover:text-[#0077B6] font-semibold transition"
                >
                  Book Your Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Branding footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          © 2025 Mikah's Auto Detailing - Professional Mobile Detailing in Columbia, SC
        </p>
      </div>
    </div>
  );
};

export default ErrorBoundary;
