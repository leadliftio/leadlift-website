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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
