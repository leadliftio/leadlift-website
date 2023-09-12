import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";
import {
  CountrySelect,
  GetCity,
  GetCountries,
  GetLanguages,
  GetState,
} from "react-country-state-city";
import toast from "react-hot-toast";
import { FaDivide } from "react-icons/fa6";
import { CircleSpinner } from "react-spinners-kit";
import * as Yup from "yup";

import { postGetresponseRequest } from "../../../API-Service";
import {
  BlueDotsGroup,
  CallBookingSuccessIcon,
  GreenDotsGroup,
  RoundedCheckMarkIcon,
} from "../../Assets/Icons";
import getInTouchImage from "../../Assets/Images/Get in touch-amico 1.svg";
import { SolidGreenButton } from "../../Buttons";
import CustomInput, { CustomMultiLineInput } from "../../CustomInput";
import CustomSelect from "../../CustomSelect";
import SuccessPopup from "../../SuccessPopup";

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

const demoFormSchema = Yup.object().shape({
  firstName: Yup.string().min(2).required("First name is required"),
  lastName: Yup.string().min(2).required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email address is required"),
  countryCode: Yup.number("Please enter a valid code").required(
    "Please enter a country code"
  ),
  phone: Yup.string().required("Please enter a phone number"),
  country: Yup.string().required("Country is required"),
  requestFor: Yup.string().required("Please select an option"),
});

const BookACall = () => {
  const [countryid, setCountryid] = useState(0);
  const [countriesList, setCountriesList] = useState([]);
  const [personType, setPersonType] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCountriesList(bookingForm.getCountries());
  }, []);

  const demoRequest = useMutation({
    mutationFn: postGetresponseRequest,
    onSuccess(data, variables, context) {
      setSuccessOpen(true);
    },
    onError(error, variables, context) {
      toast.error(error?.message || "error");
    },
  });

  console.log(countriesList);

  const formik = useFormik({
    initialValues: {
      requestType: "Book a Call",
      firstName: "",
      lastName: "",
      email: "",
      country: "United States",
      phone: "",
      countryCode: "",
      requestFor: "",
      message: "",
    },
    validationSchema: demoFormSchema,
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      // freeTrainingRequest.mutate(values);
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch("https://formkeep.com/f/5ba8a77b857c", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          setLoading(false);
          setSuccessOpen(true);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(
            err?.message ||
              err?.response.message ||
              "Something went wrong, please try again"
          );
        });
    },
  });

  return (
    <div className="w-screen box-border bg-brandLightPurple">
      <div
        className="
      py-[40px] px-[16px] md:py-[50px] mdpl-[150px] mdpr-[100px] ">
        <div className="container max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-0 md:gap-0 md:flex-row items-start">
            <div className="w-full pr-0 md:pr-[120px] flex-[0.75]">
              <h2 className="text-[#23282B] font-montserrat font-bold text-[40px] mb-[20px] md:mb-[65px] leading-[normal]">
                Book a call
              </h2>
              <p className="text-[#23282B] font-openSans font-normal text-base mb-[20px] md:mb-[65px] leading-[normal]">
                Congratulation on taking the step to book call with us! During
                this call, we will show you how our comprehensive suite of
                digital solution can be tailored to meet your social media goal
                while elevating your presence and brand.
              </p>
              <div>
                <h6 className="text-[#23282B] font-montserrat font-bold  text-[20px] mb-[19px]">
                  What to expect?
                </h6>
                <ul className="flex flex-col gap-[12px] md:gap-[20px] mb-[30px] lg:mb-[50px]">
                  {features.map((item, i) => (
                    <li className="flex items-start gap-1" key={item.id}>
                      <div className="">
                        <RoundedCheckMarkIcon />
                      </div>
                      <p className="font-openSans font-normal leading-[normal] tracking-[0.08px] text-base text-[#23282B]">
                        {item.perk}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="my-[30px]">
                  <PopupButton
                    url="https://calendly.com/subscription-j3m/discovery-call-leadlift"
                    rootElement={document.getElementById("root")}
                    text="Proceed"
                    styles={{
                      fontWeight: 600,
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      cursor: "pointer",
                      color: "#fff",
                      width: "100%",
                      height: "56px",
                      background: "#50CE78",
                      borderRadius: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="calendly_button"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 w-full flex items-center">
              <div className="form-container w-full">
                <img src={getInTouchImage} alt="" />
                {/* <form
                onSubmit={formik.handleSubmit}
                className="w-full bg-white px-[16px] py-[24px] md:p-10 rounded-[20px] shadow-card">
                <div className="flex flex-col gap-[20px] md:gap-[32px] mb-[20px]">
                  <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-8 items-start">
                    <div>
                      <CustomInput
                        name="firstName"
                        label="First name"
                        placeholder="Enter first name"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                      />
                      {formik.errors.firstName && formik.touched.firstName ? (
                        <div className="text-red-700 font-raleway text-[14px]">
                          {formik.errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <CustomInput
                        name="lastName"
                        label="Last name"
                        placeholder="Enter last name"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                      />
                      {formik.errors.lastName && formik.touched.lastName ? (
                        <div className="text-red-700 font-raleway text-[14px]">
                          {formik.errors.lastName}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-full">
                    <CustomInput
                      name="email"
                      label="Email Address"
                      placeholder="Enter email address"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="text-red-700 font-raleway text-[14px]">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full flex flex-row gap-4 md:gap-8 items-start">
                    <div className="w-1/3">
                      <div>
                        <div
                          htmlFor={"countryCode"}
                          className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-medium max-[450px]:w-1/2 w-full">
                          Country code
                        </div>
                        <input
                          name={"countryCode"}
                          onChange={formik.handleChange}
                          value={formik.values.countryCode}
                          placeholder={"e.g +1"}
                          className="w-full bg-white border-transparent border-b border-solid border-b-[#808080] rounded-[4px] px-4 py-3 text-[#23282B] font-montserrat text-base font-medium shadow-card placeholder:text-#999999 placeholder:font-montserrat  placeholder:font-normal "
                        />
                        {formik.errors.countryCode &&
                        formik.touched.countryCode ? (
                          <div className="text-red-700 font-raleway text-[14px]">
                            {formik.errors.countryCode}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="w-2/3">
                      <div>
                        <div
                          htmlFor={"phone"}
                          className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-medium max-[450px]:w-1/3 w-full">
                          Phone number
                        </div>
                        <input
                          name={"phone"}
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                          placeholder={"282948244"}
                          className="w-full bg-white border-transparent border-b border-solid border-b-[#808080] rounded-[4px] px-4 py-3 text-[#23282B] font-montserrat text-base font-medium shadow-card placeholder:text-#999999 placeholder:font-montserrat  placeholder:font-normal "
                        />
                        {formik.errors.phone && formik.touched.phone ? (
                          <div className="text-red-700 font-raleway text-[14px]">
                            {formik.errors.phone}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-[10px]">
                    <label
                      htmlFor={"radio"}
                      className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-medium">
                      Who are you?
                    </label>
                    <div className="flex flex-col md:flex-row gap-[20px] md:gap-[45px] items-start md:items-center">
                      <div className="radio radio-1 flex items-center gap-4 w-full">
                        <p className="mb-[4px] text-[#808080] font-montserrat text-[13px] md:text-base font-normal w-1/2 md:w-fit">
                          An Individual
                        </p>
                        <input
                          name={"requestFor"}
                          value={"individual"}
                          type="radio"
                          checked={formik.values.requestFor === "individual"}
                          onChange={formik.handleChange}
                          className="text-[#808080] font-montserrat text-base font-medium shadow-card focus:outline-none"
                        />
                      </div>
                      <div className="radio radio-1 flex items-center gap-4 w-full">
                        <p className="mb-[4px] text-[#808080] font-montserrat text-[13px] md:text-base font-normal w-1/2 md:w-fit">
                          A Company
                        </p>
                        <input
                          name={"requestFor"}
                          value={"company"}
                          type="radio"
                          checked={formik.values.requestFor === "company"}
                          onChange={formik.handleChange}
                          className="text-[#808080] font-montserrat text-base font-medium shadow-card focus:outline-none "
                        />
                      </div>
                      <div className="radio radio-1 flex items-center gap-4 w-full">
                        <p className="mb-[4px] text-[#808080] font-montserrat text-[13px] md:text-base font-normal w-1/2 md:w-fit">
                          An Agency
                        </p>
                        <input
                          name={"requestFor"}
                          value={"agency"}
                          type="radio"
                          checked={formik.values.requestFor === "agency"}
                          onChange={formik.handleChange}
                          className="text-[#808080] font-montserrat text-base font-medium shadow-card focus:outline-none"
                        />
                      </div>
                    </div>
                    {formik.errors.requestFor && formik.touched.requestFor ? (
                      <div className="text-red-700 font-raleway text-[14px]">
                        {formik.errors.requestFor}
                      </div>
                    ) : null}
                  </div>

                  {formik.values.requestFor == "agency" && (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
                      <div>
                        <CustomInput
                          name="agencyName"
                          label="Agency name"
                          placeholder="Enter agency name"
                          onChange={formik.handleChange}
                          value={formik.values.agencyName}
                        />
                      </div>
                      <div>
                        <CustomInput
                          name="agencySize"
                          label="Agency size"
                          placeholder="Enter agency size"
                          onChange={formik.handleChange}
                          value={formik.values.agencySize}
                        />
                      </div>
                    </div>
                  )}
                  {formik.values.requestFor == "company" && (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
                      <div>
                        <CustomInput
                          name="companyName"
                          label="Company name"
                          placeholder="Enter company name"
                          onChange={formik.handleChange}
                          value={formik.values.companyName}
                        />
                      </div>
                      <div>
                        <CustomInput
                          name="companySize"
                          label="Company size"
                          placeholder="Enter company size"
                          onChange={formik.handleChange}
                          value={formik.values.companySize}
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
                      onChange={formik.handleChange}
                      value={formik.values.country}
                    />
                    {formik.errors.country && formik.touched.country ? (
                      <div className="text-red-700 font-raleway text-[14px]">
                        {formik.errors.country}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <PopupButton
                      url="https://calendly.com/subscription-j3m/discovery-call-leadlift"
                   
                      rootElement={document.getElementById("root")}
                      text="Touch to Schedule an Appointment"
                      styles={{
                        fontWeight: 500,
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        cursor: "pointer",
                        color: "#50C878",
                      }}
                      className="calendly_button"
                    />
                  </div>
                  <div className="w-full">
                    <CustomMultiLineInput
                      name="message"
                      label="Is there anything you'll like to say?"
                      placeholder=""
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />
                  </div>
                  <div>
                    <SolidGreenButton
                      width="100%"
                      type={"submit"}
                      loading={loading}>
                      Proceed
                    </SolidGreenButton>
                  </div>
                </div>
                <p className="foot-note text-textGray font-openSans text-[11px] md:text-[14px]">
                  Leadlift is committed to securing your privacy. By submitting
                  this form, you acknowledge Leadlift uses your information in
                  accordance with its Terms of use and Privacy policy.
                </p>
              </form> */}
                {/* <InlineWidget url="https://calendly.com/leadliftio" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessPopup
        open={successOpen}
        handleClose={() => setSuccessOpen(false)}
        Icon={CallBookingSuccessIcon}
        header="Your call is booked"
        description="Thank you for booking a call with us."
      />
    </div>
  );
};

export default BookACall;
