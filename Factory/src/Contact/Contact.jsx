import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import "./Contact.css";
import img1 from "./img1.jpg";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.jpg";
import img5 from "./img5.png";
import img6 from "./img6.png";

function Contact() {
  return (
    <div>
      <div className="contact">
        <h1
          className="contact-heading"
          style={{ color: "#00818a", textDecoration: "underline" }}
        >
          Contact Me
        </h1>
        <div className="contact-details">
          <h1>
            <p className="desc">
              <BiLogoGmail style={{ color: "#00818a" }} />
              <a href="mailto:niketsoni6april@gmail.com">
                niketsoni6april@gmail.com
              </a>
            </p>
          </h1>
          <p className="desc">
            <MdLocalPhone style={{ color: "#00818a" }} />
            +917081627797
          </p>
        </div>
      </div>
      <marquee class="marque-img" behavior="scroll" direction="right">
        <img src={img1} alt="" class="marquee-image" />
        <img src={img2} alt="" class="marquee-image" />
        <img src={img3} alt="" class="marquee-image" />
        <img src={img4} alt="" class="marquee-image" />
        <img src={img5} alt="" class="marquee-image" />
        <img src={img6} alt="" class="marquee-image" />
      </marquee>
    </div>
  );
}

export default Contact;
