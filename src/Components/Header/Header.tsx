import { HeaderStyled, UlStyled } from "./HeaderStyled";

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <UlStyled>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">SOBRE MIM</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJETOS</a>
          </li>
          <li>
            <a href="#contact">CONTATO</a>
          </li>
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};
