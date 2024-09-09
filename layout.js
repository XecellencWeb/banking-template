import { usePathname } from "next/navigation";
import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";
import Preloader from "./preloader/Preloader";
import Ready from "./ready/Ready";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { support_number } from "./data/names";

const Layout = ({ children }) => {
  const pathname = usePathname()

  return (
    <>
      <NavBar />
      {children}
      {pathname !== 'account' || pathname !== 'processing-transaction' && <Ready />}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
      {/* Pre Loader */}
      <Preloader />
      <FloatingWhatsApp phoneNumber={support_number} accountName="Customer Care" avatar="/avater.jpeg" />
    </>
  );
};

export default Layout;
