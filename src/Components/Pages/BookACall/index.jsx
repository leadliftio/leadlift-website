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

import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";

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
  const [personType, setPersonType] = useState("");

  useEffect(() => {
    setCountriesList(bookingForm.getCountries());
  }, []);

  const handlePersonTypeChange = (e) => {
    setPersonType(e.target.value);
  };
  return (
    <div className="w-screen box-border bg-brandLightPurple">
      <div className="container mx-auto">
        <div className="py-[24px] px-[16px] md:py-[50px] md:pl-[150px] md:pr-[100px] flex flex-col gap-[50px] md:gap-0 md:flex-row items-start">
          <div className="w-full pr-0 md:pr-[120px] flex-1">
            <h2 className="text-[#23282B] font-montserrat font-bold  text-[32px] md:text-[40px] mb-[30px] md:mb-[65px]">
              Book a call
            </h2>
            <p className="text-[#23282B] font-openSans font-normal  text-[14px] md:text-base mb-[40px] md:mb-[65px]">
              Congratulation on taking the step to book a call with us! During
              this call, we will show you how our comprehensive suite of digital
              solution can be tailored to meet your social media goal while
              elevating your presence and brand.
            </p>
            <div>
              <h6 className="text-[#23282B] font-montserrat font-bold  text-[20px] mb-[19px]">
                What to expect?
              </h6>
              <ul className="flex flex-col gap-[10px] md:gap-[20px]">
                {features.map((item, i) => (
                  <li className="flex items-center gap-1" key={item.id}>
                    <div className="">
                      <RoundedCheckMarkIcon />
                    </div>
                    <p className="font-openSans text-[13px] md:text-base text-[#23282B]">
                      {item.perk}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 w-full flex items-center">
            <div className="form-container w-full">
              <form className="w-full bg-white p-[24px] md:p-10 rounded-[20px] shadow-card">
                <div className="flex flex-col gap-[20px] md:gap-[32px] mb-[20px]">
                  <div className="w-full grid grid-cols-2 gap-4 md:gap-8 items-start">
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
                  <div className="w-full flex flex-row gap-4 md:gap-8 items-start">
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
                  {/* Radio Section */}
                  <div className="w-full flex flex-col gap-[10px]">
                    <label
                      htmlFor={"radio"}
                      className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-medium">
                      Who are you?
                    </label>
                    <div className="flex flex-col md:flex-row gap-[20px] md:gap-[45px] items-start md:items-center">
                      <div className="radio radio-1 flex items-center gap-4 w-full">
                        <p className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-normal w-1/2 md:w-fit">
                          An Individual
                        </p>
                        <input
                          name={"who-are-you"}
                          onChange={handlePersonTypeChange}
                          value={"individual"}
                          type="radio"
                          className="text-[#23282B] font-montserrat text-base font-medium shadow-card focus:outline-none"
                        />
                      </div>
                      <div className="radio radio-1 flex items-center gap-4 w-full">
                        <p className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-normal w-1/2 md:w-fit">
                          A Company
                        </p>
                        <input
                          name={"who-are-you"}
                          onChange={handlePersonTypeChange}
                          value={"company"}
                          type="radio"
                          className="text-[#23282B] font-montserrat text-base font-medium shadow-card focus:outline-none "
                        />
                      </div>
                      <div className="radio radio-1 flex items-center gap-4 w-full">
                        <p className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-normal w-1/2 md:w-fit">
                          An Agency
                        </p>
                        <input
                          name={"who-are-you"}
                          onChange={handlePersonTypeChange}
                          value={"agency"}
                          type="radio"
                          className="text-[#23282B] font-montserrat text-base font-medium shadow-card focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {personType == "agency" && (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
                      <div>
                        <CustomInput
                          name="agency_name"
                          label="Agency name"
                          placeholder="Enter agency name"
                        />
                      </div>
                      <div>
                        <CustomInput
                          name="agency_size"
                          label="Agency size"
                          placeholder="Enter agency size"
                        />
                      </div>
                    </div>
                  )}
                  {personType == "company" && (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
                      <div>
                        <CustomInput
                          name="company_name"
                          label="Company name"
                          placeholder="Enter company name"
                        />
                      </div>
                      <div>
                        <CustomInput
                          name="company_size"
                          label="Company size"
                          placeholder="Enter company size"
                        />
                      </div>
                    </div>
                  )}
                  <div className="w-full">
                    <CustomSelect
                      name="country"
                      label="Country"
                      placeholder={"Select country"}
                      optionsList={countriesList || []}
                    />
                  </div>
                  {/* <div className="text-brandGreen no-underline font-medium font-montserrat text-[13px] md:text-base cursor-pointer">
                    Click to Schedule an Appointment
                  </div> */}
                  <div>
                    <PopupButton
                      url="https://calendly.com/subscription-j3m/discovery-call-leadlift"
                      /*
                       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                       */
                      rootElement={document.getElementById("root")}
                      text="Touch to Schedule an Appointment"
                      styles={{
                        fontWeight: 500,
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        cursor: "pointer",
                        color: "#50C878",
                      }}
                    />
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
                <p className="foot-note text-textGray font-openSans text-[11px] md:text-[14px]">
                  Leadlift is committed to securing your privacy. By submitting
                  this form, you acknowledge Leadlift uses your information in
                  accordance with its Terms of use and Privacy policy.
                </p>
              </form>
              {/* <InlineWidget url="https://calendly.com/leadliftio" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookACall;
