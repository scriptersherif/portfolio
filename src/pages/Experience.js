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
          As an Associate React Developer at Risolutor Technology, I created two
          dynamic websites, including a company website and a product website.
          Additionally, I developed and maintained an admin management software
          and contributed to the development of an HRMS software. My role
          involved designing user interfaces, implementing features, and
          ensuring the overall functionality and performance of these web
          applications.
        </p>
        <h2>
          What I <span>Learned ?</span>
        </h2>
        <p>
          During my time at Risolutor Technology, I mastered the Agile method of
          working, significantly improving my project management and team
          collaboration skills. I gained extensive experience in developing
          products from scratch, managing end-to-end processes, and enhancing my
          time management abilities by balancing multiple projects and
          deadlines. My teamwork capabilities were strengthened through
          effective collaboration with colleagues, and I developed robust
          bug-fixing and problem-solving skills, ensuring the delivery of
          high-quality and reliable software solutions.
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
