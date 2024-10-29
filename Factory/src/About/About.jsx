import React from "react";
import Aboutimage from "./fimg2.jpg";
import "./About.css";

function About() {
  return (
    <div>
      <div className="about">
        <div className="about-image">
          <img src={Aboutimage} alt="" />
        </div>
        <div className="about-details">
          <p>I'm Niket Soni</p> <br />
          <p  >
            Our factory is based on the Evergreen Foundation, where our
            commitment to quality and sustainability is at the heart of
            everything we do.
          </p>{" "}
          <br />
          <p>
            Our factory is dedicated to creating high-quality pads and diapers
            that prioritize the comfort and safety of your loved ones. We
            believe in using eco-friendly materials and innovative manufacturing
            processes that not only provide the best for our customers but also
            protect our planet for future generations.
          </p>
          <br />
          <p>
            At Evergreen Foundation, we take pride in our craftsmanship,
            ensuring that every product we create meets the highest standards.
            Our team works tirelessly to guarantee that each pad and diaper
            delivers unmatched comfort and reliability. Join us on our journey
            towards a sustainable future, where quality meets responsibility.
          </p>
          <br />
          <p>Together, we can make a difference—one product at a time.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
