import React from "react";
import { Ellipses, WalletIcon } from "../../../Assets/Icons";
type serviceCardTypes = {
  name: string;
  description: string;
};

const ServiceCard = ({ name, description }: serviceCardTypes) => {
  return (
    <div className="w-full md:w-[420px] h-full md:h-[400px] bg-white shadow-card p-[12px] md:px-[28px] md:py-[36px] rounded-[4px] md:rounded-[20px] z-[9999]">
      <div className="rounded-[4px] bg-brandGreen px-3 py-2 md:px-4 md:py-3 mb-4 md:mb-9 w-fit">
        <WalletIcon />
      </div>
      <h6 className="mb-[10px] md:mb-[20px] text-brandBlack font-montserrat font-semibold text-[18px] md:text-[20px]">
        {name}
      </h6>
      <p className="text-base text-[#808080] md:text-brandBlack font-openSans font-light md:font-normal cursor-pointer">
        {description}
      </p>
      <p className="text-base text-brandGreen font-openSans font-light md:font-normal cursor-pointer mb-[20px]">
        Learn more...
      </p>
      <div className="w-full flex flex-row-reverse">
        <Ellipses />
      </div>
    </div>
  );
};

export default ServiceCard;
