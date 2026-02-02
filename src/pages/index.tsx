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
        <meta name="description" content="Professional GST notice reply and refund support services in India. Experts in complex GST issues, ITC reconciliation, and audit defense." />
      </Head>
      <Hero />

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <ServiceCard title="GST Notice Reply & Dispute Resolution" desc="Draft strategic replies and representation in notices and show-cause proceedings." price="₹20,000 - ₹70,000+" />
          <ServiceCard title="GST Refund Advisory & Filing Support" desc="Assist with refund claims, documentation and follow-up with tax authorities." price="₹10,000 - ₹50,000+" />
          <ServiceCard title="ITC Reconciliation & Recovery" desc="Reconcile purchase and input tax credit issues with ERP and GST records." price="₹15,000 - ₹80,000+" />
        </div>

        <div className="mt-8 text-gray-700">
          <p><strong>SEO:</strong> If you're searching for <em>gst notice reply</em>, <em>gst notice help online</em>, or <em>gst refund support</em>, our team provides focused legal and technical assistance for complex GST matters. We specialize in <em>gst itc reconciliation</em> and <em>gst audit defense</em>, helping businesses secure refunds, resolve disputes, and minimize penalties. Learn more on our <a href="/services" className="text-blue-600">Services</a> page.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Testimonial name="A. Sharma" text="Resolved a complex refund issue within weeks. Highly recommend." />
            <Testimonial name="V. Gupta" text="Timely and professional response to GST notice." />
            <Testimonial name="M. Menon" text="Clear strategy and great follow through on ITC reconciliation." />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-8">
            <h2 className="text-3xl font-bold text-gray-900">Get a free GST issue review</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">Submit your case details and our experts will contact you with a preliminary assessment. We handle data with strict confidentiality.</p>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;