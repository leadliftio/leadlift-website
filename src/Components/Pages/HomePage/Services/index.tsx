import React from "react";

import { ArchiveIcon, CommandIcon, DocumentFilterIcon, OutlineLogo, WalletIcon } from "../../../Assets/Icons";
import gradientIllustration from "../../../Assets/Images/gradientIllustration_2.png";
import gradientLogo from "../../../Assets/Images/gradientLogo.png";
import person1 from "../../../Assets/Images/person1_1.png";
import person2 from "../../../Assets/Images/person2.png";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div>
      <div className="container max-w-[1200px] mx-auto">
        <div className="w-full bg-white z-[1000] relative">
          <div className="pt-[20px] pb-[16px] lg:py-[40px] mx-auto flex justify-center">
            <p className="font-montserrat font-bold text-brandBlue text-[28px] lg:text-[45px]">
              Our Services
            </p>
          </div>
          <div className="px-4 lg:px-[0] mb-[32px] w-full h-full lg:h-[1000px] box-border">
            <div className="rounded-[8px] bg-[#fafafa] h-full w-full bg-services1 bg-no-repeat bg-cover bg-center p-[20px] py-[30px] lg:py-0">
              <div className="relative w-full h-full">
                <div className="absolute bottom-[-28px] left-[-18px] w-0 h-0 border-solid border-l-0 border-l-transparent border-r-[150px] lg:border-r-[400px] border-r-transparent border-b-[150px] lg:border-b-[400px] border-b-white rounded-bl-[8px]"></div>
                <div className="absolute w-[75px] h-[50px] lg:w-[200px] lg:h-[165px] bottom-[12px] left-[-10px] lg:bottom-[75px] lg:left-[20px]">
                  <img src={gradientLogo} alt="" />
                </div>
                <div className="absolute w-[75px] h-[50px] lg:w-[200px] lg:h-[165px] bottom-[12px] left-[-10px] lg:bottom-[75px] lg:right-[20px]">
                  <img src={gradientIllustration} alt="" />
                </div>

                <div className="flex flex-col-reverse lg:flex-row w-full h-full">
                  <div
                    className="w-full lg:w-7/12 flex flex-col h-full justify-center mb-[90px]"
                    data-aos="fade-down"
                    data-aos-offset="500"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <div className="lg:ml-[100px] mb-[40px] z-50">
                      <ServiceCard
                        Icon={WalletIcon}
                        name="Social media management"
                        path="/our-services#social-media-management"
                        description="We manage our clients' social media profiles, ensuring regular posting, engagement with followers, and the growth of their online presence."
                      />
                    </div>
                    <div
                      className="lg:ml-[30%] z-50"
                      // data-aos="fade-down"
                      // data-aos-offset="200"
                      // data-aos-duration="400"
                      data-aos-easing="ease-in-sine">
                      <ServiceCard
                        Icon={ArchiveIcon}
                        name="Content management"
                        path="/our-services#content-creation"
                        description="We create high-quality, engaging content tailored to each client's brand and audience. "
                      />
                    </div>
                  </div>
                  <div
                    className="w-full lg:w-5/12 flex justify-end lg:justify-center items-end lg:mb-0 mb-[-75px] lg:px-10"
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <img src={person1} alt="" className="lg:w-fit w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-[0] mb-[32px] w-full h-full lg:h-[1000px] box-border">
            <div className="rounded-[8px] bg-[#fafafa] h-full w-full bg-services2 bg-no-repeat bg-cover bg-center relative p-[20px] py-[30px] lg:py-0">
              <div className="overlay"></div>
              <div className="relative w-full h-full">
                <div className="absolute bottom-[-28px] right-[-18px] w-0 h-0 border-solid border-r-0 border-r-transparent border-l-[150px] lg:border-l-[400px] border-l-transparent border-b-[150px] lg:border-b-[400px] border-b-white rounded-br-[8px]"></div>
                <div className="absolute w-[75px] h-[50px] lg:w-[200px] lg:h-[165px] bottom-[12px] right-[-10px] lg:bottom-[75px] lg:right-[20px]">
                  <img src={gradientLogo} alt="" />
                </div>
                <div className="absolute w-[75px] h-[50px] lg:w-[200px] lg:h-[165px] bottom-[12px] right-[-10px] lg:bottom-[75px] lg:right-[20px]">
                  <img src={gradientIllustration} alt="" />
                </div>

                <div className="flex flex-col lg:flex-row w-full h-full">
                  <div
                    className="w-full lg:w-5/12 flex justify-start lg:justify-center items-end lg:mb-0 mb-[-50px]"
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <img src={person2} alt="" className="lg:w-fit w-1/2" />
                  </div>
                  <div
                    className="w-full lg:w-7/12 flex flex-col h-full justify-center mb-[90px]"
                    data-aos="fade-down"
                    data-aos-offset="500"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-sine"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <div className="lg:ml-[25%] mb-[20px] lg:mb-[40px] z-50">
                      <ServiceCard
                        Icon={DocumentFilterIcon}
                        name="Content strategy"
                        path="/our-services#content-strategy"
                        description="We develop a comprehensive content strategy to ensure all social media activities align with our clients' broader professional goals."
                      />
                    </div>
                    <div className="lg:ml-[50px] z-50">
                      <ServiceCard
                        Icon={CommandIcon}
                        name="Community management"
                        path="/our-services#community-management"
                        description="We foster a strong, engaged community around our clients' online presence by actively engaging with followers and creating a positive online environment."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
