import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import LeadForm from '../components/LeadForm';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Complex GST Notices & Refund Resolution – India | GSTN Help</title>
        <meta name="description" content="Expert GST notice reply, refund support, and ITC reconciliation services in India. Get a free issue review from professional GST practitioners." />
      </Head>
      <Hero />

      {/* Trust Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Businesses Trust GSTN Help</h2>
            <p className="mt-4 text-gray-600">We combine legal expertise with technical reconciliation to solve complex GST issues.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="font-bold text-xl text-blue-900 mb-2">Experienced Professionals</h3>
              <p className="text-gray-600">Our team includes tax advocates and ex-department consultants who understand the law inside out.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="font-bold text-xl text-blue-900 mb-2">Structured Approach</h3>
              <p className="text-gray-600">From initial review to final submission, we follow a case-based approach to maximize success.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <h3 className="font-bold text-xl text-blue-900 mb-2">Clear Pricing</h3>
              <p className="text-gray-600">No hidden charges. We provide a clear fee structure after the preliminary review of your notice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Our Professional Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Affordable, expert-led solutions for your GST compliance needs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <ServiceCard title="GST Notice Reply & Resolution" desc="Drafting strategic replies, SCN handling, and personal hearing preparation." price="Starting at ₹2,499" />
          <ServiceCard title="GST Refund Advisory & Filing" desc="End-to-end support for refund applications, deficiency memos, and follow-ups." price="Starting at ₹2,999" />
          <ServiceCard title="ITC Reconciliation & Recovery" desc="GSTR-2A/2B vs Books reconciliation and vendor mismatch resolution." price="Starting at ₹2,999" />
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Final pricing depends on complexity and documents. Free review before engagement.</p>
          <a href="/services" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">View All Services &rarr;</a>
        </div>
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
    </>
  );
};

export default Home;