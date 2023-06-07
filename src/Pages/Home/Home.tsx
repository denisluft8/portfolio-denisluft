import { HomeStyled, NameCard, TypedContainer } from "./HomeStyled";
import Typed from "react-typed";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../contexts/LanguageContext";
import ptTranslations from "../../locales/pt.json";
import enTranslations from "../../locales/en.json";
import { useContext } from "react";

export const Home = () => {
  const { language, setLanguage } =
    useContext<LanguageContextProps>(LanguageContext);
  const translations = language === "pt" ? ptTranslations : enTranslations;

  return (
    <HomeStyled id="home">
      <NameCard>
        <h1>
          <span>&lt;</span>Dênis Luft
          <span> /&gt;</span>
        </h1>
        <TypedContainer>
          <Typed
            strings={[translations.dev]}
            typeSpeed={150}
            backSpeed={50}
            backDelay={5000}
            loop
          />
        </TypedContainer>
      </NameCard>
    </HomeStyled>
  );
};
