import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <ChatWidget />
      <Footer />
    </>
  );
};

export default Layout;