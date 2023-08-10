import React from "react";
import content_crtn from "../../Assets/Images/cntnt_ctn.png";
import { SolidGreenButton } from "../../Buttons";

const ContentCreation = () => {
  return (
    <div
      className="w-full h-full bg-[#EDECF6] py-[50px] md:py-[100px] px-4"
      id="content-creation">
      <div className="container mx-auto">
        <div className="w-full md:w-[60%] mx-auto flex flex-col-reverse md:flex-row gap-[40px] md:gap-[100px] items-start justify-center">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <p className="text-base font-montserrat font-semibold text-brandBlue mb-[10px]">
              Content Creation
            </p>
            <p className="text-base font-normal font-openSans text-brandBlue mb-[20px]">
              Compelling content is at the heart of every successful social
              media campaign. Our talented content creators specialize in
              crafting eye-catching visuals, captivating copy, and engaging
              multimedia content that captures your audience's attention and
              inspires action. Whether it's stunning graphics,
              attention-grabbing videos, or persuasive ad copy, we've got the
              creativity and expertise to make your brand stand out.
            </p>
            <SolidGreenButton width="100%">Book a call</SolidGreenButton>
          </div>
          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div className="w-full border-solid border-[10px] border-[#DDDDDF] rounded-[10px]">
              <img src={content_crtn} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
