import React from "react";
import cta_image from "../../Assets/Images/cta.png";

export const TextPill = ({ children }: any) => {
  return (
    <div className="p-[8px] md:p-[10px] bg-white text-black text-[11px] md:text-base font-semibold font-openSans rounded-[16px] md:rounded-[20px] shadow-card">
      {children}
    </div>
  );
};

const ServicesCta = () => {
  return (
    <div className="w-full h-full md:h-[850px] bg-[#CCCCE5]">
      <div className="container mx-auto w-full h-full flex justify-center items-center relative py-[50px] px-[16px] md:px-0">
        <div className="">
          <div className="flex items-center flex-wrap justify-centr gap-3 mb-[50px] md:mb-0">
            <div className="relative md:absolute md:top-[100px] md:left-[16%]">
              <TextPill>Personalized Approach</TextPill>
            </div>
            <div className="relative md:absolute md:bottom-[50%] md:left-[217px]">
              <TextPill>Flexibility</TextPill>
            </div>
            <div className="relative md:absolute md:bottom-[214px] md:left-[150px]">
              <TextPill>Transparent Reporting</TextPill>
            </div>
            <div className="relative md:absolute md:bottom-[100px] md:left-[25%]">
              <TextPill>Higher Search Ranking</TextPill>
            </div>
          </div>
          <div className="">
            <img
              src={cta_image}
              alt=""
              className="w-full h-auto md:w-[669px] md:h-[496px]"
            />
          </div>
          <div className="flex items-center flex-wrap gap-3 mt-[50px] md:mt-0">
            <div className="relative md:absolute md:bottom-[100px] md:right-[25%]">
              <TextPill>Cutting-edge Technology</TextPill>
            </div>
            <div className="relative md:absolute md:bottom-[235px] md:right-[234px]">
              <TextPill>Save Time</TextPill>
            </div>
            <div className="relative md:absolute md:bottom-[50%] md:right-[150px]">
              <TextPill>Data-driven Insight</TextPill>
            </div>
            <div className="relative md:absolute md:top-[100px] md:right-[16%]">
              <TextPill>Increased Visibility</TextPill>
            </div>
            <div className="relative md:absolute md:top-[100px] md:left-[45%] ">
              <TextPill>Industry Experience</TextPill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCta;
