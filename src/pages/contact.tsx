import React from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Head>
        <title>Contact — GSTN Help</title>
        <meta name="description" content="Contact GSTN Help via email, phone or WhatsApp for prompt assistance with GST notices and refunds." />
      </Head>

      <h1 className="text-2xl font-bold">Contact Us</h1>
      <div className="mt-4">
        <p>Email: <a className="text-blue-600" href="mailto:support@gstnhelp.in">support@gstnhelp.in</a></p>
        <p>Phone: <a className="text-blue-600" href="tel:+919999999999">+91 99999 99999</a></p>
        <p className="mt-4">WhatsApp: <a className="text-green-600" href="https://wa.me/919999999999">Chat on WhatsApp</a></p>
      </div>
    </div>
  );
};

export default Contact;