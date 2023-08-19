/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PricingCard from "./PricingCard";
import { Link } from "react-router-dom";

const packages: any = [
  {
    id: 1,
    packageName: "Basic Package",
    packageDescription:
      "Ideal for entrepreneurs just starting to establish a social media presence",
    price: "$1500",
    packageFeatures: [
      "Social Media Account Setup & Optimization for up to 2 platforms",
      "Basic Social Media Management (up to 10 posts per platform per month)",
      "Basic Community Management (monitoring and responding on weekdays)",
      "Monthly Analytics and Reporting",
      "Content Creation for posts (graphic design and copy-writing included)",
    ],
  },
  {
    id: 2,
    packageName: "Intermediate Package",
    packageDescription:
      "Designed for individual entrepreneurs looking to grow and engage their audience",
    price: "$3000",
    packageFeatures: [
      "All Basic Package services",
      "Social Media Management for up to 3 platforms (up to 20 posts per platform per month",
      "Active Community Management (monitoring and responding every day",
      "Content Creation for posts and 1 short video production per month",
      "Basic Social Media Advertising (ad spend not included",
      "Monthly Strategy Consultations",
    ],
  },
  {
    id: 3,
    packageName: "Advanced Package",
    packageDescription:
      "For entrepreneurs aiming for a more aggressive social media campaign",
    price: "$4500",
    packageFeatures: [
      "All Intermediate Package services",
      "Social Media Management for up to 4 platforms (up to 30 posts per platform per month",
      "24/7 Community Management, Content Creation for posts",
      "2 short video productions per month",
      "Advanced Social Media Advertising with Ad Optimization (ads spend not included)",
      "Bi-weekly Strategy Consultations, Crisis Management",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="w-full px-[20px] md:px-[150px] text-center bg-gradient-to-b from-[#EDF0F8] to-[#CCCCE5] pb-[70px] md:pb-[100px]">
      <div className="container mx-auto">
        <div className="border border-solid border-[#D9D9D9] px-4 md:px-[24px] py-[25px] md:py-[50px] ">
          <h2 className="font-montserrat font-semibold text-brandBlack text-[30px] md:text-[40px] leading-[40px] mb-4 w-full md:w-[70%] mx-auto">
            Try Leadlift comprehensive suite of digital solutions
          </h2>
          <p className="mb-16 md:mb-20 font-normal font-openSans text-brandBlack text-[13px] md:text-base">
            <Link
              to="/book-a-call"
              className="underline decoration-brandBlue cursor-pointer mx-1">
              Book a call
            </Link>
            now and experience the best solution for your business' social media
            platforms
          </p>
          <div className="w-full flex flex-wrap gap-16 text-center items-center justify-center">
            {packages.map((item: any, i: any) => (
              <div className="w-full md:w-[45%]" key={item.id}>
                <PricingCard
                  packageName={item.packageName}
                  packageDescription={item.packageDescription}
                  price={item.price}
                  packageFeatures={item.packageFeatures}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// background: linear-gradient(180deg, #EDF0F8 16.62%, #CCCCE5 48.61%);
