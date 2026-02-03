import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-2 flex items-center gap-4">
        <Link href="/" className="flex-grow">
          <img 
            src="/logo.png" 
            alt="GSTN Help" 
            className="h-24 w-auto object-contain object-left max-w-full" 
          />
        </Link>
        <nav className="flex items-center gap-6 shrink-0">
          <Link href="/" className="font-medium text-gray-700 hover:text-blue-900">Home</Link>
          <Link href="/services" className="font-medium text-gray-700 hover:text-blue-900">Services</Link>
          <Link href="/about" className="font-medium text-gray-700 hover:text-blue-900">About</Link>
          <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-900">Contact</Link>
          <Link href="/submit" className="bg-green-600 text-white px-5 py-3 rounded font-bold shadow hover:bg-green-700 transition">Get Free GST Issue Review</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;