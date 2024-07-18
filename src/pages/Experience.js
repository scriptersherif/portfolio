import React from "react";

function Experience() {
  return (
    <div className="experience-container d-flex  justify-content-center p-4">
      <div className="work-experience-info col-lg-7">
        <h1>
          <span>Work</span> Experience
        </h1>
        <h2>
          What I <span>Did ?</span>
        </h2>
        <p>
          As an intern at Amizhth, I created my first websites using HTML and
          CSS, including two websites for gift shops, and practiced developing
          various small components. I built projects using JavaScript, such as a
          amazon front page, a rock paper scissors game, and a to-do app. In
          React, I developed a to-do app, an expense tracker, and a personal
          portfolio website. Additionally, I practiced more than 15 small React
          components to solidify my understanding of the framework.
        </p>
        <h2>
          What I <span>Learned ?</span>
        </h2>
        <p>
          During my internship at Amizhth, I gained foundational knowledge and
          hands-on experience in HTML and CSS, focusing on building static
          websites. My JavaScript skills were enhanced through the creation of
          interactive and functional applications. I developed a deeper
          understanding of React, including component-based architecture, state
          management, and dynamic user interfaces. I improved my problem-solving
          and debugging skills by tackling various coding challenges and project
          requirements. I also learned to implement responsive design practices
          to ensure optimal usability across different devices.
        </p>
      </div>
      <div className="technology-stack col-lg-5 ">
        <h1
          className="
        align-items-start"
        >
          skills
        </h1>
        <div className="technology-stack-cont d-flex flex-column  pt-4 pe-3">
          <div className="row-2 row justify-content-around ">
            <div className="stack d-flex align-items-center justify-content-center mx-3">
              <div className="stack-name">HTML</div>
            </div>
            <div className="stack d-flex align-items-center justify-content-center">
              <div className="stack-name">CSS</div>
            </div>
          </div>
          <div className="row-2 row mt-3 justify-content-around">
            <div className="stack d-flex align-items-center justify-content-center mx-3">
              <div className="stack-name">BOOTSTRAP</div>
            </div>
            <div className="stack d-flex align-items-center justify-content-center">
              <div className="stack-name">JAVASCRIPT</div>
            </div>
          </div>
          <div className="row-2 row mt-3 justify-content-around">
            <div className="stack d-flex align-items-center justify-content-center mx-3">
              <div className="stack-name">GIT</div>
            </div>
            <div className="stack d-flex align-items-center justify-content-center">
              <div className="stack-name">REACT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
