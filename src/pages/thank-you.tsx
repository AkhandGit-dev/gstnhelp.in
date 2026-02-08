import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ThankYou = () => {
  const router = useRouter();
  const { ref } = router.query;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Head>
        <title>Thank You — GSTN Help</title>
        {/* Event snippet for Submit lead form conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-1038261850/TlEfCNPc_fIbENq8iu8D'});
            `,
          }}
        />
      </Head>

      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Submission Received!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for contacting GSTN Help. We have received your details{ref ? ` (Ref: #${ref})` : ''}.
          <br />
          Our expert will review your case and contact you shortly.
        </p>

        <Link href="/" className="block w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;