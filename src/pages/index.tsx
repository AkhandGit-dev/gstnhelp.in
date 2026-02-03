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
          <ServiceCard title="GST Notice Reply & Resolution" desc="Drafting strategic replies, SCN handling, and personal hearing preparation." price="Starting at ₹2,999" />
          <ServiceCard title="GST Refund Advisory & Filing" desc="End-to-end support for refund applications, deficiency memos, and follow-ups." price="Starting at ₹3,999" />
          <ServiceCard title="ITC Reconciliation & Recovery" desc="GSTR-2A/2B vs Books reconciliation and vendor mismatch resolution." price="Starting at ₹4,999" />
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
            <Testimonial name="A. Sharma, Business Owner" text="My GST refund was stuck for 8 months. GSTN Help resolved it in weeks." />
            <Testimonial name="V. Gupta, Freelancer" text="Clear communication and fair pricing. Highly recommended for notice replies." />
            <Testimonial name="M. Menon, MSME" text="Excellent ITC reconciliation support during our departmental audit." />
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

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">GSTN Help</h4>
            <p className="text-sm">Expert Help for GST Notices, Refunds & Compliance – India.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:text-white">Notice Reply</a></li>
              <li><a href="/services" className="hover:text-white">Refund Advisory</a></li>
              <li><a href="/services" className="hover:text-white">ITC Reconciliation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="#lead-form" className="hover:text-white">Contact</a></li>
              <li><span className="cursor-not-allowed">Privacy Policy</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Disclaimer</h4>
            <p className="text-xs leading-relaxed">
              Independent GST advisory services. Not affiliated with GSTN or the government. All services are provided by qualified professionals.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} GSTN Help. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;