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
import { useState, useContext } from "react";
import { SectionName } from "../../Components/SectionName/SectionName";
import { ImgWithVideo } from "../../Components/ImgWithVideo/ImgWithVideo";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../contexts/LanguageContext";
import ptTranslations from "../../locales/pt.json";
import enTranslations from "../../locales/en.json";

export const Projects = () => {
  const [hovered, setHovered] = useState(false);
  const { language, setLanguage } =
    useContext<LanguageContextProps>(LanguageContext);
  const translations = language === "pt" ? ptTranslations : enTranslations;

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <SectionName color="#000" text={translations.projects} />
      <ProjectStyled id="projects">
        <ImgWithVideo
          img={fortmix}
          video={fortmixV}
          link={"https://denisluft8.github.io/fortmix/"}
          description={translations.fortmix}
        />
        <ImgWithVideo
          img={reportPage}
          video={reportPageV}
          link={"https://denisluft8.github.io/report-page/"}
          description={translations.report}
        />
        <ImgWithVideo
          img={raro}
          video={rarotubeV}
          link={"https://denisluft8.github.io/rarotube/"}
          description={translations.raro}
        />
        <ImgWithVideo
          img={userData}
          video={userdataV}
          link={"https://denisluft8.github.io/user-data-react"}
          description={translations.userdata}
        />
        <ImgWithVideo
          img={git}
          video={githubV}
          link={"https://denisluft8.github.io/find-github-user/"}
          description={translations.git}
        />
        <ImgWithVideo
          img={gif}
          video={gifV}
          link={"https://denisluft8.github.io/gif-search/"}
          description={translations.gif}
        />
        <ImgWithVideo
          img={fini}
          video={finiV}
          link={"https://denisluft8.github.io/Product-Land/"}
          description={translations.fini}
        />
        <ImgWithVideo
          img={decaltak}
          video={decaltakv}
          link={"https://denisluft8.github.io/decaltak/"}
          description={translations.decaltak}
        />
      </ProjectStyled>
    </>
  );
};
