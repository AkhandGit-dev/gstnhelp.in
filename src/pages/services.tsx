import React from 'react';
import Head from 'next/head';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'GST Notice Reply & Dispute Resolution',
      desc: 'We draft replies, prepare evidence, and propose strategies for best outcomes. Representation during hearings and appeals.',
      price: '₹20,000 - ₹70,000+'
    },
    {
      title: 'GST Refund Advisory & Filing Support',
      desc: 'End-to-end support for refund claims, reconciling returns and supporting documents with the department.',
      price: '₹10,000 - ₹50,000+'
    },
    {
      title: 'ITC Reconciliation & Recovery',
      desc: 'Forensic reconciliation between books and GST records, recovery plans and retro claim assistance.',
      price: '₹15,000 - ₹80,000+'
    },
    {
      title: 'GST Audit Defense & Health Check',
      desc: 'Audit preparedness, issue rectification and defense strategy during assessments.',
      price: '₹20,000+'
    },
    {
      title: 'GST Appeals & Representation Support',
      desc: 'Drafting appeals, coordination with advocates and representation at appellate forums.'
    },
    {
      title: 'Complex GST Advisory & Case Consulting',
      desc: 'Customized consulting for industry-specific GST challenges and litigation planning.'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <Head>
        <title>Services — GSTN Help</title>
        <meta name="description" content="Detailed GST services: notice reply, refund advisory, ITC reconciliation, audit defense and appeals." />
      </Head>

      <h1 className="text-2xl font-bold">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} desc={s.desc} price={s.price} />
        ))}
      </div>
    </div>
  );
};

export default Services;