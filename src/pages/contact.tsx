import React from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <Head>
        <title>Contact — GSTN Help</title>
        <meta name="description" content="Contact GSTN Help via email, phone or WhatsApp for prompt assistance with GST notices and refunds." />
      </Head>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-3 text-base text-gray-600">We are here to help you with your GST compliance and litigation needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-5">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase">Email Us</p>
                  <a href="mailto:support@gstnhelp.in" className="text-lg font-medium text-blue-600 hover:underline">support@gstnhelp.in</a>
                  <p className="text-sm text-gray-400 mt-1">For general inquiries and document submission.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase">WhatsApp Support</p>
                  <a href="https://wa.me/918793552739?text=Hello%20I%20am%20visiting%20gstnhelp.in%20and%20need%20GST%20assistance" className="text-lg font-medium text-green-600 hover:underline">Chat on WhatsApp</a>
                  <p className="text-sm text-gray-400 mt-1">Fastest response (9 AM - 7 PM).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Card */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-800 p-6 rounded-2xl shadow-lg text-white flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Have a Notice?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed text-sm">
              Don't wait until the last date. Submit your notice details for a preliminary review by our experts.
            </p>
            <a href="/submit" className="bg-white text-blue-900 font-bold py-2.5 px-6 rounded-lg text-center hover:bg-blue-50 transition-colors shadow-md text-sm">
              Submit Case for Review &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;