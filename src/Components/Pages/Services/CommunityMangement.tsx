import React from "react";
import community_mngmt from "../../Assets/Images/cmty_mngmt.png";
import { SolidGreenButton } from "../../Buttons";

const CommunityMangement = () => {
  return (
    <div
      className="w-full h-full bg-[#EDECF6] md:py-[100px]"
      id="community-management">
      <div className="container mx-auto">
        <div className="md:w-[60%] mx-auto flex gap-[100px] items-start justify-center">
          <div className="w-1/2">
            <p className="text-base font-montserrat font-semibold text-brandBlue mb-[10px]">
              Community Management
            </p>
            <p className="text-base font-normal font-openSans text-brandBlue mb-[20px]">
              Building a thriving community around your brand is essential for
              long-term success. Our community management experts will foster
              meaningful connections with your followers, responding to
              comments, messages, and reviews in a timely and personable manner.
              By nurturing these relationships, we'll cultivate a loyal
              community that advocates for your brand and amplifies your
              message.
            </p>
            <SolidGreenButton width="100%">Book a call</SolidGreenButton>
          </div>
          <div className="w-1/2">
            <div className="w-full border-solid border-[10px] border-[#DDDDDF] rounded-[10px]">
              <img src={community_mngmt} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityMangement;
