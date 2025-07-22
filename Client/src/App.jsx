import React, { useEffect } from "react";
import Payment from "./Payment";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Home";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import About from "./About";
import Faqyt from "./Components/Faq";
import RefundPolicyPage from "./RefundPolicyPage";
import Terms from "./Components/Terms";
import Contact from "./Components/Contact";
import Successful from "./Successful";
import { initGA, trackPageView } from "./anylitcs";


function App() {

  const location = useLocation();

  useEffect(() => {
    initGA(); 
  }, []);

  useEffect(() => {
    trackPageView(location.pathname); 
  }, [location]);


  return (
    <div>



      <Routes>

        <Route element={<Payment />} path="/courselink" />
        <Route element={<Home />} path="/" />
        <Route element={<PrivacyPolicy />} path="/privacy-policy" />
        <Route element={<About />} path="/about" />
        <Route element={<Faqyt />} path="/faq" />
        <Route element={<RefundPolicyPage />} path="/refund-policy" />
        <Route element={<Terms />} path="/terms-policy" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Successful />} path="/successful" />








      </Routes>


    </div>
  );
}

export default App;
