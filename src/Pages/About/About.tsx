import {
  AboutContainer,
  AboutStyled,
  ImgContainer,
  ProfileStyled,
} from "./AboutStyled";
import img from "../../assets/profile.png";
import { SectionName } from "../../Components/SectionName/SectionName";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../contexts/LanguageContext";
import ptTranslations from "../../locales/pt.json";
import enTranslations from "../../locales/en.json";
import { useContext } from "react";

export const About = () => {
  const { language, setLanguage } =
    useContext<LanguageContextProps>(LanguageContext);
  const translations = language === "pt" ? ptTranslations : enTranslations;
  return (
    <AboutStyled id="about">
      <AboutContainer>
        <SectionName text={translations.about} color="#000" />
        <ImgContainer>
          <ProfileStyled src={img} />
        </ImgContainer>
        <p>{translations.description}</p>
      </AboutContainer>
    </AboutStyled>
  );
};
