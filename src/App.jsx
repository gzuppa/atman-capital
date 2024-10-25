import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; 
import WorkLoan from "./components/Products/SubSections/WorkLoan";
import Domiciliated from "./components/Products/SubSections/Domiciliated";
import AdvantageLoan from "./components/Products/SubSections/AdvantageLoan";
 
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
      <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<WhoWeAre />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/nomina" element={<WorkLoan />} />
            <Route path="/productos/domiciliacion" element={<Domiciliated />} />
            <Route path="/productos/adelanto-nomina" element={<AdvantageLoan />} />
         </Routes>
      <Footer />
      </>
   );
};

export default App
