import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Products from "./components/Products/Products";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Terms/Privacy";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import Domiciliated from "./components/Products/SubSections/Domiciliated";
import AdvantageLoan from "./components/Products/SubSections/AdvantageLoan";
import AtmanPay from "./components/Products/SubSections/AtmanPay/AtmanPay";
import People from "./components/Products/SubSections/AtmanPay/People";
import Company from "./components/Products/SubSections/AtmanPay/Company";
import CreditCard from "./components/Products/SubSections/AtmanPay/CreditCard";
import Educational from "./components/Products/SubSections/Educational";
import Contact from "./components/Products/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import Loans from "./components/Products/SubSections/Loans";
import Consulting from "./components/Products/SubSections/Consulting";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <Router> */}
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<WhoWeAre />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/creditos" element={<Loans />} />
          <Route path="/productos/domiciliacion" element={<Domiciliated />} />
          <Route
            path="/productos/adelanto-nomina"
            element={<AdvantageLoan />}
          />
          <Route path="/productos/garc-pay" element={<AtmanPay />} />
          <Route path="/productos/garc-pay/personas" element={<People />} />
          <Route path="/productos/garc-pay/empresas" element={<Company />} />
          <Route path="/productos/tarjeta" element={<CreditCard />} />
          <Route path="/productos/consultoria" element={<Consulting />} />
          <Route path="/educational" element={<Educational />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/aviso" element={<Privacy />} />
        </Routes>
        <Footer />
      </ScrollToTop>
      {/* </Router> */}
    </>
  );
};

export default App;
