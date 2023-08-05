import React, { useState, useEffect } from "react";
import {
  BlueDotsGroup,
  GreenDotsGroup,
  RoundedCheckMarkIcon,
} from "../../Assets/Icons";
import CustomInput, { CustomMultiLineInput } from "../../CustomInput";
import {
  GetCountries,
  GetState,
  GetCity,
  GetLanguages, //async functions
  CountrySelect,
} from "react-country-state-city";
import CustomSelect from "../../CustomSelect";
import { SolidGreenButton } from "../../Buttons";

const bookingForm = require("countrycitystatejson");

const features = [
  {
    id: 1,
    perk: "A one-on-one conversation with our consultant on the best strategy that will meet your need.",
  },
  {
    id: 2,
    perk: "Discuss your social media goal ",
  },
  {
    id: 3,
    perk: "Discussion on how to improve your social media presence",
  },
  {
    id: 4,
    perk: "You are not required to commit.",
  },
];

const BookACall = () => {
  const [countryid, setCountryid] = useState(0);
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    setCountriesList(bookingForm.getCountries());
  }, []);
  return (
    <div className="w-screen box-border bg-brandLightPurple">
      <div className="py-[50px] pl-[150px] pr-[100px] flex items-start">
        <div className="w-full pr-[120px] flex-1">
          <h2 className="text-[#23282B] font-montserrat font-bold  text-[40px] mb-[65px]">
            Book a call
          </h2>
          <p className="text-[#23282B] font-openSans font-normal  text-base mb-[65px]">
            Congratulation on taking the step to book a call with us! During
            this call, we will show you how our comprehensive suite of digital
            solution can be tailored to meet your social media goal while
            elevating your presence and brand.
          </p>
          <div>
            <h6 className="text-[#23282B] font-montserrat font-bold  text-[20px] mb-[19px]">
              What to expect?
            </h6>
            <ul className="flex flex-col gap-[20px]">
              {features.map((item, i) => (
                <li className="flex items-center gap-1" key={item.id}>
                  <div className="">
                    <RoundedCheckMarkIcon />
                  </div>
                  <p className="font-openSans text-base text-[#23282B]">
                    {item.perk}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 w-full flex items-center">
          <div className="form-container">
            <form className="w-full bg-white p-10 rounded-[20px] shadow-card">
              <div className="flex flex-col gap-[32px] mb-[20px]">
                <div className="w-full grid grid-cols-2 gap-8 items-start">
                  <div>
                    <CustomInput
                      name="first_name"
                      label="First name"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <CustomInput
                      name="last_name"
                      label="Last name"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <CustomInput
                    name="email"
                    label="Email Address"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="w-full flex flex-row gap-8 items-start">
                  <div className="w-1/3">
                    <CustomInput
                      name="country_code"
                      label="Country code"
                      placeholder="e.g +1"
                    />
                  </div>
                  <div className="w-2/3">
                    <CustomInput
                      name="phone_number"
                      label="Phone number"
                      placeholder="282948244"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <CustomSelect
                    name="country"
                    label="Country"
                    placeholder={"Select country"}
                    optionsList={countriesList || []}
                  />
                </div>
                <div className="text-brandGreen no-underline font-medium font-montserrat text-base cursor-pointer">
                  Click to Schedule an Appointment
                </div>
                <div className="w-full">
                  <CustomMultiLineInput
                    name="message"
                    label="Is there anything you'll like to say?"
                    placeholder=""
                  />
                </div>
                <div>
                  <SolidGreenButton width="100%">Proceed</SolidGreenButton>
                </div>
              </div>
              <p className="foot-note text-textGray font-openSans text-[14px]">
                Leadlift is committed to securing your privacy. By submitting
                this form, you acknowledge Leadlift uses your information in
                accordance with its Terms of use and Privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookACall;
