import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="GSTN Help" className="h-20 w-auto object-contain" />
        </Link>
        <nav className="space-x-4 flex items-center">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/submit" className="bg-green-600 text-white px-4 py-2 rounded">Get Free GST Issue Review</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;