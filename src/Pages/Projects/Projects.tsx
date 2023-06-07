import { ProjectStyled } from "./ProjectsStyled";
import {
  decaltak,
  decaltakv,
  fini,
  finiV,
  fortmix,
  fortmixV,
  gif,
  gifV,
  git,
  githubV,
  ignite,
  raro,
  rarotubeV,
  reportPage,
  reportPageV,
  userData,
  userdataV,
} from "../../assets/index";
import { useState } from "react";
import { SectionName } from "../../Components/SectionName/SectionName";
import { ImgWithVideo } from "../../Components/ImgWithVideo/ImgWithVideo";

export const Projects = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <SectionName color="#000" text="Projetos" />
      <ProjectStyled id="projects">
        <ImgWithVideo
          img={fortmix}
          video={fortmixV}
          link={"https://denisluft8.github.io/fortmix/"}
          description={
            "Landing Page desenvolvida para a construtora FortMix. Desenvolvida com React e Typescript."
          }
        />
        <ImgWithVideo
          img={reportPage}
          video={reportPageV}
          link={"https://denisluft8.github.io/report-page/"}
          description={
            "Página de relatório, contendo diversos gráficos cujos valores podem ser alterados em um arquivo de JSON. Desenvolvida com React e Javascript."
          }
        />
        <ImgWithVideo
          img={raro}
          video={rarotubeV}
          link={"https://denisluft8.github.io/rarotube/"}
          description={
            "Plataforma de videoaulas. Desenvolvido com ReactJS e Typescript"
          }
        />
        <ImgWithVideo
          img={userData}
          video={userdataV}
          link={"https://denisluft8.github.io/user-data-react"}
          description={
            "Manipulação de tabela. Desenvolvido com Typescript e React"
          }
        />
        <ImgWithVideo
          img={git}
          video={githubV}
          link={"https://denisluft8.github.io/find-github-user/"}
          description={
            "Página para encontrar dados de usuários do github pelo nome de usuário. Desenvolvido com Javascript"
          }
        />
        <ImgWithVideo
          img={gif}
          video={gifV}
          link={"https://denisluft8.github.io/gif-search/"}
          description={
            "Página utilizando API do GIPHY para buscar gifs. Desenvolvido com JavaScript"
          }
        />
        <ImgWithVideo
          img={fini}
          video={finiV}
          link={"https://denisluft8.github.io/Product-Land/"}
          description={
            "Product Landing Page feito para o curso Responsive Web Design da FreeCodeCamp. Desenvolvido com HTML e CSS"
          }
        />
        <ImgWithVideo
          img={decaltak}
          video={decaltakv}
          link={"https://denisluft8.github.io/decaltak/"}
          description={
            "Landing Page desenvolvida para a empresa Decaltak Comunicação Visual. Desenvolvida com React e Typescript."
          }
        />
      </ProjectStyled>
    </>
  );
};
