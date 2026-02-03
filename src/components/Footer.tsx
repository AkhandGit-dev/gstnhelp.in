import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold text-lg mb-4">GSTN Help</h4>
          <p className="text-sm">Expert Help for GST Notices, Refunds & Compliance – India.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white">Notice Reply</Link></li>
            <li><Link href="/services" className="hover:text-white">Refund Advisory</Link></li>
            <li><Link href="/services" className="hover:text-white">ITC Reconciliation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Disclaimer</h4>
          <p className="text-xs leading-relaxed">
            Independent GST advisory services. Not affiliated with GSTN or the government. All services are provided by qualified professionals.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-center text-xs">
        &copy; {new Date().getFullYear()} GSTN Help. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;