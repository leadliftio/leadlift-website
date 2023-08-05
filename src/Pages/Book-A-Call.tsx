import React from "react";
import Footer from "../Components/Footer";
import BookACall from "../Components/Pages/BookACall";
import Navbar from "../Components/Navbar";

const BookACallPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[75px] md:pt-[100px]">
        <BookACall />
      </div>
      <Footer />
    </>
  );
};

export default BookACallPage;
