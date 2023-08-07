import React from "react";
import phone from "../../Assets/Images/phone.png";
import laptop from "../../Assets/Images/laptop.png";

const Hero = () => {
  return (
    <div className="w-screen h-full md:h-screen bg-white px-4">
      <div className="container mx-auto">
        <div
          className="w-full flex flex-col-reverse md:flex-row items-start gap-[100px] -
        p-4 md:px-[150px] py-5 md:py-[100px]">
          <div className="w-full md:w-2/5">
            <h2 className="text-[48px] text-brandBlue font-montserrat font-bold mb-[32px]">
              Build yourself and your brand with Leadlift
            </h2>
            <p className="text-[20px] text-brandBlue font-montserrat font-medium">
              Leadlift is your social media powerhouse for businesses and
              individuals with tailored services for your unique needs, from
              start to success. Let's make it happen.
            </p>
          </div>
          <div className="w-full md:w-3/5">
            <div className="my-4">
              <div className="flex gap-2">
                <img src={laptop} alt="" />
                <img src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
