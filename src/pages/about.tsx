import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Head>
        <title>About — GSTN Help</title>
        <meta name="description" content="Why choose GSTN Help: experienced GST professionals providing independent advisory and representation." />
      </Head>

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GSTN Help</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Bridging the gap between complex GST laws and business peace of mind.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Mission */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To provide clear, practical, and timely resolution for complex GST issues facing businesses and professionals across India. We believe in simplifying compliance so you can focus on growth.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">⚖️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Legal Defense</h3>
            <p className="text-gray-600">Our team consists of experienced tax advocates and ex-department officials who understand the nuances of GST law.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 text-2xl">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Outcome-Focused</h3>
            <p className="text-gray-600">We don't just file replies; we craft strategies aimed at dropping demands and securing refunds.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 text-2xl">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Confidential & Secure</h3>
            <p className="text-gray-600">Your business data is handled with the utmost confidentiality and security protocols.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4 text-2xl">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden costs. We provide a clear fee structure after a preliminary review of your case.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Ready to resolve your GST issue?</h2>
          <Link href="/submit" className="inline-block bg-white text-blue-800 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
            Get a Free Case Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;