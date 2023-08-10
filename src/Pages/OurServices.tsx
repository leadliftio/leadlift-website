import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SocialMediaManagement from "../Components/Pages/Services/SocialMediaManagement";
import ContentCreation from "../Components/Pages/Services/ContentCreation";
import ContentStrategy from "../Components/Pages/Services/ContentStrategy";
import CommunityMangement from "../Components/Pages/Services/CommunityMangement";
import Hero from "../Components/Pages/Services/Hero";
import ServicesCta from "../Components/Pages/Services/ServicesCta";

const OurServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[75px] md:pt-[100px]">
        <Hero />
        <ServicesCta />
        <div className="w-full bg-white py-[40px] text-center font-bold font-montserrat text-[28px] md:text-[45px] text-brandBlue">
          Our Services
        </div>
        <SocialMediaManagement />
        <ContentCreation />
        <ContentStrategy />
        <CommunityMangement />
      </div>
      <Footer />
    </>
  );
};

export default OurServicesPage;
