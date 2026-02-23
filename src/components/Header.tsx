import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <header className="w-full bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 transition-all duration-300">
      {isHome ? (
        <>
          {/* ================= NAV BAR (Green Strip) ================= */}
          <div className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white shadow-sm">
            <div className="container mx-auto px-6 py-2">
              <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base">
                <Link href="/" className="font-medium text-white hover:text-green-200 transition-colors">
                  Home
                </Link>
                <Link href="/services" className="font-medium text-white hover:text-green-200 transition-colors">
                  Services
                </Link>
                <Link href="/about" className="font-medium text-white hover:text-green-200 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="font-medium text-white hover:text-green-200 transition-colors">
                  Contact
                </Link>
                <Link
                  href="/submit"
                  className="bg-white text-green-800 px-4 py-1.5 rounded-full font-bold shadow hover:bg-gray-50 hover:scale-105 transition-all text-xs md:text-sm"
                >
                  Get Free GST Issue Review
                </Link>
              </nav>
            </div>
          </div>

          {/* ================= HERO BANNER ================= */}
          <div
            className="
              relative 
              w-full 
              min-h-[340px] 
              md:min-h-[520px]
              overflow-hidden
            "
          >
            <img
              src="/logo.png"   // this is your banner image
              alt="GSTN Help"
              className="
                w-full
                h-full
                object-cover
                object-top
              "
            />
          </div>
        </>
      ) : (
        /* ================= INNER PAGES HEADER ================= */
        <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="GSTN Help"
              className="h-12 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/" className="font-medium text-sm text-gray-600 hover:text-blue-700 transition-colors">
              Home
            </Link>
            <Link href="/services" className="font-medium text-sm text-gray-600 hover:text-blue-700 transition-colors">
              Services
            </Link>
            <Link href="/about" className="font-medium text-sm text-gray-600 hover:text-blue-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-medium text-sm text-gray-600 hover:text-blue-700 transition-colors">
              Contact
            </Link>
            <Link
              href="/submit"
              className="bg-green-600 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-green-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
            >
              Get Free GST Issue Review
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
