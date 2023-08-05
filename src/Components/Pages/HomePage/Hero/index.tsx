import React from "react";
import { SolidGreenButton } from "../../../Buttons";
import socialMediaMarketing from "../../../Assets/Images/Social media marketing.png";
import communityMngmt from "../../../Assets/Images/community_mngmt.svg";
import contentCrtn from "../../../Assets/Images/content_creation.png";
import contentStrtgy from "../../../Assets/Images/content_strategy.png";
import "animate.css";
import { useSpring, animated } from "@react-spring/web";

const HeroCards = ({ illustration, name, delay, speed }: any) => {
  const styles = useSpring({
    loop: { reverse: true }, // Animation will play in reverse when reaching the end
    to: { transform: "translateY(-10px)" }, // Move the card up by 20px
    from: { transform: "translateY(10px)" }, // Move the card down by 20px
    config: { duration: speed }, // Animation duration (in milliseconds)
    delay: delay,
  });
  return (
    <div className="p-[8px] md:p-5 border border-solid border-[#D3D3D3] rounded-[8px] bg-white w-full md:w-[220px] text-center">
      <animated.div style={styles}>
        <img src={illustration} alt="" className="mb-[4px]" />
        <p className="text-textGray font-openSans text-[10px] md:text-base">
          {name}
        </p>
      </animated.div>
    </div>
  );
};

const Hero = () => {
  const fadeUp = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" }, // Starting opacity and translation
    to: { opacity: 1, transform: "translateY(0px)" }, // Ending opacity and translation
    config: { duration: 1000 }, // Animation duration in milliseconds
  });

  const fadeDown = useSpring({
    from: { opacity: 0, transform: "translateY(-30px)" }, // Starting opacity and translation
    to: { opacity: 1, transform: "translateY(0px)" }, // Ending opacity and translation
    config: { duration: 600 }, // Animation duration in milliseconds
    delay: 500,
  });

  return (
    <div className="w-screen h-screen bg-white relative">
      <div className="w-full h-full text-center flex justify-center md:items-center">
        <div className="flex flex-col md:justify-center items-center">
          <div className="w-full md:w-[700px] mx-auto text-center px-[45px] pt-[24px] pb-0">
            <animated.h2
              className="font-montserrat text-[28px] md:text-[45px] font-bold text-brandBlue mb-[10px]"
              style={fadeUp}>
              Elevate your brand, engage your audience, and drive results with
              <span className="text-brandGreen mx-1">Leadlift</span>{" "}
              comprehensive suite of digital solutions
            </animated.h2>
          </div>
          <animated.div style={fadeDown} className="z-50">
            <SolidGreenButton width="350px">Book a call</SolidGreenButton>
          </animated.div>
          <div className="grid grid-cols-3 gap-[25px] items-center p-[20px] mt-[36px] z-50 md:hidden">
            <div>
              <HeroCards
                illustration={socialMediaMarketing}
                name={"Social media management"}
                speed={1800}
                delay={0}
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <HeroCards
                illustration={contentCrtn}
                name={"Content creation"}
                speed={2000}
                delay={0}
              />
              <HeroCards
                illustration={contentStrtgy}
                name={"Content strategy"}
                speed={2500}
                delay={200}
              />
            </div>
            <div>
              <HeroCards
                illustration={communityMngmt}
                name={"Community management"}
                speed={2000}
                delay={50}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden absolute left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%] w-[465px] h-[465px] rounded-full border-[1.265px] border-solid border-[#CECECE]" />
      <div className="block md:hidden absolute left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%] w-[615px] h-[615px] rounded-full border-[1.265px] border-solid border-[#CECECE]" />
      <div className="block md:hidden absolute left-[50%] top-[30%] translate-x-[-50%] translate-y-[-50%] w-[765px] h-[765px] rounded-full border-[1.265px] border-solid border-[#CECECE]" />

      <div className="hidden md:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[1000px] h-[1000px] rounded-full border-[1.265px] border-solid border-[#CECECE]" />
      <div className="hidden md:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[1300px] h-[1300px] rounded-full border-[1.265px] border-solid border-[#CECECE]" />
      <div className="hidden md:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[1600px] h-[1600px] rounded-full border-[1.265px] border-solid border-[#CECECE]" />

      {/* Floating Cards */}
      <div className="hidden md:block">
        <div className="absolute top-36 left-36">
          <HeroCards
            illustration={socialMediaMarketing}
            name={"Social media management"}
            speed={1800}
            delay={0}
          />
        </div>
        <div className="absolute top-36 right-36">
          <HeroCards
            illustration={communityMngmt}
            name={"Community management"}
            speed={2000}
            delay={50}
          />
        </div>
        <div className="absolute bottom-16 left-80">
          <HeroCards
            illustration={contentCrtn}
            name={"Content creation"}
            speed={2000}
            delay={0}
          />
        </div>
        <div className="absolute bottom-16 right-80">
          <HeroCards
            illustration={contentStrtgy}
            name={"Content strategy"}
            speed={2500}
            delay={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
