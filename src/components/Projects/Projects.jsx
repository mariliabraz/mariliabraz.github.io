import React from "react";
import { Card, Row, Col } from "antd";
import "./Projects.scss";
import Skills from "../Skills/Skills";
import { useTranslation } from "react-i18next";

const { Meta } = Card;

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });
  return (
    <>
      <div id="projects">
        <h2>{t("projects.title")}</h2>
        <Row gutter={[16, 16]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={12} key={index}>
              <Card hoverable extra={<a href={project.link}></a>}>
                <Meta
                  title={project.title}
                  description={
                    <>
                      <p>{project.description}</p>
                      <p>
                        <strong>{t("responsibilities")}:</strong>{" "}
                        {project.responsibilities}
                      </p>
                      <p>
                        <strong>{t("techStack")}:</strong> {project.stack}
                      </p>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div id="skills">
        <h2>{t("projects.skillsTitle")}</h2>
        <Skills />
      </div>
    </>
  );
};

export default Projects;
