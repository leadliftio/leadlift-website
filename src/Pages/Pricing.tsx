import React from "react";
import Footer from "../Components/Footer";
import Pricing from "../Components/Pages/Pricing";
import Navbar from "../Components/Navbar";

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px] md:pt-[75px]">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
