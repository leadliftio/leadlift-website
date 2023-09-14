import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import brandLogo from "../Assets/Images/brandLogo.svg";

const Footer = () => {
  return (
    <footer className="footer bottom-0 w-full bg-[#EDF0F8] px-[30px] py-[65px] mb-[0px] md:px-[150px] md:py-[100px]">
      <div className="container max-w-[1200px] mx-auto">
        <div className="w-full flex flex-col">
          <div className="footer-links md:mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-[18px]">
            <div className="flex">
              <Link to={"/"} className="">
                <img src={brandLogo} alt="LeadLift" className="h-[32px]" />
              </Link>
            </div>
            <ul className="flex flex-wrap md:flex-nowrap text-center justify-center items-center gap-8 gap-y-[10px] md:gap-16 px-5">
              <Link
                to="/terms-of-use"
                className="font-outfit text-brandBlack text-base md:text-[18px] font-normal flex-1 flex-grow flex-nowrap flex">
                Terms of use
              </Link>
              <Link
                to="/privacy-policy"
                className="font-outfit text-brandBlack text-base md:text-[18px] font-normal">
                Privacy policy
              </Link>
              <Link
                to="/#about"
                className="font-outfit text-brandBlack text-base md:text-[18px] font-normal">
                About Leadlift
              </Link>
            </ul>
            <div className=""></div>
          </div>
          <div className="social-media w-full flex items-center justify-center gap-9 mb-6">
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
          <p className="text-center w-full text-textGray font-outfit text-base leading-[24px]">
            &copy; 2023, Leadlift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
