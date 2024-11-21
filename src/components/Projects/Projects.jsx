import React from "react";
import { Card, Row, Col } from "antd";
import "./Projects.scss";
import Skills from "../Skills/Skills";

const { Meta } = Card;

const projects = [
  {
    title: "Internal Web Application for Farfetch",
    description:
      "Developed an internal web application to replace a spreadsheet-based process at Farfetch.",
    responsibilities:
      "Initially built the application using vanilla JavaScript. Rebuilt with React and SCSS as the application scaled. Integrated backend services using Firebase. Currently leading training for a new web developer.",
    stack: "JavaScript, jQuery, Bootstrap, CSS, React, SCSS, Firebase",
    image: "link_to_image_or_screenshot",
    link: "link_to_project_or_demo",
  },
  {
    title: "Frontend Development at Venturus",
    description:
      "Worked on multiple projects as part of a Scrum and later a SAFe-based team at Venturus.",
    responsibilities:
      "Developed and maintained frontend applications using React, Redux, and TypeScript. Interacted with REST APIs and ensured code quality through reviews and testing using Jest and Cypress.",
    stack: "React, Redux, TypeScript, REST APIs, Jest, Cypress",
    image: "link_to_image_or_screenshot",
    link: "link_to_project_or_demo",
  },
  {
    title: "Financial API",
    description:
      "A personal project published on RapidAPI that fetches data for stocks and cryptocurrencies.",
    responsibilities:
      "Designed and implemented the API using FastAPI and Python. Enhanced functionality to stand out in the market. This was my first experience with Python, where I learned about API design, data fetching, and error handling.",
    challenges:
      "Faced challenges with learning Python syntax and best practices, implementing efficient data fetching, and ensuring robust error handling.",
    stack: "FastAPI, Python, RapidAPI",
    image: "link_to_image_or_screenshot",
    link: "link_to_project_or_demo",
  },
  {
    title: "BuddyMinder",
    description:
      "Developed a Chrome extension based in a personal idea to help users memorize key information.",
    responsibilities:
      "Developed the extension based on a personal idea to improve memory retention and learning. Designed a sleek and user-friendly interface using React and SCSS. Integrated Firebase for data synchronization and cross-platform functionality. Added multilingual support (i18n) for English, French, Spanish, and Portuguese.",
    challenges:
      "Overcame challenges with Chrome Extension APIs, ensuring seamless notifications and efficient data management. Managed integration with Firebase for real-time updates.",
    stack: "React, SCSS, Ant Design, Chrome Extension APIs",
    image: "link_to_image_or_screenshot",
    link: "link_to_project_or_demo",
  },
];

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2>Projects</h2>
        <Row gutter={[16, 16]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={12} key={index}>
              <Card hoverable>
                <Meta
                  title={project.title}
                  description={
                    <>
                      <p>{project.description}</p>
                      <p>
                        <strong>Responsibilities:</strong>{" "}
                        {project.responsibilities}
                      </p>
                      <p>
                        <strong>Tech Stack:</strong> {project.stack}
                      </p>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <Skills />
      </section>
    </>
  );
};

export default Projects;
