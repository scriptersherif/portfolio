import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const goToNextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 2); 
  };

  const goToPreviousSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 2) % 2); 
  };

  return (
    <div className="projects-container d-flex justify-content-center align-items-center flex-column">
      <h1 className="project-header text-center">
        <span>My</span> Projects
      </h1>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
        <Carousel.Item>
          <div className="project-container mt-3">
            <div className="project-img-container">
              <img src="todoimg.png" alt="" className="project-image" />
            </div>
            <div className="project-information d-flex flex-column">
              <h2 className="text-center">TASK MASTER</h2>
              <div className="button-container text-center">
                <a
                  href="https://scriptersherif.github.io/todo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="action-button">Go Live</button>
                </a>
                <a
                  href="https://github.com/scriptersherif/todo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="action-button">View Code</button>
                </a>
              </div>
              <p className="project-info">
                TaskMaster is a user-friendly to-do application designed to
                streamline task management and enhance productivity. The
                platform allows users to add new tasks, mark them as complete,
                and delete tasks they no longer need. With an intuitive
                interface and seamless functionality, TaskMaster helps users
                stay organized and focused on their daily objectives.
              </p>
              <button className="slider-button " onClick={goToNextSlide}>
                Next Slide
              </button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="project-container mt-3">
            <div className="project-img-container">
              <img src="expenseimg.png" alt="" className="project-image" />
            </div>
            <div className="project-information d-flex flex-column">
              <h2 className="text-center">Budget Buddy</h2>
              <div className="button-container text-center">
                <a
                  href="https://scriptersherif.github.io/expensetracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="action-button">Go Live</button>
                </a>
                <a
                  href="https://github.com/scriptersherif/expensetracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="action-button">View Code</button>
                </a>
              </div>
              <p className="project-info">
                BudgetBuddy is a comprehensive income and expense tracking
                application designed to help users manage their finances
                effortlessly. The platform allows users to add income and
                expenses, automatically calculating the total balance. With a
                clear and intuitive interface, BudgetBuddy provides an effective
                way to monitor financial activities, ensuring users stay on top
                of their budgeting goals and make informed financial decisions.
              </p>
              <button className="slider-button" onClick={goToPreviousSlide}>
                Previous Slide
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
