import { useContext } from "react";
import styled from "styled-components";
import ptTranslations from "../../locales/pt.json";
import enTranslations from "../../locales/en.json";
import { LanguageContext } from "../../contexts/LanguageContext";

const ToggleButtonContainer = styled.div`
  display: flex;
`;

const ToggleButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.isSelected ? "#4767a4" : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : "white")};
  border: 2px solid #4767a4;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ToggleButtonComponent = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const translations = language === "pt" ? ptTranslations : enTranslations;

  return (
    <ToggleButtonContainer>
      <ToggleButton
        onClick={() => setLanguage("pt")}
        isSelected={language === "pt"}
      >
        <span>PT</span>
      </ToggleButton>
      <ToggleButton
        onClick={() => setLanguage("en")}
        isSelected={language === "en"}
      >
        <span>EN</span>
      </ToggleButton>
    </ToggleButtonContainer>
  );
};
