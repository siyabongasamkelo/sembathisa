import React from "react";
import Home from "../components/homeComponents/Home";
import About from "../components/aboutusComponents/About";
import OurServices from "../components/ourservices/OurServices";
import ContactUs from "../components/ContactUs/ContactUs";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <OurServices />
      <ContactUs />
    </>
  );
};

export default HomePage;
