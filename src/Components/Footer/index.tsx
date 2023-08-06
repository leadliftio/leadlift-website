import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import brandLogo from "../Assets/Images/brandLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bottom-0 w-full bg-[#EDF0F8] px-[30px] py-[65px] mb-[0px] md:px-[150px] md:py-[100px]">
      <div className="container mx-auto">
        <div className="w-full flex flex-col">
          <div className="footer-links md:mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-[18px]">
            <div className="flex w-[95px] md:flex-1">
              <img src={brandLogo} alt="" className="" />
            </div>
            <ul className="flex flex-1 flex-wrap md:flex-nowrap text-center justify-center items-center gap-8 gap-y-[10px] md:gap-16 px-5">
              <Link
                to="/terms-of-use"
                className="font-outfit text-brandBlack text-base md:text-[18px] font-normal">
                Terms of use
              </Link>
              <Link
                to="/privacy-policy"
                className="font-outfit text-brandBlack text-base md:text-[18px] font-normal">
                Privacy policy
              </Link>
              <li className="font-outfit text-brandBlack text-base md:text-[18px] font-normal">
                About Leadlift
              </li>
            </ul>
            <div className="flex-1"></div>
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
