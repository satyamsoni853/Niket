import React, { useState, useEffect } from "react";
import "./Location.css";

import fimg1 from "./fimg1.jpg";
import fimg2 from "./fimg2.jpg";
import fimg3 from "./fimg3.jpg";
import fimg4 from "./fimg4.jpg";
import fimg5 from "./fimg5.jpg";
import fimg6 from "./fimg6.jpg";
import fimg7 from "./fimg7.jpg";
import vid1 from "./vid1.mp4";

function Location() {
  const images = [fimg1, fimg2, fimg3, fimg4, fimg5, fimg6,fimg7]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="location">
      <hr />
      <h1>Our Manufacturing Center</h1>

      <div className="location">
        <h1>Our Location</h1>
        <p>We are located at:</p>
        <address>
          1234 Evergreen Lane,
          <br />
          Faizabad, Uttar Pradesh, India.
          <br />
          <a
            href="https://g.co/kgs/qwHGAWo"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </address>
      </div>
      <div>
        <div className="factory-img">
          <video width="400" autoPlay loop muted controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src={images[currentImageIndex]} alt="" />
        </div>

        <div className="our-comany">
          <h1>Innovation and Care, Hand in Hand"</h1>
          <p>
            <span class="heading">1-Dedicated to Comfort and Quality</span>
          </p>
          <p>
            At our state-of-the-art facility in Manufacturer in Faizabad, Uttar
            Pradesh, we specialize in crafting high-quality diapers and pads
            designed for maximum comfort and reliability. Every product is made
            with love and precision, ensuring the best for your little ones and
            loved ones.
          </p>

          <p>
            <span class="heading">2-Where Innovation Meets Care</span>
          </p>
          <p>
            Our manufacturing facility combines cutting-edge technology with a
            passion for quality, producing diapers and pads that provide
            unbeatable protection, comfort, and care for every stage of life.
          </p>

          <p>
            <span class="heading">
              3-Trusted by Families, Designed with Care
            </span>
          </p>
          <p>
            We believe that quality matters, especially when it comes to caring
            for those you love. Our diapers and pads are manufactured to meet
            the highest standards, making comfort, safety, and convenience our
            top priorities.
          </p>

          <p>
            <span class="heading">4-Protecting Comfort, Every Day</span>
          </p>
          <p>
            Our goal is to make daily life easier and more comfortable with
            high-quality diaper and pad products. We are proud to deliver
            solutions that meet the needs of families and caregivers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Location;
