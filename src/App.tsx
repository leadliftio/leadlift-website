import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import BookACallPage from "./Pages/Book-A-Call";
import PricingPage from "./Pages/Pricing";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy";
import TermsOfUsePolicyPage from "./Pages/TermsOfUsePolicy";
import OurServicesPage from "./Pages/OurServices";
import BlogPost from "./Components/Pages/Blog/BlogPost";
import BlogPage from "./Pages/Blog";
import SuccessPopup from "./Components/SuccessPopup";
import toast, { Toaster } from "react-hot-toast";

function App() {
  toast.error("error");
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{ zIndex: 9999 }}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          // duration: Infinity,

          style: {
            background: "#fafafa",
            color: "#121212",
            fontFamily: "outfit",
            width: "100%",
            textAlign: "start",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-a-call" element={<BookACallPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePolicyPage />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      {/* <SuccessPopup /> */}
    </div>
  );
}

export default App;
