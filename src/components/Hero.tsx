import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Received a GST Notice or Refund Delay? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">We Help You Resolve It.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Expert GST practitioners helping businesses across India with notices, ITC mismatches, audits, and refunds — without unnecessary stress.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#lead-form" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-700 hover:shadow-xl transition-all transform hover:-translate-y-1 text-center text-lg">
              Get Free GST Issue Review
            </a>
            <a href="https://wa.me/918793552739?text=Hello%20I%20am%20visiting%20gstnhelp.in%20and%20need%20GST%20assistance" target="_blank" rel="noreferrer" className="flex items-center justify-center border-2 border-green-600 text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition text-lg">
              <span>WhatsApp a GST Expert</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-700 font-semibold">
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-700 rounded-full p-1">✔</span> 1000+ Cases
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-700 rounded-full p-1">✔</span> Pan-India
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-700 rounded-full p-1">✔</span> Confidential
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-700 rounded-full p-1">✔</span> Independent
            </div>
          </div>
        </div>
        
        <div className="md:w-2/5 relative hidden md:block">
           <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-10 text-white shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500 border border-blue-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why GSTN Help?</h3>
              <ul className="space-y-5">
                <li className="flex gap-3 items-start">
                  <span className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs mt-0.5 shadow-md">✓</span>
                  <span className="text-lg">Ex-Department Experts & CAs</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs mt-0.5 shadow-md">✓</span>
                  <span className="text-lg">Legal & Technical Defense</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="bg-green-500 rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs mt-0.5 shadow-md">✓</span>
                  <span className="text-lg">Flat Fee Structure</span>
                </li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;