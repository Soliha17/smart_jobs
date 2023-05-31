import React from "react";

import "./about.css";

import AboutHero from "../../components/atoms/about-hero/AboutHero";
import Counts from "../../components/atoms/counts/Counts";
import ContactUs from "../../components/atoms/contact-us/ContactUs";
import GalleryUs from "../../components/atoms/gallery-us/GalleryUs";
import AccordionFaq from "../../components/atoms/accordion-faq/AccordionFaq";
import Footer from "../../components/layout/footer/Footer";

const About = () => {
  return (
    <div className="about">
      <AboutHero />
      <Counts />
      <ContactUs />
      <GalleryUs />
      <AccordionFaq />
      <Footer />
    </div>
  );
};

export default About;
