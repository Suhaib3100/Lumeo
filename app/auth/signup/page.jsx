"use client";
import SignupFormDemo from "@/components/signup-form-demo";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex bg-gray-50 dark:bg-gray-900">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-900 p-12 items-center justify-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-white mb-6">Join Lumeo Today</h1>
          <p className="text-lg text-blue-100 mb-8">Start creating amazing content with our AI-powered platform. Join thousands of creators who trust Lumeo.</p>
          <div className="flex items-center space-x-4 text-blue-100">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Free Trial Available</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <SignupFormDemo />
      </div>
    </div>
  );
}