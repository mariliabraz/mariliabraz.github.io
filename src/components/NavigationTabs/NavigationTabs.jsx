import React from "react";
import { Tabs, Dropdown, Menu, Avatar } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./NavigationTabs.scss";

const NavigationTabs = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage("en")}>
        <Avatar
          src="https://flagcdn.com/w40/us.png"
          alt="English"
          className="flag-icon"
        />
        <span style={{ marginLeft: 8 }}>
          {t("navigationTabs.languageDropdown.options.en")}
        </span>
      </Menu.Item>
      <Menu.Item key="es" onClick={() => changeLanguage("es")}>
        <Avatar
          src="https://flagcdn.com/w40/es.png"
          alt="Español"
          className="flag-icon"
        />
        <span style={{ marginLeft: 8 }}>
          {t("navigationTabs.languageDropdown.options.es")}
        </span>
      </Menu.Item>
      <Menu.Item key="pt-BR" onClick={() => changeLanguage("pt-BR")}>
        <Avatar
          src="https://flagcdn.com/w40/br.png"
          alt="Português (Brasil)"
          className="flag-icon"
        />
        <span style={{ marginLeft: 8 }}>
          {t("navigationTabs.languageDropdown.options.pt-BR")}
        </span>
      </Menu.Item>
      <Menu.Item key="pt-PT" onClick={() => changeLanguage("pt-PT")}>
        <Avatar
          src="https://flagcdn.com/w40/pt.png"
          alt="Português (Portugal)"
          className="flag-icon"
        />
        <span style={{ marginLeft: 8 }}>
          {t("navigationTabs.languageDropdown.options.pt-PT")}
        </span>
      </Menu.Item>
    </Menu>
  );

  const items = [
    {
      key: "1",
      label: t("navigationTabs.tabs.about"),
      children: <About />,
    },
    {
      key: "2",
      label: t("navigationTabs.tabs.projects"),
      children: <Projects />,
    },
    {
      key: "3",
      label: t("navigationTabs.tabs.contact"),
      children: <Contact />,
    },
  ];

  return (
    <div className="navigation-tabs">
      <div className="navigation-language-dropdown">
        <Dropdown
          menu={languageMenu}
          placement="bottomRight"
          trigger={["click"]}
        >
          <GlobalOutlined className="language-dropdown-icon" />
        </Dropdown>
      </div>
      <div className="tabs-header">
        <Tabs className="custom-tabs" defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default NavigationTabs;
