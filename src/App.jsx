import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
// import About from './Pages/About';
// import Products from './Pages/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; 
 
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
            {/* <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} /> */}
         </Routes>
      <Footer />
      </>
   );
};
 
export default App
