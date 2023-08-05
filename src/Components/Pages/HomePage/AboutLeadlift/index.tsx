import React from "react";

const AboutLeadLift = () => {
  return (
    <div className="w-full box-border bg-brandLightPurple px-[20px] md:px-0 py-[50px] md:py-[100px] text-center flex flex-col items-center">
      <h2 className="mb-[20px] text-brandBlue font-montserrat text-[28px] md:text-[45px] font-bold  leading-[28px]">
        About{" "}
        <span className="md:text-brandBlue text-brandGreen">Leadlift</span>
      </h2>
      <p className="mb-[20px] text-brandBlue font-montserrat text-base md:text-[20px] font-semibold  leading-[28px]">
        Leadlift - More Than Just a Social Media Company
      </p>
      <p className="w-full md:w-[60%] font-openSans text-base text-brandBlue leading-[28px]">
        Leadlift was founded with one goal in mind - to help busy professionals
        and company like you maintain a strong online presence without the
        stress and time commitment. We're not just a social media company; we're
        your personal social media team. We work closely with you to understand
        your professional goals and audience, and then we create a personalized
        social media strategy that aligns with these goals. With LeadLift, you
        can rest easy knowing your online presence is in good hands.
      </p>
    </div>
  );
};

export default AboutLeadLift;
