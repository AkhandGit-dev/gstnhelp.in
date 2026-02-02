import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold">Complex GST Notices & Refund Resolution – India</h1>
          <p className="mt-4 text-gray-700">Expert analysis and support for GST notices, refund claims, ITC reconciliation, audit issues, and compliance disputes.</p>
          <div className="mt-6 flex gap-3">
            <a href="/submit" className="bg-green-600 text-white px-6 py-3 rounded shadow hover:opacity-95">Get Free GST Issue Review</a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="border border-green-600 text-green-600 px-6 py-3 rounded">WhatsApp Us</a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">GST Notice Reply & Strategy</h4>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">GST Refund Advisory</h4>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">ITC Reconciliation & Defense</h4>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h4 className="font-semibold">Audit Defense & Appeals Support</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;