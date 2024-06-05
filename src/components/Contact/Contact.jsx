import React from "react";
import {
  MailFilled,
  LinkedinOutlined,
  CloudDownloadOutlined,
  GithubOutlined,
  WhatsAppOutlined,
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
      <p className="contact-content">
        <WhatsAppOutlined />
        <a
          href="https://wa.me/19996527795?text=Hello%20Marilia!%20I%20went%20from%20your%20website."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </p>
    </section>
  );
};

export default Contact;
