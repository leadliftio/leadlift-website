import React from "react";
import { RoundedCheckMarkIcon } from "../../Assets/Icons";
import { SolidGreenButton } from "../../Buttons";

type pricingCardTypes = {
  packageName: string;
  packageDescription: string;
  price: string;
  packageFeatures: Array<any>;
};

const PricingCard = ({
  packageName,
  packageDescription,
  price,
  packageFeatures,
}: pricingCardTypes) => {
  return (
    <div className="w-full h-[700px] relative p-5 md:p-8 bg-white rounded-[20px] shadow-card text-left">
      <div className="package-name font-montserrat font-semibold text-[28px] text-brandBlack mb-[16px] md:mb-[20px]">
        {packageName}
      </div>
      <div className="package-description w-[330px] text-brandBlack font-openSans font-normal text-[14px] md:text-base mb-[50px] md:mb-[74px] px-1">
        {packageDescription}
      </div>
      <div className="price text-brandBlack font-openSans font-semibold text-[30px] md:text-[36px] mb-[32px]">
        {price}{" "}
        <span className="text-[20px] md:text-[24px] mx-[2px]">/ month</span>
      </div>
      <ul className="flex flex-col gap-[10px] md:gap-[12px] mb-[84px]">
        {packageFeatures.map((feature, i) => (
          <li className="flex items-center gap-1" key={i}>
            <div>
              <RoundedCheckMarkIcon />
            </div>
            <p className="font-openSans text-[14px] md:text-base text-brandBlue">
              {feature}
            </p>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-8 left-0 w-full px-8 ">
        <SolidGreenButton width="100%">Book a all</SolidGreenButton>
      </div>
    </div>
  );
};

export default PricingCard;
