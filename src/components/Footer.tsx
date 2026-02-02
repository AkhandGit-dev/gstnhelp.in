import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} GSTN Help — Complex GST Services. All rights reserved.</p>
        <p className="text-xs mt-2">Disclaimer: Independent GST advisory services not affiliated with GSTN / government.</p>
      </div>
    </footer>
  );
};

export default Footer;