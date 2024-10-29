import React, { useState } from "react";
import './Navbar.css';
import Navimages from './navimage.png'
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
  const [showsidebarr, setShowsidebarr] = useState(true);

  const handleHamBurger = () => {
    console.log(showsidebarr);

    setShowsidebarr(!showsidebarr);
  }
  return (
   <div>
     <div className="Navbarr">
      <ul>      
        <li>EverGreenCare</li>
        <li className="nav-image" ><img src={Navimages} alt="" /></li>
        <li>About</li>
        <li>Our product</li>
        <li>Loacation</li>
        <li>Contact us</li>
        <li className="cimenubarr" onClick={handleHamBurger} >
        {showsidebarr ? <CiMenuBurger /> : <IoCloseSharp />}
        </li>
        
      </ul>
    </div>
    {showsidebarr ? null : (
        <ul className="close-barr">
          <li>About</li>
        <li>Our product</li>
        <li>Loacation</li>
        <li>Contact us</li>
        </ul>
      )}
    
      
   </div>
  );
}

export default Navbar;
