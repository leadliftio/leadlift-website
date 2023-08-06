import React from "react";
import { SolidGreenButton } from "../../Buttons";
import social_media from "../../Assets/Images/sm_mngmt.png";

const SocialMediaManagement = () => {
  return (
    <div
      className="w-full h-full bg-white md:py-[100px]"
      id="social-media-management">
      <div className="container mx-auto">
        <div className="md:w-[60%] mx-auto flex gap-[100px] items-start justify-center">
          <div className="w-1/2">
            <div className="w-full border-solid border-[10px] border-[#DDDDDF] rounded-[10px]">
              <img src={social_media} alt="" className="w-full" />
            </div>
          </div>
          <div className="w-1/2">
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
