import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <header className="bg-white shadow">
      {isHome ? (
        <div className="flex flex-col w-full">
          {/* Banner container with strict height and centered content */}
          <div className="w-full bg-white border-b border-gray-100 h-[120px] md:h-[480px]">
            <Link href="/" className="block w-full h-full">
              <img 
                src="/logo.png" 
                alt="GSTN Help" 
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <div className="container mx-auto px-6 py-2">
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <Link href="/" className="font-medium text-gray-700 hover:text-blue-900 text-lg">Home</Link>
              <Link href="/services" className="font-medium text-gray-700 hover:text-blue-900 text-lg">Services</Link>
              <Link href="/about" className="font-medium text-gray-700 hover:text-blue-900 text-lg">About</Link>
              <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-900 text-lg">Contact</Link>
              <Link href="/submit" className="bg-green-600 text-white px-6 py-3 rounded font-bold shadow hover:bg-green-700 transition">Get Free GST Issue Review</Link>
            </nav>
          </div>
        </div>
      ) : (
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
      )}
    </header>
  );
};

export default Header;