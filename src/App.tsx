import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import BookACallPage from "./Pages/Book-A-Call";
import PricingPage from "./Pages/Pricing";
import PrivacyPolicyPage from "./Pages/PrivacyPolicy";
import TermsOfUsePolicyPage from "./Pages/TermsOfUsePolicy";
import OurServicesPage from "./Pages/OurServices";

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
      </Routes>
    </div>
  );
}

export default App;
