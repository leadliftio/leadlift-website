import React from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import brandLogo from "../Assets/Images/brandLogo.svg";
import { SolidGreenButton } from "../Buttons";
import { CustomDropdownIcon } from "../Assets/Icons";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<any>(null);

  const handleBookACall = () => {
    navigate("/book-a-call");
  };

  const openDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // React.useEffect(() => {
  //   document.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

  React.useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);
  return (
    <>
      <nav className="w-screen bg-[#EDF0F8] md:py-[22px] p-[16px] md:px-[150px] fixed z-[9999] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto">
          <div className="w-full flex items-center justify-between">
            <Link to={"/"} className="w-[95px] md:w-[230px]">
              <img src={brandLogo} alt="LeadLift" />
            </Link>

            <div className="hidden nav-items lg:flex items-center gap-8">
              <div className="text-brandBlack font-normal font-openSans text-[20px] flex items-center gap-[6px] group relative">
                <Link to="/our-services">Services</Link>
                <div className="cursor-pointer" onClick={openDropdown}>
                  <CustomDropdownIcon />
                </div>
                <div
                  className={`dropdown absolute top-10 bg-white w-max rounded-[8px] p-[12px] shadow-card transition-opacity duration-[450ms] ${
                    isDropdownOpen
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                  ref={dropdownRef}>
                  {/* Dropdown */}
                  <div className=" flex flex-col gap-[6px] text-brandBlack font-openSans text-[14px] font-normal">
                    <a href="/our-services/#social-media-management">
                      Social media management
                    </a>
                    <a href="/our-services/#content-creation">
                      Content creation
                    </a>
                    <a href="/our-services/#content-strategy">
                      Content strategy
                    </a>
                    <a href="/our-services/#community-management">
                      Community management
                    </a>
                  </div>
                </div>
              </div>
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
            <div className="block md:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="#000080"
                label="Show menu"
                size={24}
                rounded
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`w-full bg-[#EDF0F8] h-[550px] rounded-[25px] px-[16px] py-[24px] fixed z-[1000] flex flex-col divide-y-2 shadow-card transition-all duration-500 ${
          isOpen ? "translate-y-[0]" : "translate-y-[-550px]"
        }`}>
        <div className="h-[90%] pt-[75px] pb-[16px] flex flex-col justify-between relative z-50">
          <div>
            {/* <Link
              to=""
              className="text-brandBlack font-medium font-outfit text-[24px] flex items-center gap-[6px] mb-[20px]">
              <span>Services</span>
              <CustomDropdownIcon />
            </Link> */}
            <div className="text-brandBlack font-medium font-outfit text-[24px] flex items-center gap-[6px] mb-[20px] gap-[6px] group relative">
              <Link to="/our-services">Services</Link>
              <div className="cursor-pointer" onClick={openDropdown}>
                <CustomDropdownIcon />
              </div>
              <div
                className={`dropdown absolute top-10 bg-white w-max rounded-[8px] p-[12px] shadow-card transition-opacity duration-[450ms] ${
                  isDropdownOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
                ref={dropdownRef}>
                {/* Dropdown */}
                <div className=" flex flex-col gap-[6px] text-brandBlack font-openSans text-[14px] font-normal">
                  <a href="/our-services/#social-media-management">
                    Social media management
                  </a>
                  <a href="/our-services/#content-creation">Content creation</a>
                  <a href="/our-services/#content-strategy">Content strategy</a>
                  <a href="/our-services/#community-management">
                    Community management
                  </a>
                </div>
              </div>
            </div>
            <Link
              to="/pricing"
              className="text-brandBlack font-medium font-outfit text-[24px]">
              Pricing
            </Link>
          </div>
          <div className="w-full">
            <SolidGreenButton width="100%" onClick={handleBookACall}>
              Book a call
            </SolidGreenButton>
          </div>
        </div>
        <div className="social-media w-full flex items-center justify-center gap-9 mb-6 py-[16px]">
          <Link
            to="https://www.linkedin.com/company/lead_/"
            className="linkedin social-media-icon text-white">
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://twitter.com/leadliftio"
            target="_blank"
            className="linkedin social-media-icon text-white">
            <FaTwitter />
          </Link>
          <Link
            to="https://www.facebook.com/leadliftio"
            target="_blank"
            className="linkedin social-media-icon text-white">
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.instagram.com/leadliftio/"
            target="_blank"
            className="linkedin social-media-icon text-white">
            <FaInstagram />
          </Link>
        </div>

        {/* <div className="absolute top-0 left-0 w-full h-screen bg-black/40 z-10" /> */}
      </div>
    </>
  );
};

export default Navbar;
