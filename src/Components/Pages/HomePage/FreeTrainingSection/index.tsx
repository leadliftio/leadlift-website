import React from "react";

import {
  BlueDotsGroup,
  GreenDotsGroup,
  RoundedCheckMarkIcon,
} from "../../../Assets/Icons";
import action_frame from "../../../Assets/Images/action_frame.png";
import trainingImage from "../../../Assets/Images/unsplash_1-aA2Fadydc.png";
import { SolidGreenButton } from "../../../Buttons";
import TrainingPopup from "../../../TrainingForm";

const trainingPerks = [
  {
    id: 1,
    perk: "Why personal branding is crucial in today's digital age.",
  },
  {
    id: 2,
    perk: "How to create a consistent online presence.",
  },
  {
    id: 3,
    perk: "The key elements of a strong personal brand",
  },
  {
    id: 4,
    perk: "Tips for engaging with your audience.",
  },
  {
    id: 5,
    perk: "Strategies for positioning yourself as an expert in your field.",
  },
];

const FreeTrainingSection = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-screen bg-[#EFEFFC] mt-[24px] lg:mt-[50px]">
      <div className="container max-w-[1200px] mx-auto">
        <div className="w-full px-[16px] lg:px-0 py-[64px] lg:py-[75px] flex flex-col lg:flex-row  gap-[60px] lg:gap-[120px]">
          <div className="section-content flex-1">
            <div className="section-title text-brandBlue font-montserrat font-semibold text-[20px] mb-[10px] lg:mb-[20px]">
              Free On-Demand Training:
            </div>
            <div className="section-header text-brandBlue font-montserrat font-semibold text-[28px] lg:text-[32px] mb-[10px]">
              How to Build a Personal Brand on Social Media
            </div>
            <p className="font-openSans text-base text-brandBlue leading-[28px] mb-[40px]">
              Learn the secrets to creating a powerful personal brand on social
              media that resonates with your audience and positions you as a
              leader in your field.
            </p>
            <div className="mb-[32px]">
              <h6 className=" text-brandBlue font-montserrat font-medium text-[20px] mb-[10px]">
                In this exclusive, on-demand training, you'll discover:
              </h6>
              <ul className="flex flex-col gap-[14px]">
                {trainingPerks.map((item, i) => (
                  <li className="flex items-start gap-1" key={item.id}>
                    <div>
                      <RoundedCheckMarkIcon />
                    </div>
                    <p className="font-openSans text-base text-brandBlue">
                      {item.perk}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <SolidGreenButton width="100%" onClick={() => setOpen(!open)}>
              Sign up for the training
            </SolidGreenButton>
          </div>
          <div className="section-graphics flex-1">
            <div className="container w-full h-full flex items-center justify-center">
              <div className="relative w-full h-[250px] lg:h-full">
                <div className="blob-bg w-[234px] h-[284px] lg:w-[375px] lg:h-[456px] flex-shrink-0 bg-brandLightPurple rounded-[20px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                <div className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[312px] h-[222px] lg:w-[500px] lg:h-[296px]">
                  <img
                    src={trainingImage}
                    alt=""
                    className="rounded-[8px] w-full"
                  />

                  <div className="absolute bottom-[-70px] left-[0px] hidden md:block">
                    <GreenDotsGroup />
                  </div>
                  <div className="absolute top-[16px] right-[-5px] hidden md:block">
                    <BlueDotsGroup />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TrainingPopup open={open} handleClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default FreeTrainingSection;
