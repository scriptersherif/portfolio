import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="About-container d-flex justify-content-center align-items-center p-5 mt-5">
      <div className="col-md-6 about-img-container" data-aos="fade-left">
        <img
          src="yasin-front-ai-brush-removebg-naaxaqfo (1).png"
          className="about-img"
          alt=""
        />
      </div>
      <div
        className="col-md-6 about-info-container
      "
        data-aos="fade-right"
      >
        <h1 className="text-center">
          About <span>Me</span>
        </h1>
        <p>
          I am a dynamic frontend developer with a passion for crafting visually
          appealing and functional user interfaces. With six months of hands-on
          experience in React.js development, I excel in creating dynamic and
          responsive web applications. My journey as a self-taught developer has
          been filled with challenges, but it has also honed my ability to work
          end-to-end on frontend development projects. During my internship
          training, I learned and gained practical experience in HTML, CSS,
          JavaScript, Bootstrap, and React.
        </p>
      </div>
    </div>
  );
}

export default About;
