import css from "../assets/css-3.svg";
import html from "../assets/html-1.svg";
import js from "../assets/logo-javascript.svg";
import react from "../assets/react-2.svg";
import storybook from "../assets/storybook.svg";
import styledComponents from "../assets/styled-components-1.svg";
import tailwind from "../assets/tailwindcss.svg";
import ts from "../assets/typescript.svg";
import vue from "../assets/vue.svg";
import type { TechIconName } from "../components/ui/techIcons";
import type { Dictionary } from "../i18n/LanguageContext";

export interface Skill {
  name: string;
  /** Logo oficial em arquivo SVG, para as marcas que ja estavam no repositorio. */
  logo?: string;
  /** Icone desenhado inline em src/components/ui/techIcons.tsx. */
  icon?: TechIconName;
}

export interface SkillGroup {
  id: keyof Dictionary["skillGroups"];
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    items: [
      { name: "TypeScript", logo: ts },
      { name: "JavaScript", logo: js },
      { name: "React", logo: react },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue", logo: vue },
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
    ],
  },
  {
    id: "styling",
    items: [
      { name: "Tailwind CSS", logo: tailwind },
      { name: "styled-components", logo: styledComponents },
      { name: "Storybook", logo: storybook },
      { name: "Design Systems", icon: "designSystem" },
      { name: "a11y / WCAG", icon: "a11y" },
    ],
  },
  {
    id: "data",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "GraphQL / Apollo", icon: "graphql" },
      { name: "REST APIs", icon: "rest" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "TanStack Query", icon: "tanstack" },
      { name: "Zustand", icon: "zustand" },
    ],
  },
  {
    id: "tooling",
    items: [
      { name: "Vite", icon: "vite" },
      { name: "Git / GitHub", icon: "git" },
      { name: "GitHub Actions", icon: "githubActions" },
      { name: "CI/CD", icon: "cicd" },
      { name: "Electron.js", icon: "electron" },
      { name: "Testes (unit / integração)", icon: "testing" },
      { name: "Automação de code review com IA", icon: "aiReview" },
      { name: "Agile / Scrum", icon: "agile" },
      { name: "Figma", icon: "figma" },
    ],
  },
];
