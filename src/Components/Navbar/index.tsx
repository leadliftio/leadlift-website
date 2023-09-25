import { Squash as Hamburger } from "hamburger-react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link, Router, useNavigate } from "react-router-dom";

import { CustomDropdownIcon } from "../Assets/Icons";
import brandLogo from "../Assets/Images/brandLogo.svg";
import CloseMenu from "../Assets/Images/Close_MD.svg";
import MenuIcon from "../Assets/Images/menu@2x.svg";
import { SolidGreenButton } from "../Buttons";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<any>(null);
  const mobileNavRef = React.useRef<any>(null);

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
  if (!isOpen) {
    document.body.style.overflowY = "scroll";
  } else {
    document.body.style.overflowY = "hidden";
  }
  // }, [isOpen]);

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
      <nav className="w-screen bg-[#EDF0F8] md:py-[22px] p-[16px] md:px[150px] fixed z-[8500] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container max-w-[1200px] mx-auto">
          <div className="w-full flex items-center justify-between">
            <Link to={"/"} className="">
              <img src={brandLogo} alt="LeadLift" className="h-[32px]" />
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
              <Link
                to="https://blog.leadlift.io"
                className="text-brandBlack font-normal font-openSans text-[20px]">
                Blog
              </Link>
            </div>
            <div className="hidden lg:flex">
              <SolidGreenButton width="200px" onClick={handleBookACall}>
                Book a call
              </SolidGreenButton>
            </div>
            <div
              className="block lg:hidden w-8 h-8 border border-solid border-[#D3D3D3] rounded-[4px]"
              onClick={() => setOpen(!isOpen)}>
              {/* <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="#000080"
                label="Show menu"
                size={24}
                rounded
              /> */}
              {!isOpen ? (
                <img src={MenuIcon} alt="" />
              ) : (
                <img src={CloseMenu} alt="" />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="w-screen h-screen overflow-hidden"> */}
      <div
        className={`w-full bg-[#EDF0F8] h-[600px] rounded-[25px] px-[16px] py-[24px] fixed z-[8080] flex flex-col divide-y-2 shadow-card transition-all duration-500 ${
          isOpen ? "translate-y-[0]" : "translate-y-[-600px] z-[8500]"
        }`}
        ref={mobileNavRef}>
        <div className="h-[90%] pt-[65px] pb-[16px] flex flex-col justify-between relative z-50">
          <div className="flex flex-col gap-[20px] text-brandBlack font-normal font-openSans text-[20px]">
            <div className="text-brandBlack flex items-center gap-[6px] group relative">
              <Link to="/our-services" onClick={() => setOpen(false)}>
                Services
              </Link>
            </div>
            <div className=" flex flex-col gap-[15px] text-[#808080] font-openSans text-[18px] pb-4 font-normal border-b border-solid border-[#D9D9D9]">
              <a href="/our-services/#social-media-management">
                Social media management
              </a>
              <a href="/our-services/#content-creation">Content creation</a>
              <a href="/our-services/#content-strategy">Content strategy</a>
              <a href="/our-services/#community-management">
                Community management
              </a>
            </div>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="pb-[20px] border-b border-solid border-[#D9D9D9]">
              Pricing
            </Link>
            <Link
              to="/blog"
              className="pb-[20px] border-b border-solid border-[#D9D9D9]"
              onClick={() => setOpen(false)}>
              Blog
            </Link>
          </div>
          <div className="w-full mt-[30px]">
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

        {/* <div className="relative top-0 left-0 w-full h-screen bg-black/40" /> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
