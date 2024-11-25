import React from "react";
import { Image, Timeline } from "antd";
import profileImage from "../../assets/profile-image.jpg";
import "./About.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <Image
          src={profileImage}
          alt="Marilia Franco"
          className="profile-image"
        />
        <div className="about-text">
          <h2>{t("about.title")}</h2>
          <Timeline
            className="about-timeline"
            mode="alternate"
            items={[
              {
                label: t("about.labels.august2018"),
                children: t("about.timeline.august2018"),
              },
              {
                label: t("about.labels.april2020"),
                children: t("about.timeline.april2020"),
              },
              {
                label: t("about.labels.june2020"),
                children: t("about.timeline.june2020"),
              },
              {
                label: t("about.labels.december2021"),
                children: t("about.timeline.december2021"),
              },
              {
                label: t("about.labels.march2022"),
                children: t("about.timeline.march2022"),
              },
              {
                label: t("about.labels.may2022"),
                children: t("about.timeline.may2022"),
              },
              {
                label: t("about.labels.june2022"),
                children: t("about.timeline.june2022"),
              },
              {
                label: t("about.labels.october2023"),
                children: t("about.timeline.october2023_1"),
              },
              {
                label: t("about.labels.october2023"),
                children: t("about.timeline.october2023_2"),
              },
              {
                label: t("about.labels.march2024"),
                children: t("about.timeline.march2024"),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
