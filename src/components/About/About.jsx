import React from "react";
import { Image, Timeline } from "antd";
import profileImage from "../../assets/profile-image.jpg";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <Image
          src={profileImage}
          alt="Marilia Franco"
          className="profile-image"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <Timeline
            className="about-timeline"
            mode="alternate"
            items={[
              {
                label: "August 2018",
                children:
                  "Graduated as Biosystems Engineer, University of Sao Paulo",
              },
              {
                label: "April 2020",
                children:
                  "Completed Women Can Code program, transitioning into tech",
              },
              {
                label: "June 2020",
                children: "Joined Venturus as Junior Frontend Developer",
              },
              {
                label: "December 2021",
                children:
                  "Promoted to Mid-Level Frontend Developer at Venturus",
              },
              {
                label: "March 2022",
                children: "Started Software Engineering Specialization",
              },
              {
                label: "May 2022",
                children: "Began international experience at Farfetch",
              },
              {
                label: "June 2022",
                children:
                  "Built an internal tool to streamline workflows using JavaScript, jQuery, Bootstrap, and CSS",
              },
              {
                label: "October 2023",
                children:
                  "Earned Post-Graduate Certification in Software Engineering",
              },
              {
                label: "October 2023",
                children:
                  "Rebuilt and scaled the internal tool using React, SCSS, and Firebase",
              },
              {
                label: "March 2024",
                children:
                  "Trained and mentored a new web developer, solidifying the team’s capabilities",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
