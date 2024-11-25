import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>{t("footer.madeWithLove")}</p>
      <p>{t("footer.rightsReserved")}</p>
    </footer>
  );
};

export default Footer;
