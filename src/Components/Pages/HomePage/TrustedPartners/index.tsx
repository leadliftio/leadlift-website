import React from "react";
import symfony from "../../../Assets/Images/symfony.png";
import jobfactor from "../../../Assets/Images/jobFactor.png";

const TrustedPartners = () => {
  return (
    <div className="w-screen bg-[#CCCCE5] h-full py-[50px] px-[210px] relative">
      <div className="w-full h-full flex items-center justify-between">
        <h6
          className="text-[36px] text-brandBlue font-montserrat font-semibold"
          data-aos="fade-up">
          Trusted by:
        </h6>
        <img
          src={symfony}
          alt="Symfony"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        />
        <img
          src={jobfactor}
          alt="Jobfactor"
          data-aos="fade-up"
          data-aos-delay="75"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        />
      </div>
    </div>
  );
};

export default TrustedPartners;
