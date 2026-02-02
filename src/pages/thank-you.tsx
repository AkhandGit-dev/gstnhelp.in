import React from 'react';
import { useRouter } from 'next/router';

const ThankYou = () => {
  const router = useRouter();
  const { ref } = router.query;
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">Thank you!</h1>
      <p className="mt-2">We have received your case submission{ref ? ` (Ref: ${ref})` : ''}. Our team will review and contact you within 24-48 business hours.</p>
      <p className="mt-4">If urgent, you may contact us on WhatsApp or call our support line.</p>
    </div>
  );
};

export default ThankYou;