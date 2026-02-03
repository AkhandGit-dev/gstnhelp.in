import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>GSTN Help — Complex GST Services</title>
        <meta name="description" content="Expert analysis and support for GST notices, refund claims, ITC reconciliation, audit issues, and compliance disputes." />
      </Head>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <ChatWidget />
      <Footer />
    </>
  );
};

export default Layout;