import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Me() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="me-container d-flex justify-content-center flex-column align-items-center">
      <img
        src="pic-0.png"
        alt="sample"
        className="profile"
        data-aos="flip-left"
      />
      <div className="me-container-info text-center mt-3" data-aos="fade-down">
        <h1>
          Hi I'm <span>Yasin Sherif</span>
        </h1>
        <h1>
          <span>Front</span> End Developer
        </h1>
        <p>
          Working with my hands to make magic happen on the internet. View my
        </p>
        <p>
          <span className="projects">Projects</span>{" "}
          <span className="projects">resume</span> contact me or send me an
          email at
        </p>
        <p>sherifyasin167@gmail.com</p>
        <p>Madurai,TamilNadu,India</p>
      </div>
    </div>
  );
}

export default Me;
