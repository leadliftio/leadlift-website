import React from "react";
import symfony from "../../../Assets/Images/symfony.png";
import jobfactor from "../../../Assets/Images/jobFactor.png";

const TrustedPartners = () => {
  return (
    <div className="w-screen bg-[#CCCCE5] h-full py-[20px] md:py-[50px] px-[16px] md:px-[210px] relative">
      <div className="container mx-auto">
        <div className="hidden md:flex w-full h-full items-center justify-between">
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
        <div className="md:hidden flex flex-col gap-[16px] w-full h-full items-center justify-between">
          <h6
            className="text-[20px] text-brandBlue font-montserrat font-semibold"
            data-aos="fade-up">
            Trusted by:
          </h6>
          <div className="flex items-center gap-[15px]">
            <div className="flex-1">
              <img
                src={symfony}
                alt="Symfony"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <img
                src={jobfactor}
                alt="Jobfactor"
                data-aos="fade-up"
                data-aos-delay="75"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
