import React from "react";
import { Ellipses, WalletIcon } from "../../../Assets/Icons";
import { Link } from "react-router-dom";
type serviceCardTypes = {
  name: string;
  description: string;
  path: string;
  Icon: any;
};

const ServiceCard = ({ name, description, path, Icon }: serviceCardTypes) => {
  return (
    <div className="w-full lg:w-[400px] h-full lg:h-[400px] bg-white shadow-card p-[12px] lg:px-[28px] lg:py-[36px] rounded-[4px] lg:rounded-[20px] z-[9999]">
      <div className="rounded-[4px] bg-brandGreen px-3 py-2 lg:px-4 lg:py-3 mb-4 lg:mb-9 w-fit">
        <Icon />
      </div>
      <h6 className="mb-[10px] lg:mb-[20px] text-brandBlack font-montserrat font-semibold text-[18px] lg:text-[20px]">
        {name}
      </h6>
      <p className="text-base text-[#808080] lg:text-brandBlack font-openSans font-light lg:font-normal cursor-pointer">
        {description}
      </p>
      <Link
        to={path}
        className="text-base text-brandGreen font-openSans font-light lg:font-normal cursor-pointer mb-[20px]">
        Learn more...
      </Link>
      <div className="w-full flex flex-row-reverse">
        <Ellipses />
      </div>
    </div>
  );
};

export default ServiceCard;
