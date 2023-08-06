import React from "react";
import content_crtn from "../../Assets/Images/cntnt_ctn.png";
import { SolidGreenButton } from "../../Buttons";

const ContentCreation = () => {
  return (
    <div
      className="w-full h-full bg-[#EDECF6] md:py-[100px]"
      id="content-creation">
      <div className="container mx-auto">
        <div className="md:w-[60%] mx-auto flex gap-[100px] items-start justify-center">
          <div className="w-1/2">
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
          <div className="w-1/2">
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
