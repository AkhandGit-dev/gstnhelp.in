import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <header className="w-full bg-white shadow">
      {isHome ? (
        <>
          {/* ================= HERO BANNER ================= */}
          <div className="relative w-full h-[260px] md:h-[520px] overflow-hidden">
            <Link href="/" className="absolute inset-0">
              <img
                src="/logo.png"   // ideally use a banner image here
                alt="GSTN Help"
                className="w-full h-full object-cover object-center"
              />
            </Link>
          </div>

          {/* ================= NAV BAR ================= */}
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <Link href="/" className="font-medium text-gray-700 hover:text-blue-900 text-lg">
                Home
              </Link>
              <Link href="/services" className="font-medium text-gray-700 hover:text-blue-900 text-lg">
                Services
              </Link>
              <Link href="/about" className="font-medium text-gray-700 hover:text-blue-900 text-lg">
                About
              </Link>
              <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-900 text-lg">
                Contact
              </Link>
              <Link
                href="/submit"
                className="bg-green-600 text-white px-6 py-3 rounded font-bold shadow hover:bg-green-700 transition"
              >
                Get Free GST Issue Review
              </Link>
            </nav>
          </div>
        </>
      ) : (
        /* ================= INNER PAGES HEADER ================= */
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="GSTN Help"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/" className="font-medium text-gray-700 hover:text-blue-900">
              Home
            </Link>
            <Link href="/services" className="font-medium text-gray-700 hover:text-blue-900">
              Services
            </Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-blue-900">
              About
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-900">
              Contact
            </Link>
            <Link
              href="/submit"
              className="bg-green-600 text-white px-5 py-3 rounded font-bold shadow hover:bg-green-700 transition"
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
