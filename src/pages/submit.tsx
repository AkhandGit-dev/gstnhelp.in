import React from 'react';
import Head from 'next/head';
import LeadForm from '../components/LeadForm';

const Submit = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Head>
        <title>Submit a Case — GSTN Help</title>
        <meta name="description" content="Submit your GST case for a free review. Provide details and supporting documents for notices, refunds, ITC and audits." />
      </Head>

      <h1 className="text-2xl font-bold">Submit your case</h1>
      <p className="mt-2 text-gray-700">Provide as much detail and supporting documents as possible. We will review and contact you with a preliminary assessment.</p>

      <div className="mt-6">
        <LeadForm />
      </div>
    </div>
  );
};

export default Submit;