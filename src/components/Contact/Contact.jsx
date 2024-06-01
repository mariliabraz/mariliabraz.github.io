import React from "react";
import {
  MailFilled,
  LinkedinOutlined,
  CloudDownloadOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p className="contact-content">
        <MailFilled />{" "}
        <a href="mailto:marilia.andrad@gmail.com">marilia.andrad@gmail.com</a>
      </p>

      <p className="contact-content">
        <LinkedinOutlined />
        <a href="https://www.linkedin.com/in/mar%C3%ADlia-franco-de-andrade/">
          LinkedIn Profile
        </a>
      </p>
      <p className="contact-content">
        <GithubOutlined />
        <a href="https://github.com/mariliafranco">GitHub Account</a>
      </p>
      <p className="contact-content">
        <CloudDownloadOutlined />
        <a href="../../assets/Marilia-Franco-Frontend.pdf" download>
          Download Resume
        </a>
      </p>
    </section>
  );
};

export default Contact;
