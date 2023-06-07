import {
  AboutContainer,
  AboutStyled,
  ImgContainer,
  ProfileStyled,
} from "./AboutStyled";
import img from "../../assets/profile.png";
import { SectionName } from "../../Components/SectionName/SectionName";

export const About = () => {
  return (
    <AboutStyled id="about">
      <AboutContainer>
        <SectionName text="Sobre Mim" color="#000"/>
        <ImgContainer>
          <ProfileStyled src={img} />
        </ImgContainer>
        <p>
          Olá! Me chamo Dênis Augusto Luft e sou um desenvolvedor de front-end
          apaixonado por tecnologia. Formado em Análise e
          Desenvolvimento de Sistemas, estou sempre em busca de aprimorar minhas
          habilidades. Tenho um grande interesse pelo mundo do front-end, e
          adoro criar interfaces atraentes e interativas. Minhas principais
          ferramentas de trabalho incluem HTML, CSS, TypeScript, JavaScript e
          React. Com essas tecnologias, sou capaz de transformar ideias e
          conceitos em produtos digitais incríveis. Sempre busco me manter
          atualizado sobre as últimas tendências e melhores práticas do
          desenvolvimento front-end, pois acredito que a aprendizagem contínua é
          essencial para aprimorar minhas habilidades e oferecer resultados de
          alta qualidade aos projetos em que estou envolvido. Estou
          constantemente procurando por novos desafios e oportunidades para
          aplicar meu conhecimento e criatividade no desenvolvimento de soluções
          web. Se você está procurando um desenvolvedor front-end apaixonado e
          comprometido, estou pronto para colaborar em projetos inovadores e
          fazer parte de uma equipe talentosa. Fique à vontade para explorar meu
          portfólio e conhecer alguns dos projetos nos quais trabalhei.
        </p>
      </AboutContainer>
    </AboutStyled>
  );
};
