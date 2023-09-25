import React from "react";

import cta_image from "../../Assets/Images/cta.png";

export const TextPill = ({ children }: any) => {
  return (
    <div className="p-[8px] lg:p-[10px] bg-white text-black text-[12px] lg:text-base font-semibold font-openSans rounded-[16px] lg:rounded-[20px] shadow-card">
      {children}
    </div>
  );
};

const ServicesCta = () => {
  return (
    <div className="w-full h-full lg:h-[850px] bg-[#CCCCE5]">
      <div className="container max-w-[1200px] mx-auto w-full h-full flex justify-center items-center relative py-[50px] px-[16px] lg:px-0">
        <div className="">
          <div className="flex items-center flex-wrap justify-between gap-4 mb-[20px] lg:mb-0">
            <div className="relative lg:absolute lg:top-[100px] lg:left-[16%]">
              <TextPill>Personalized Approach</TextPill>
            </div>
            <div className="relative lg:absolute lg:bottom-[100px] lg:right-[25%]">
              <TextPill>Cutting-edge Technology</TextPill>
            </div>
          </div>{" "}
          <div className="flex items-center flex-wrap justify-between gap-4 mb-[50px] lg:mb-0">
            <div className="relative lg:absolute lg:bottom-[214px] lg:left-[0px]">
              <TextPill>Transparent Reporting</TextPill>
            </div>
            <div className="relative lg:absolute lg:bottom-[100px] lg:left-[25%]">
              <TextPill>Higher Search Ranking</TextPill>
            </div>
          </div>
          <div className="">
            <img
              src={cta_image}
              alt=""
              className="w-full h-auto lg:w-[669px] lg:h-[496px]"
            />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3 mt-[50px] lg:mt-0">
            <div className="relative lg:absolute lg:bottom-[50%] lg:right-[50px]">
              <TextPill>Data-driven Insight</TextPill>
            </div>

            <div className="relative lg:absolute lg:top-[100px] lg:left-[45%] ">
              <TextPill>Industry Experience</TextPill>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3 mt-[20px] lg:mt-0">
            <div className="relative lg:absolute lg:bottom-[235px] lg:right-[0px]">
              <TextPill>Save Time</TextPill>
            </div>
            <div className="relative lg:absolute lg:bottom-[50%] lg:left-[100px]">
              <TextPill>Flexibility</TextPill>
            </div>
            <div className="relative lg:absolute lg:top-[100px] lg:right-[16%]">
              <TextPill>Increased Visibility</TextPill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCta;
