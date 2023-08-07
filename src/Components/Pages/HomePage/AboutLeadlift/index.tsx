import React from "react";
import { LeadLiftLogoIllustration } from "../../../Assets/Icons";

const AboutLeadLift = () => {
  return (
    <div className="w-full box-border bg-brandLightPurple px-[20px] md:px-0 py-[50px] md:py-[100px] relative overflow-hidden">
      <div className="container mx-auto text-center flex flex-col items-center relative">
        <h2 className="mb-[20px] text-brandBlue font-montserrat text-[28px] md:text-[45px] font-bold  leading-[28px]">
          About{" "}
          <span className="md:text-brandBlue text-brandGreen">Leadlift</span>
        </h2>
        <p className="mb-[20px] text-brandBlue font-montserrat text-base md:text-[20px] font-semibold  leading-[28px]">
          Leadlift - More Than Just a Social Media Company
        </p>
        <p className="w-full md:w-[60%] font-openSans text-base text-brandBlue leading-[28px]">
          Leadlift was founded with one goal in mind - to help busy
          professionals and company like you maintain a strong online presence
          without the stress and time commitment. We're not just a social media
          company; we're your personal social media team. We work closely with
          you to understand your professional goals and audience, and then we
          create a personalized social media strategy that aligns with these
          goals. With LeadLift, you can rest easy knowing your online presence
          is in good hands.
        </p>
      </div>
      <div className="absolute top-0 right-0  md:top-5 md:left-48 opacity-30 ">
        <LeadLiftLogoIllustration />
      </div>
      <div className="absolute top-8 left-12 md:top-8 md:left-[50%] opacity-30 w-[75px] md:w-[180px]">
        <LeadLiftLogoIllustration />
      </div>
      <div className="absolute top-20 right-20 md:top-5 md:right-5 opacity-30 w-[75px] md:w-[180px]">
        <LeadLiftLogoIllustration />
      </div>
      <div className="absolute top-32 left-0 md:top-48 md:left-[22rem] opacity-30 w-[75px] md:w-[180px]">
        <LeadLiftLogoIllustration />
      </div>{" "}
      <div className="absolute bottom-32 right-20 md:bottom-16 md:right-[22rem] opacity-30 w-[75px] md:w-[180px]">
        <LeadLiftLogoIllustration />
      </div>
      <div className="absolute bottom-[-3rem] left-[40%] opacity-30 w-[75px] md:w-[180px]">
        <LeadLiftLogoIllustration />
      </div>
      <div className="absolute bottom-5 left-20 opacity-30 w-[75px] md:w-[180px]">
        <LeadLiftLogoIllustration />
      </div>
      <div className="absolute bottom-10 right-0 opacity-30 w-[75px] md:w-[180px] md:hidden">
        <LeadLiftLogoIllustration />
      </div>
      <div className="absolute bottom-[50%] right-[50%] opacity-30 w-[75px] md:w-[180px] md:hidden">
        <LeadLiftLogoIllustration />
      </div>
    </div>
  );
};

export default AboutLeadLift;
