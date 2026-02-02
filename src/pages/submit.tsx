import React from 'react';
import Head from 'next/head';
import LeadForm from '../components/LeadForm';

const Submit = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head>
        <title>Submit a Case — GSTN Help</title>
        <meta name="description" content="Submit your GST case for a free review. Provide details and supporting documents for notices, refunds, ITC and audits." />
      </Head>

      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Submit your case</h1>
          <p className="mt-2 text-gray-600">Provide as much detail and supporting documents as possible. We will review and contact you with a preliminary assessment.</p>
        </div>

        <LeadForm />
      </div>
    </div>
  );
};

export default Submit;