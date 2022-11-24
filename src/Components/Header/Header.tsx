import { HeaderStyled, UlStyled } from "./HeaderStyled";

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <UlStyled>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SOBRE MIM</a>
          </li>
          <li>
            <a href="">SKILLS</a>
          </li>
          <li>
            <a href="">PROJETOS</a>
          </li>
          <li>
            <a href="">CONTATOS</a>
          </li>
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};
