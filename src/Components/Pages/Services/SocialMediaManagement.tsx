import React from "react";
import { SolidGreenButton } from "../../Buttons";
import social_media from "../../Assets/Images/sm_mngmt.png";

const SocialMediaManagement = () => {
  return (
    <div
      className="w-full h-full bg-white pt-0 py-[50px] md:py-[100px] px-[16px]"
      id="social-media-management">
      <div className="container mx-auto">
        <div className="md:w-[60%] w-full mx-auto flex flex-col md:flex-row gap-[40px] md:gap-[100px] items-start justify-center">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <div className="w-full border-solid border-[10px] border-[#DDDDDF] rounded-[10px]">
              <img src={social_media} alt="" className="w-full" />
            </div>
          </div>
          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
            <p className="text-base font-montserrat font-semibold text-brandBlue mb-[10px]">
              Social Media Management
            </p>
            <p className="text-base font-normal font-openSans text-brandBlue mb-[20px]">
              Managing your social media presence can be time-consuming and
              overwhelming. Let us take the burden off your shoulders. Our
              skilled social media managers will handle all aspects of your
              social media profiles, from posting engaging content to monitoring
              interactions and responding to messages. We'll ensure your brand's
              voice is consistent and your audience is engaged, all while
              increasing your reach and driving meaningful results.
            </p>
            <SolidGreenButton width="100%">Book a call</SolidGreenButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
