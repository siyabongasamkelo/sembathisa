import React from "react";
import Home from "../components/homeComponents/Home";
import About from "../components/aboutusComponents/About";
import OurServices from "../components/ourservices/OurServices";
import ContactUs from "../components/ContactUs/ContactUs";
import JoinNow from "../components/joinNow/JoinNow";
import Faq from "../components/FAQcomponnets/Faq.js";
import Footer from "../components/layout/Footer";
import HomeMobile from "../components/homeComponents/HomeMobile";
import AboutMobile from "../components/aboutusComponents/AboutMobile";
import OurServicesMobile from "../components/ourservices/OurServicesMobile";
import JoinNowMobile from "../components/joinNow/JoinNowMobile";
import ContactMobile from "../components/ContactUs/ContactMobile";
import FaqMobile from "../components/FAQcomponnets/FaqMobile";
import FooterMobile from "../components/layout/FooterMobile";
const HomePage = () => {
  return (
    <>
      {/*---------------------------- Desktop Pages --------------------------*/}
      <Home />
      <About />
      <OurServices />
      <JoinNow />
      <ContactUs />
      <Faq />
      <Footer />

      {/*---------------------------- Mobile Pages --------------------------*/}

      <HomeMobile />
      <AboutMobile />
      <OurServicesMobile />
      <JoinNowMobile />
      <ContactMobile />
      <FaqMobile />
      <FooterMobile />

      {/*----------------------------Tablets Pages------------------------  */}
    </>
  );
};

export default HomePage;
