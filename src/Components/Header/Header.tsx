import { useEffect, useState, useContext } from "react";
import {
  Burguer1,
  Burguer2,
  Burguer3,
  BurguerContainer,
  HeaderContainer,
} from "./HeaderStyled";
import { ToggleButtonComponent } from "../Toggle Button/ToggleButton";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../contexts/LanguageContext";
import ptTranslations from "../../locales/pt.json";
import enTranslations from "../../locales/en.json";

export const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [burguer, setBurguer] = useState(false);
  const { language, setLanguage } =
    useContext<LanguageContextProps>(LanguageContext);
  const translations = language === "pt" ? ptTranslations : enTranslations;

  const handleClick = () => {
    burguer === false ? setBurguer(true) : setBurguer(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsHidden(isScrollingDown && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const backgroundTransparent = !isHidden && prevScrollPos === 0;
  return (
    <>
      <BurguerContainer onClick={() => handleClick()}>
        <Burguer1
          transform1={burguer ? "translate(0, 11px) rotate(-45deg)" : ""}
        ></Burguer1>
        <Burguer2 opacity={burguer ? "0" : "1"}></Burguer2>
        <Burguer3
          transform1={burguer ? "translate(0, -11px) rotate(45deg)" : ""}
        ></Burguer3>
      </BurguerContainer>
      <HeaderContainer
        backgroundTransparent={backgroundTransparent}
        isHidden={isHidden}
        display={burguer ? "flex" : "none"}
      >
        <ul>
          <li>
            <a href="#home" onClick={() => handleClick()}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleClick()}>
              {translations.about.toUpperCase()}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleClick()}>
              {translations.skills.toUpperCase()}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleClick()}>
              {translations.projects.toUpperCase()}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleClick()}>
              {translations.contact.toUpperCase()}
            </a>
          </li>
          <li>
            <ToggleButtonComponent />
          </li>
        </ul>
      </HeaderContainer>
    </>
  );
};
