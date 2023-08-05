import React from "react";
import phone from "../../Assets/Images/phone.png";
import laptop from "../../Assets/Images/laptop.png";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="container mx-auto">
        <div className="w-full flex items-start gap-[100px] px-[150px] py-[100px]">
          <div className="w-2/5">
            <h2 className="text-[48px] text-brandBlue font-montserrat font-bold mb-[32px]">
              Build yourself and your brand with Leadlift
            </h2>
            <p className="text-[20px] text-brandBlue font-montserrat font-medium">
              Leadlift is your social media powerhouse for businesses and
              individuals with tailored services for your unique needs, from
              start to success. Let's make it happen.
            </p>
          </div>
          <div className="3/5">
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
