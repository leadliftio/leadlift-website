import React from "react";
import phone from "../../Assets/Images/phone_1.png";
import laptop from "../../Assets/Images/laptop.png";
import image_group from "../../Assets/Images/group_3x.png";

const Hero = () => {
  return (
    <div className="w-screen h-full mb-[100px] md:mb-0 md:h-[1000px] bg-white px-4">
      <div className="container mx-auto">
        <div
          className="w-full flex flex-col-reverse md:flex-row items-start gap-[50px] md:gap-[100px]
        p-4 md:px-[150px] py-5 md:py-[100px]">
          <div className="w-full md:w-2/5">
            <h2 className="text-[28px] md:text-[64px] text-brandBlue font-montserrat font-bold mb-4 md:mb-[32px]">
              Build yourself and your brand with Leadlift
            </h2>
            <p className="text-base md:text-[20px] text-brandBlue font-montserrat font-medium">
              Leadlift is your social media powerhouse for businesses and
              individuals with tailored services for your unique needs, from
              start to success. Let's make it happen.
            </p>
          </div>
          <div className="w-full md:w-3/5">
            <div className="my-4 md:pl-[100px]">
              <div className="flex gap-2">
                {/* <img src={laptop} alt="" className="w-[500px] h-[258px]" />
                <img
                  src={phone}
                  alt=""
                  className="w-[158px] h-[360px] ml-[-150px] mt-[50px]"
                /> */}
                <img src={image_group} alt="" className="" />
                {/* <img src={phone} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
