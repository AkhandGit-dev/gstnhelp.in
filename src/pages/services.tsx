import React, { useState } from 'react';
import Head from 'next/head';
import ServiceCard from '../components/ServiceCard';
import ServiceInquiryModal from '../components/ServiceInquiryModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: 'GST Notice Reply & Resolution',
      desc: 'Drafting strategic replies, handling SCNs, and preparing for personal hearings. We handle ASMT-10, DRC-01, and more.',
      price: 'Starting at ₹2,499'
    },
    {
      title: 'GST Refund Advisory & Filing',
      desc: 'End-to-end support for refund claims (exports, inverted duty), deficiency memo handling, and department follow-up.',
      price: 'Starting at ₹2,999'
    },
    {
      title: 'ITC Reconciliation & Recovery',
      desc: 'Detailed reconciliation between books and GSTR-2A/2B. Vendor follow-up strategies and recovery plans.',
      price: 'Starting at ₹2,999'
    },
    {
      title: 'GST Audit Support',
      desc: 'Department audit handling, issue rectification, and defense strategy during assessments.',
      price: 'Custom Pricing'
    },
    {
      title: 'Appeals & Representation',
      desc: 'Drafting appeals, coordination with advocates, and representation at appellate forums.'
    },
    {
      title: 'Complex Case Consulting',
      desc: 'Customized consulting for industry-specific GST challenges, litigation planning, and second opinions.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Head>
        <title>Services — GSTN Help</title>
        <meta name="description" content="Detailed GST services: notice reply, refund advisory, ITC reconciliation, audit defense and appeals." />
      </Head>

      {/* Hero */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Professional Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive GST solutions tailored for businesses, professionals, and MSMEs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <ServiceCard 
            key={s.title} 
            title={s.title} 
            desc={s.desc} 
            price={s.price} 
            onAvail={() => setSelectedService(s.title)}
          />
        ))}
        </div>
      </div>
      <ServiceInquiryModal isOpen={!!selectedService} onClose={() => setSelectedService(null)} serviceName={selectedService || ''} />
    </div>
  );
};

export default Services;