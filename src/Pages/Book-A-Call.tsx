import React from "react";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BookACall from "../Components/Pages/BookACall";

const BookACallPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[75px]">
        <BookACall />
      </div>
      <Footer />
    </>
  );
};

export default BookACallPage;
