import React from "react";
import { Row, Col } from "antd";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
  Loading3QuartersOutlined,
} from "@ant-design/icons";
import "./Skills.scss";
import { useTranslation } from "react-i18next";

const SkillsLegend = () => {
  const { t } = useTranslation();
  return (
    <div className="skills-legend">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <HeartTwoTone className="icon heart" twoToneColor="#eb2f96" />
          {t("skills.legend.favorites")}
        </Col>
        <Col xs={24} sm={12} md={6}>
          <SmileTwoTone className="icon smile" />
          {t("skills.legend.comfortable")}
        </Col>
        <Col xs={24} sm={12} md={6}>
          <CheckCircleTwoTone
            className="icon checkcircle"
            twoToneColor="#52c41a"
          />{" "}
          {t("skills.legend.improving")}
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Loading3QuartersOutlined className="icon loading" spin />
          {t("skills.legend.learning")}
        </Col>
      </Row>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    {
      name: "HTML",
      level: 5,
      icon: <HeartTwoTone className="icon heart" twoToneColor="#eb2f96" />,
    },
    {
      name: "JavaScript",
      level: 5,
      icon: <HeartTwoTone className="icon heart" twoToneColor="#eb2f96" />,
    },
    {
      name: "React",
      level: 4,
      icon: <HeartTwoTone className="icon heart" twoToneColor="#eb2f96" />,
    },
    {
      name: "Redux Toolkit",
      level: 3,
      icon: <HeartTwoTone className="icon heart" twoToneColor="#eb2f96" />,
    },
    {
      name: "CSS | SCSS",
      level: 4,
      icon: <HeartTwoTone className="icon heart" twoToneColor="#eb2f96" />,
    },
    {
      name: "Bootstrap",
      level: 3,
      icon: <HeartTwoTone className="icon heart" twoToneColor="#eb2f96" />,
    },
    {
      name: "TypeScript",
      level: 4,
      icon: <SmileTwoTone className="icon smile" />,
    },
    {
      name: "Next",
      level: 4,
      icon: <SmileTwoTone className="icon smile" />,
    },
    {
      name: "GraphQL",
      level: 4,
      icon: <SmileTwoTone className="icon smile" />,
    },
    {
      name: "jQuery",
      level: 3,
      icon: <SmileTwoTone className="icon smile" />,
    },
    {
      name: "Firebase",
      level: 3,
      icon: <SmileTwoTone className="icon smile" />,
    },

    {
      name: "GitLab | GitHub",
      level: 3,
      icon: <SmileTwoTone className="icon smile" />,
    },
    {
      name: t("skills.agile"),
      level: 3,
      icon: <SmileTwoTone className="icon smile" />,
    },
    {
      name: "REST APIs",
      level: 3,
      icon: <SmileTwoTone className="icon smile" />,
    },
    {
      name: "Jest",
      level: 3,
      icon: (
        <CheckCircleTwoTone
          className="icon checkcircle"
          twoToneColor="#52c41a"
        />
      ),
    },
    {
      name: "Cypress",
      level: 2,
      icon: (
        <CheckCircleTwoTone
          className="icon checkcircle"
          twoToneColor="#52c41a"
        />
      ),
    },
    {
      name: "Python",
      level: 2,
      icon: <Loading3QuartersOutlined className="icon loading" spin />,
    },
    {
      name: "FastAPI",
      level: 2,
      icon: <Loading3QuartersOutlined className="icon loading" spin />,
    },
  ];
  return (
    <div className="skills-section">
      <Row gutter={[16, 16]} className="skills-row">
        {skills.map((skill, index) => (
          <Col xs={24} sm={12} md={8} key={index} className="skill-col">
            <h3>
              {skill.icon} {skill.name}
            </h3>
          </Col>
        ))}
      </Row>
      <SkillsLegend />
    </div>
  );
};

export default Skills;
