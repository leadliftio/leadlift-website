import React from "react";
import gradientLogo from "../../../Assets/Images/gradientLogo.png";
import gradientIllustration from "../../../Assets/Images/gradientIllustration_2.png";

import { OutlineLogo } from "../../../Assets/Icons";
import person1 from "../../../Assets/Images/person1_1.png";
import person2 from "../../../Assets/Images/person2.png";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="w-full bg-white z-[1000] relative">
          <div className="pt-[20px] pb-[16px] md:py-[40px] mx-auto flex justify-center">
            <p
              className="font-montserrat font-bold text-brandBlue text-[28px] md:text-[45px]"
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-easing="ease-out"
              data-aos-duration="1000">
              Our Services
            </p>
          </div>
          <div className="px-4 md:px-[50px] mb-[32px] w-full h-full md:h-[1000px] box-border">
            <div className="rounded-[8px] bg-[#fafafa] h-full w-full bg-services1 bg-no-repeat bg-cover bg-center p-[20px] py-[30px] md:py-0">
              <div className="relative w-full h-full">
                <div className="absolute bottom-[-28px] left-[-18px] w-0 h-0 border-solid border-l-0 border-l-transparent border-r-[150px] md:border-r-[400px] border-r-transparent border-b-[150px] md:border-b-[400px] border-b-white rounded-bl-[8px]"></div>
                <div className="absolute w-[75px] h-[50px] md:w-[200px] md:h-[165px] bottom-[12px] left-[-10px] md:bottom-[75px] md:left-[20px]">
                  <img src={gradientLogo} alt="" />
                </div>
                <div className="absolute w-[75px] h-[50px] md:w-[200px] md:h-[165px] bottom-[12px] left-[-10px] md:bottom-[75px] md:right-[20px]">
                  <img src={gradientIllustration} alt="" />
                </div>

                <div className="flex flex-col-reverse md:flex-row w-full h-full">
                  <div
                    className="w-full md:w-7/12 flex flex-col h-full justify-center mb-[90px]"
                    data-aos="fade-down"
                    data-aos-offset="500"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-sine">
                    <div className="md:ml-[150px] mb-[40px] z-50">
                      <ServiceCard
                        name="Content strategy"
                        description="We develop a comprehensive content strategy to ensure all social media activities align with our clients' broader professional goals."
                      />
                    </div>
                    <div
                      className="md:ml-[400px] z-50"
                      // data-aos="fade-down"
                      // data-aos-offset="200"
                      // data-aos-duration="400"
                      data-aos-easing="ease-in-sine">
                      <ServiceCard
                        name="Community management"
                        description="We foster a strong, engaged community around our clients' online presence by actively engaging with followers and creating a positive online environment."
                      />
                    </div>
                  </div>
                  <div
                    className="w-full md:w-5/12 flex justify-end md:justify-center items-end md:mb-0 mb-[-75px]"
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-sine">
                    <img src={person1} alt="" className="md:w-fit w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-[50px] mb-[32px] w-full h-full md:h-[1000px] box-border">
            <div className="rounded-[8px] bg-[#fafafa] h-full w-full bg-services2 bg-no-repeat bg-cover bg-center relative p-[20px] py-[30px] md:py-0">
              <div className="overlay"></div>
              <div className="relative w-full h-full">
                <div className="absolute bottom-[-28px] right-[-18px] w-0 h-0 border-solid border-r-0 border-r-transparent border-l-[150px] md:border-l-[400px] border-l-transparent border-b-[150px] md:border-b-[400px] border-b-white rounded-br-[8px]"></div>
                <div className="absolute w-[75px] h-[50px] md:w-[200px] md:h-[165px] bottom-[12px] right-[-10px] md:bottom-[75px] md:right-[20px]">
                  <img src={gradientLogo} alt="" />
                </div>
                <div className="absolute w-[75px] h-[50px] md:w-[200px] md:h-[165px] bottom-[12px] right-[-10px] md:bottom-[75px] md:right-[20px]">
                  <img src={gradientIllustration} alt="" />
                </div>

                <div className="flex flex-col md:flex-row w-full h-full">
                  <div
                    className="w-full md:w-5/12 flex justify-start md:justify-center items-end md:mb-0 mb-[-50px]"
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-sine">
                    <img src={person2} alt="" className="md:w-fit w-1/2" />
                  </div>
                  <div
                    className="w-full md:w-7/12 flex flex-col h-full justify-center mb-[90px]"
                    data-aos="fade-down"
                    data-aos-offset="500"
                    data-aos-duration="750"
                    data-aos-easing="ease-in-sine">
                    <div className="md:ml-[300px] mb-[20px] md:mb-[40px] z-50">
                      <ServiceCard
                        name="Content strategy"
                        description="We develop a comprehensive content strategy to ensure all social media activities align with our clients' broader professional goals."
                      />
                    </div>
                    <div className="md:ml-[50px] z-50">
                      <ServiceCard
                        name="Community management"
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
