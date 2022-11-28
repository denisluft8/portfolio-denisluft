import { AboutContainer, AboutStyled, ProfileStyled } from "./AboutStyled";
import img from "../../assets/profile.png";

export const About = () => {
  return (
    <AboutStyled id="about">
      <AboutContainer>
        <ProfileStyled src={img} />
        <p>
          Olá, me chamo Dênis Luft, sou natural de Campos Novos mas atualmente
          resido em Florianópolis. Em 2021 me formei em Análise e
          Desenvolvimento de Sistemas e desde então venho me dedicando e
          aperfeiçoando em tecnologias como Typescript e React com o intuíto de
          transição de carreira como Desenvolvedor Front-End.
        </p>
      </AboutContainer>
    </AboutStyled>
  );
};
