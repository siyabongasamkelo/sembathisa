import React from "react";
import Home from "../components/homeComponents/Home";
import About from "../components/aboutusComponents/About";
import OurServices from "../components/ourservices/OurServices";
import ContactUs from "../components/ContactUs/ContactUs";
import JoinNow from "../components/joinNow/JoinNow";
import Faq from "../components/FAQcomponnets/Faq.js";
import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <OurServices />
      <JoinNow />
      <ContactUs />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
