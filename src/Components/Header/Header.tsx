import { useEffect, useState } from "react";
import {
  Burguer1,
  Burguer2,
  Burguer3,
  BurguerContainer,
  HeaderContainer,
} from "./HeaderStyled";

export const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [burguer, setBurguer] = useState(false);

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
              SOBRE MIM
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleClick()}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleClick()}>
              PROJETOS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleClick()}>
              CONTATO
            </a>
          </li>
        </ul>
      </HeaderContainer>
    </>
  );
};
