import React from 'react';
import SEO from '../components/SEO';

const Disclaimer = () => (
  <div className="container mx-auto px-6 py-12">
    <SEO 
      title="Disclaimer" 
      description="Disclaimer for GSTN Help. We are an independent advisory service and not affiliated with the Government of India or GSTN."
      canonical="https://gstnhelp.in/disclaimer"
    />
    <h1 className="text-2xl font-bold text-gray-900">Disclaimer</h1>
    <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
      <p>The information provided on <strong>GSTN Help</strong> (gstnhelp.in) is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
      
      <h2 className="text-lg font-semibold text-gray-900">Professional Disclaimer</h2>
      <p>The Site cannot and does not contain legal or tax advice. The legal/tax information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of legal or tax advice.</p>
      
      <p><strong>GSTN Help</strong> is a private consultancy service and is <strong>not affiliated</strong> with the Goods and Services Tax Network (GSTN), the Central Board of Indirect Taxes and Customs (CBIC), or the Government of India.</p>
    </div>
  </div>
);

export default Disclaimer;