import analogImg from "../assets/projects/analog.jpg";
import analogVideo from "../assets/projects/analog.mp4";
import aulastubeImg from "../assets/projects/aulastube.jpg";
import aulastubeVideo from "../assets/projects/aulastube.mp4";
import decaltakImg from "../assets/projects/decaltak.jpg";
import decaltakVideo from "../assets/projects/decaltak.mp4";
import fortmixImg from "../assets/projects/fortmix.jpg";
import fortmixVideo from "../assets/projects/fortmix.mp4";
import lowcarbonImg from "../assets/projects/lowcarbon.jpg";
import lowcarbonVideo from "../assets/projects/lowcarbon.mp4";
import reportImg from "../assets/projects/report-page.jpg";
import reportVideo from "../assets/projects/report-page.mp4";
import type { Dictionary } from "../i18n/LanguageContext";

export interface Project {
  id: string;
  /** Chave do titulo e da descricao nos dicionarios pt.json / en.json. */
  titleKey: keyof Dictionary["projectList"];
  image: string;
  video?: string;
  link: string;
  repo?: string;
  tags: string[];
  year: string;
  /** Trabalho entregue para cliente real (ganha selo no card). */
  isClientWork?: boolean;
}

/**
 * Para adicionar um projeto: coloque a imagem (e o video opcional) em
 * src/assets/projects/, adicione o item aqui e a entrada correspondente em
 * `projectList` nos dois arquivos de traducao. Nenhum JSX precisa mudar.
 *
 * Os videos de preview sao gravacoes automatizadas do site no ar — ver o README
 * para o procedimento.
 */
export const projects: Project[] = [
  {
    id: "lowcarbon",
    titleKey: "lowcarbon",
    image: lowcarbonImg,
    video: lowcarbonVideo,
    link: "https://lowcarbonfuture.com.br/",
    tags: ["React", "TypeScript", "Tailwind", "Cloudflare Workers"],
    year: "2026",
    isClientWork: true,
  },
  {
    id: "analog",
    titleKey: "analog",
    image: analogImg,
    video: analogVideo,
    link: "https://analognostalgic.netlify.app/",
    repo: "https://github.com/denisluft8/fotos-analogicas",
    tags: ["React", "TypeScript", "styled-components"],
    year: "2023",
    isClientWork: true,
  },
  {
    id: "report",
    titleKey: "report",
    image: reportImg,
    video: reportVideo,
    link: "https://denisluft8.github.io/report-page/",
    repo: "https://github.com/denisluft8/report-page",
    tags: ["React", "Data viz", "JSON-driven"],
    year: "2023",
    isClientWork: true,
  },
  {
    id: "decaltak",
    titleKey: "decaltak",
    image: decaltakImg,
    video: decaltakVideo,
    link: "https://denisluft8.github.io/decaltak/",
    repo: "https://github.com/denisluft8/decaltak",
    tags: ["React", "TypeScript", "Landing Page", "Redesign 2026"],
    year: "2026",
    isClientWork: true,
  },
  {
    id: "fortmix",
    titleKey: "fortmix",
    image: fortmixImg,
    video: fortmixVideo,
    link: "https://denisluft8.github.io/fortmix/",
    repo: "https://github.com/denisluft8/fortmix",
    tags: ["React", "TypeScript", "Landing Page"],
    year: "2023",
  },
  {
    id: "aulastube",
    titleKey: "aulastube",
    image: aulastubeImg,
    video: aulastubeVideo,
    link: "https://denisluft8.github.io/rarotube/",
    repo: "https://github.com/denisluft8/rarotube",
    tags: ["React", "TypeScript", "SPA", "styled-components"],
    year: "2023",
  },
];
