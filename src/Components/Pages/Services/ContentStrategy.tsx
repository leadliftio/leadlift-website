import React from "react";
import content_strtgy from "../../Assets/Images/cnt_strgy.png";
import { SolidGreenButton } from "../../Buttons";

const ContentStrategy = () => {
  return (
    <div
      className="w-full h-full bg-white py-[50px] md:py-[100px] px-4"
      id="content-strategy">
      <div className="container mx-auto">
        <div className="w-full md:w-[60%] mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[100px] items-start justify-center">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div className="w-full border-solid border-[10px] border-[#DDDDDF] rounded-[10px]">
              <img src={content_strtgy} alt="" className="w-full" />
            </div>
          </div>
          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <p className="text-base font-montserrat font-semibold text-brandBlue mb-[10px]">
              Content Strategy
            </p>
            <p className="text-base font-normal font-openSans text-brandBlue mb-[20px]">
              A strong content strategy is the backbone of any successful social
              media campaign. Our team of experts will work closely with you to
              develop a tailored content strategy that aligns with your brand's
              goals and resonates with your target audience. By analyzing
              trends, identifying key opportunities, and staying on top of the
              latest social media algorithms, we'll keep your content fresh,
              relevant, and impactful.
            </p>
            <SolidGreenButton width="100%">Book a call</SolidGreenButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentStrategy;
