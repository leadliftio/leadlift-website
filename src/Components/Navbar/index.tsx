import React from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import brandLogo from "../Assets/Images/brandLogo.svg";
import { SolidGreenButton } from "../Buttons";
import { CustomDropdownIcon } from "../Assets/Icons";

const Navbar = () => {
  const navigate = useNavigate();
  const handleBookACall = () => {
    navigate("/book-a-call");
  };
  return (
    <nav className="w-screen bg-[#EDF0F8] py-[24px] md:py-[22px] px-[16px] md:px-[150px] fixed z-[9999] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] md:shadow-none">
      <div className="w-[95px] md:w-full flex items-center justify-between">
        <Link to={"/"} className="">
          <img src={brandLogo} alt="LeadLift" />
        </Link>
        <div className="hidden nav-items lg:flex items-center gap-8">
          <Link
            to=""
            className="text-brandBlack font-normal font-openSans text-[20px] flex items-center gap-[6px]">
            <span>Services</span>
            <CustomDropdownIcon />
          </Link>
          <Link
            to="/pricing"
            className="text-brandBlack font-normal font-openSans text-[20px]">
            Pricing
          </Link>
        </div>
        <div className="hidden lg:flex">
          <SolidGreenButton width="200px" onClick={handleBookACall}>
            Book a call
          </SolidGreenButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
