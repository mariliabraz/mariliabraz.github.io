import React from "react";
import { Tabs } from "antd";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./NavigationTabs.scss";

const NavigationTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "About Me",
      children: <About />,
    },
    {
      key: "2",
      label: "Projects",
      children: <Projects />,
    },
    {
      key: "3",
      label: "Contact Me",
      children: <Contact />,
    },
  ];
  return (
    <Tabs
      className="custom-tabs"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  );
};

export default NavigationTabs;
