import React, { useState, useEffect } from "react"; 

import './Landig.css'

import gif1 from "./gif1.webp";
import gif2 from "./gif2.webp";
import gif3 from "./gif3.webp";
import gif4 from "./gif4.webp";
import baby1 from './baby1.jpg';
import baby2 from './baby2.jpg';
import baby3 from './baby3.jpg';
import baby4 from './baby4.jpg';
import baby5 from './baby5.jpg';
import baby6 from './baby6.jpg';

function Landing() {
  const babyImages = [baby1, baby2, baby3, baby4, baby5, baby6]; 
  const [currentBabyIndex, setCurrentBabyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBabyIndex((prevIndex) =>
        prevIndex === babyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval); 
  }, [babyImages.length]); 

  return (
    <div>
      <div className="deep-image">
        <img src={babyImages[currentBabyIndex]} alt="Baby" /> {/* Display the current baby image */}
      </div>
      <div className="gif-images">
        <img className="gif" src={gif1} alt="GIF 1" />
        <img className="gif" src={gif2} alt="GIF 2" />
        <img className="gif" src={gif3} alt="GIF 3" />
        <img className="gif" src={gif4} alt="GIF 4" />
      </div>
    </div>
  );
}

export default Landing;
