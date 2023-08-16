import React from "react";
import Blog from "../Components/Pages/Blog";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[75px] md:pt-[100px]">
        <Blog />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
