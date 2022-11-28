import { ImgContainer, ProjectStyled } from "./ProjectsStyled";
import { fini, gif, git, ignite, raro, userData } from "../../assets/index";

export const Projects = () => {
  return (
    <ProjectStyled id="projects">
      <ImgContainer
        href="https://denisluft8.github.io/rarotube/"
        target="_blank"
      >
        <img src={raro} />
        <p>Plataforma de videoaulas. Desenvolvido com ReactJS</p>
      </ImgContainer>
      <ImgContainer
        href="https://denisluft8.github.io/user-data-react"
        target="_blank"
      >
        <img src={userData} />
        <p>Manipulação de tabela. Desenvolvido com Typescript e React </p>
      </ImgContainer>
      <ImgContainer
        href="https://denisluft8.github.io/find-github-user/"
        target="_blank"
      >
        <img src={git} />
        <p>
          Página para encontrar dados de usuários do github pelo nome de
          usuário. Desenvolvido com Javascript
        </p>
      </ImgContainer>
      <ImgContainer
        href="https://denisluft8.github.io/gif-search/"
        target="_blank"
      >
        <img src={gif} />
        <p>
          Página utilizando API do GIPHY para buscar gifs. Desenvolvido com
          JavaScript
        </p>
      </ImgContainer>
      <ImgContainer
        href="https://denisluft8.github.io/Product-Land/"
        target="_blank"
      >
        <img src={fini} />
        <p>
          Product Landing Page feito para o curso Responsive Web Design da
          FreeCodeCamp. Desenvolvido com HTML e CSS
        </p>
      </ImgContainer>
      <ImgContainer
        href="https://denisluft8.github.io/ignitelab-ds/"
        target="_blank"
      >
        <img src={ignite} />
        <p>Design system do Ignite Lab. Desenvolvido com Typescript e React</p>
      </ImgContainer>
    </ProjectStyled>
  );
};
