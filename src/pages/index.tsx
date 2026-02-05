import React, { useState } from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';
import Head from 'next/head';
import ServiceInquiryModal from '../components/ServiceInquiryModal';

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Complex GST Notices & Refund Resolution – India | GSTN Help</title>
        <meta name="description" content="Expert GST notice reply, refund support, and ITC reconciliation services in India. Get a free issue review from professional GST practitioners." />
      </Head>
      <Hero />

      {/* Trust Section */}
      <section className="bg-slate-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Businesses Trust GSTN Help</h2>
            <p className="mt-4 text-gray-600">We combine legal expertise with technical reconciliation to solve complex GST issues.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trust Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Experienced Professionals</h3>
                <p className="text-gray-600 leading-relaxed">Our team includes tax advocates and ex-department consultants who understand the law inside out.</p>
              </div>
            </div>

            {/* Trust Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Structured Approach</h3>
                <p className="text-gray-600 leading-relaxed">From initial review to final submission, we follow a case-based approach to maximize success.</p>
              </div>
            </div>

            {/* Trust Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Clear Pricing</h3>
                <p className="text-gray-600 leading-relaxed">No hidden charges. We provide a clear fee structure after the preliminary review of your notice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Our Professional Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Affordable, expert-led solutions for your GST compliance needs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Service 1 */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">GST Notice Reply & Resolution</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Drafting strategic replies, SCN handling, and personal hearing preparation.</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500 font-medium">Estimated</span>
              <span className="text-red-700 font-bold bg-red-50 px-3 py-1 rounded-full text-sm">Starting at ₹2,499</span>
            </div>
            <button onClick={() => setSelectedService('GST Notice Reply & Resolution')} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Avail Service
            </button>
          </div>

          {/* Service 2 */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">GST Refund Advisory & Filing</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">End-to-end support for refund applications, deficiency memos, and follow-ups.</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500 font-medium">Estimated</span>
              <span className="text-green-700 font-bold bg-green-50 px-3 py-1 rounded-full text-sm">Starting at ₹2,999</span>
            </div>
            <button onClick={() => setSelectedService('GST Refund Advisory & Filing')} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Avail Service
            </button>
          </div>

          {/* Service 3 */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">ITC Reconciliation & Recovery</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">GSTR-2A/2B vs Books reconciliation and vendor mismatch resolution.</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500 font-medium">Estimated</span>
              <span className="text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">Starting at ₹2,999</span>
            </div>
            <button onClick={() => setSelectedService('ITC Reconciliation & Recovery')} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Avail Service
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Final pricing depends on complexity and documents. Free review before engagement.</p>
          <a href="/services" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">View All Services &rarr;</a>
        </div>

        <ServiceInquiryModal isOpen={!!selectedService} onClose={() => setSelectedService(null)} serviceName={selectedService || ''} />
      </section>

      {/* Process Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How We Resolve Your Issue</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="relative">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold text-lg">Submit Issue</h4>
              <p className="text-blue-200 text-sm mt-2">Upload your notice or details securely.</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold text-lg">Free Review</h4>
              <p className="text-blue-200 text-sm mt-2">Expert assessment of your case.</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold text-lg">Strategy & Price</h4>
              <p className="text-blue-200 text-sm mt-2">Clear roadmap and quote shared.</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-semibold text-lg">Resolution</h4>
              <p className="text-blue-200 text-sm mt-2">Drafting, filing, and follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Testimonial name="Arvind Sharma, Business Owner (Delhi)" text="I had been struggling with a stuck GST refund for over eight months, which was severely affecting my business cash flow. Despite multiple visits to the department and following up with local consultants, there was zero progress. I was skeptical about using an online service, but GSTN Help changed my perspective entirely. Their team immediately identified a technical error in my original application that others had missed. They drafted a precise legal representation and handled the follow-ups professionally. Within just a few weeks of their intervention, the refund was processed and credited. The transparency and expertise they brought were impressive. I can finally focus on growing my business instead of chasing tax authorities. I highly recommend their services to any business owner facing similar delays." />
            <Testimonial name="Viresh Gupta, Freelancer" text="As a freelancer, receiving a GST notice was incredibly stressful. I didn't have a dedicated finance team, and the legal jargon was overwhelming. I reached out to GSTN Help, and they put me at ease immediately. They explained the issue in simple terms, outlined the risks, and proposed a clear strategy. What I appreciated most was their fair and transparent pricing—no hidden costs. They drafted a comprehensive reply addressing every point raised by the officer, and the notice was dropped without penalties. Their communication was prompt, professional, and reassuring throughout. It’s rare to find such high-quality professional support that is also affordable for freelancers. I will definitely use them for all my future compliance needs." />
            <Testimonial name="M. Menon, MSME (Karur)" text="We were facing a departmental audit that raised significant objections regarding our Input Tax Credit (ITC) claims. The discrepancies between our books and GSTR-2A were substantial, and we were looking at a hefty demand with penalties. The team at GSTN Help stepped in and performed a meticulous line-by-line reconciliation. They didn't just match numbers; they identified valid legal grounds to defend the mismatched credits and prepared a solid defense file. Their deep understanding of GST case law and technical reconciliation tools saved us a significant amount of money. They guided us through every query raised by the auditor with confidence. For an MSME like us in Karur, having access to such top-tier GST expertise remotely is a game-changer." />
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-8">
            <h2 className="text-3xl font-bold text-gray-900">Get a Free GST Issue Review</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Don't let GST notices or refund delays stress you out. Submit your case details below, and our experts will provide a preliminary assessment at no cost.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="text-green-600">✔</span> 100% Confidential & Secure</li>
              <li className="flex items-center gap-2"><span className="text-green-600">✔</span> Response within 24 Hours</li>
              <li className="flex items-center gap-2"><span className="text-green-600">✔</span> No Obligation to Hire</li>
            </ul>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 text-gray-600 text-sm leading-relaxed">
          <h3 className="font-bold text-gray-900 mb-2">Expert GST Assistance Online</h3>
          <p className="mb-4">
            If you are searching for <strong>gst notice reply</strong>, <strong>gst refund help</strong>, or <strong>gst itc reconciliation</strong>, GSTN Help provides professional legal and technical support. We assist with ASMT-10, DRC-01, and other complex notices.
          </p>
          <h3 className="font-bold text-gray-900 mb-2">Resolve ITC Mismatches & Audits</h3>
          <p>
            Our team specializes in <strong>gst audit defense</strong> and resolving data mismatches between GSTR-2A/2B and books. We help minimize penalties and secure legitimate refunds for MSMEs and startups.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;