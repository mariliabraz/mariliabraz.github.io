import React from "react";
import { Row, Col } from "antd";
import {
  SmileOutlined,
  HeartOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import "./Skills.scss";

const skills = [
  {
    name: "JavaScript",
    level: 5,
    icon: <SmileOutlined className="icon smile" />,
  },
  { name: "React", level: 4, icon: <HeartOutlined className="icon heart" /> },
  {
    name: "TypeScript",
    level: 4,
    icon: <HeartOutlined className="icon heart" />,
  },
  {
    name: "Redux",
    level: 3,
    icon: <CheckCircleOutlined className="icon checkcircle" />,
  },
  {
    name: "CSS/SCSS",
    level: 4,
    icon: <HeartOutlined className="icon heart" />,
  },
  {
    name: "Firebase",
    level: 3,
    icon: <CheckCircleOutlined className="icon checkcircle" />,
  },
  {
    name: "Python",
    level: 2,
    icon: <LoadingOutlined className="icon loading" spin />,
  },
  {
    name: "FastAPI",
    level: 2,
    icon: <LoadingOutlined className="icon loading" spin />,
  },
  {
    name: "Bootstrap",
    level: 3,
    icon: <CheckCircleOutlined className="icon checkcircle" />,
  },
  {
    name: "Jest",
    level: 3,
    icon: <CheckCircleOutlined className="icon checkcircle" />,
  },
  { name: "Cypress", level: 2, icon: <SmileOutlined className="icon smile" /> },
];

const Skills = () => (
  <Row gutter={[16, 16]} className="skills-row">
    {skills.map((skill, index) => (
      <Col xs={24} sm={12} md={8} key={index} className="skill-col">
        <h3>
          {skill.icon} {skill.name}
        </h3>
      </Col>
    ))}
  </Row>
);

export default Skills;
