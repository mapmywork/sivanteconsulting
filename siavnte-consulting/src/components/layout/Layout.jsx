import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import FloatingButtons from './FloatingButtons';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
