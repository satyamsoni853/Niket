import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Location from "./Location/Location";
import Navbar from "./Navigation/Navbar";
import About from "./About/About";
import Product from "./OurProduct/Product";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";

function App() {
  return (
    <div>
       <Navbar />
      <Landing />
      <About />
      <Product />
      <Location />
      <Contact />
      <Footer /> 
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/About" element={<About />} /> */}
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/location" element={<Location />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      {/* </Routes>
    </BrowserRouter> */}
     
    </div>
  );
}

export default App;
