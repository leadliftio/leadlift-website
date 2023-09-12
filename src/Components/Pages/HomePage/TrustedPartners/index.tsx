import React from "react";
import symfony from "../../../Assets/Images/symfony.png";
import jobfactor from "../../../Assets/Images/jobFactor.png";

const TrustedPartners = () => {
  return (
    <div className="w-screen bg-[#CCCCE5] h-full py-[20px] md:py-[50px] px-[16px] md:px-[210px] relative">
      <div className="container max-w-[1200px] mx-auto">
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <h6 className="text-[36px] text-brandBlue font-montserrat font-semibold">
            Trusted by:
          </h6>
          <img src={symfony} alt="Symfony" />
          <img src={jobfactor} alt="Jobfactor" />
        </div>
        <div className="md:hidden flex flex-col gap-[16px] w-full h-full items-center justify-between">
          <h6 className="text-[20px] text-brandBlue font-montserrat font-semibold">
            Trusted by:
          </h6>
          <div className="flex items-center gap-[15px]">
            <div className="flex-1">
              <img src={symfony} alt="Symfony" className="w-full" />
            </div>
            <div className="flex-1">
              <img src={jobfactor} alt="Jobfactor" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
