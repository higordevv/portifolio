import React from "react";
import { useTranslation } from "react-i18next";

function SwitchLanguage() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event: {
    target: { value: string | undefined };
  }) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="language"
          value="pt_BR"
          checked={i18n.language === "pt_BR"}
          onChange={handleChangeLanguage}
        />
        Português
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="en_US"
          checked={i18n.language === "en_US"}
          onChange={handleChangeLanguage}
        />
        English
      </label>
    </div>
  );
}

export default SwitchLanguage;
