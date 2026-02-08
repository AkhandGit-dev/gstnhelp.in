import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Received a GST Notice or Refund Delay? <br />
            <span className="text-blue-900">We Help You Resolve It.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Expert GST practitioners helping businesses across India with notices, ITC mismatches, audits, and refunds — without unnecessary stress.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#lead-form" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition text-center">
              Get Free GST Issue Review
            </a>
            <a href="https://wa.me/918793552739?text=Hello%20I%20am%20visiting%20gstnhelp.in%20and%20need%20GST%20assistance" target="_blank" rel="noreferrer" className="flex items-center justify-center border-2 border-green-600 text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition">
              <span>WhatsApp a GST Expert</span>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✔</span> 1000+ Cases
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✔</span> Pan-India
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✔</span> Confidential
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✔</span> Independent
            </div>
          </div>
        </div>
        
        <div className="md:w-2/5 relative hidden md:block">
           <div className="bg-blue-900 rounded-2xl p-8 text-white shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
              <h3 className="text-xl font-bold mb-4">Why GSTN Help?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="bg-green-500 rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>Ex-Department Experts & CAs</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-green-500 rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>Legal & Technical Defense</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-green-500 rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs mt-1">✓</span>
                  <span>Flat Fee Structure</span>
                </li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;