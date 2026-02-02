import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Head>
        <title>About — GSTN Help</title>
        <meta name="description" content="Why choose GSTN Help: experienced GST professionals providing independent advisory and representation." />
      </Head>

      <h1 className="text-2xl font-bold">About GSTN Help</h1>
      <p className="mt-4 text-gray-700">Our mission is to provide clear, practical and timely resolution for complex GST issues facing businesses and professionals across India.</p>

      <h3 className="mt-6 font-semibold">Why choose GSTN Help?</h3>
      <ul className="list-disc pl-6 mt-2">
        <li>Experienced GST professionals and tax advocates</li>
        <li>Practical, outcome-focused strategies</li>
        <li>Transparent pricing and timelines</li>
        <li>Client confidentiality and data security</li>
      </ul>

      <h3 className="mt-6 font-semibold">Experience Summary</h3>
      <p className="mt-2 text-gray-700">We have worked on notices, refund claims and ITC reconciliations for clients across industries including manufacturing, services, fintech, and exports.</p>

      <h3 className="mt-6 font-semibold">Disclaimer</h3>
      <p className="mt-2 text-gray-700">Independent GST advisory services not affiliated with GSTN/government.</p>
    </div>
  );
};

export default About;