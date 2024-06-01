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
                  "Graduated as Biosystems Engineer from University of Sao Paulo",
              },
              {
                label: "February 2020",
                children: "Started Women Can Code program",
              },
              {
                label: "April 2020",
                children: "Completed Women Can Code program",
              },
              {
                label: "June 2020",
                children: "Joined Venturus as Junior Frontend Developer",
              },
              {
                label: "December 2021",
                children: "Promoted as Mid Frontend Developer on Venturus",
              },
              {
                label: "March 2022",
                children: "Started Software Engineering Specialization",
              },
              {
                label: "May 2022",
                children: "Engaged in international experience at Farfetch",
              },
              {
                label: "June 2022",
                children:
                  "Developed internal web application using JavaScript, jQuery, Bootstrap, and CSS",
              },
              {
                label: "October 2023",
                children: "Post-Graduate as a Software Engineer",
              },
              {
                label: "October 2023",
                children:
                  "Rebuilt internal web application using React, SCSS, and Firebase",
              },
              {
                label: "March 2024",
                children: "Trained new web developer on the team at Farfetch",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
