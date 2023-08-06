import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

const PolicyPagesLayout = ({ children }: any) => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="pt-[75px] md:pt-[100px]">
        <div className="w-screen h-full px-[150px] py-[100px]">
          <div className="container mx-auto">
            <div className="w-full flex flex-start gap-[50px]">
              <div className="w-1/4 side-bar">
                <div className="flex flex-col gap-[12px] text-black font-montserrat text-base font-semibold">
                  <Link
                    to="/terms-of-use"
                    className={`${
                      location.pathname === "/terms-of-use"
                        ? " bg-brandGreen/40 border border-solid border-brandGreen rounded-[8px]"
                        : ""
                    } cursor-pointer py-2 px-8 w-full`}>
                    Leadlift.io Terms of Use Policy
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className={`${
                      location.pathname === "/privacy-policy"
                        ? "w-full py-2 px-8 bg-brandGreen/40 border border-solid border-brandGreen rounded-[8px]"
                        : ""
                    } cursor-pointer w-full py-2 px-8`}>
                    Leadlift.io Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="w-3/4">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PolicyPagesLayout;
