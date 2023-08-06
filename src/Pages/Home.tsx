import React from "react";
import Footer from "../Components/Footer";
import AboutLeadLift from "../Components/Pages/HomePage/AboutLeadlift";
import FreeTrainingSection from "../Components/Pages/HomePage/FreeTrainingSection";
import Navbar from "../Components/Navbar";
import OurServices from "../Components/Pages/HomePage/Services";
import Hero from "../Components/Pages/HomePage/Hero";
import TrustedPartners from "../Components/Pages/HomePage/TrustedPartners";
import ScrollToTopButton from "../Components/Buttons";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[75px] md:pt-[100px] overflow-x-hidden">
        <Hero />
        <TrustedPartners />
        <OurServices />
        <FreeTrainingSection />
        <AboutLeadLift />
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
