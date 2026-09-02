import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Card, VisuallyHidden } from "./ui/primitives";
import { useAutoPreview } from "../hooks/useAutoPreview";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";
import type { Project } from "../data/projects";

const Wrapper = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  transition: transform 0.28s ease, border-color 0.28s ease,
    box-shadow 0.28s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-4px);
    border-color: ${theme.color.accent};
    box-shadow: ${theme.shadow.lift};
  }
`;

const Media = styled.div`
  position: relative;
  aspect-ratio: 16 / 11;
  background: #0a0d14;
  overflow: hidden;

  img,
  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const PlayingMedia = styled(Media)<{ $playing: boolean }>`
  video {
    opacity: ${(p) => (p.$playing ? 1 : 0)};
  }
`;

const Badge = styled.span`
  position: absolute;
  top: ${theme.space(3)};
  left: ${theme.space(3)};
  z-index: 2;
  padding: 4px 10px;
  border-radius: ${theme.radius.pill};
  background: rgba(99, 32, 56, 0.9);
  border: 1px solid rgba(224, 112, 143, 0.45);
  color: #ffd9e3;
  font-family: ${theme.font.mono};
  font-size: ${theme.size.xs};
  letter-spacing: 0.06em;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space(3)};
  padding: ${theme.space(6)};
  flex: 1;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.space(3)};
`;

const Title = styled.h3`
  font-size: ${theme.size.lg};
  color: ${theme.color.text};
`;

/** Cobre o card inteiro, tornando toda a área clicável sem aninhar links. */
const StretchedLink = styled.a`
  color: inherit;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  &:hover {
    color: ${theme.color.accentStrong};
  }
`;

const Year = styled.span`
  font-family: ${theme.font.mono};
  font-size: ${theme.size.xs};
  color: ${theme.color.textFaint};
  flex: none;
`;

const Description = styled.p`
  font-size: ${theme.size.sm};
  color: ${theme.color.textMuted};
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space(2)};
  list-style: none;
  margin: auto 0 0;
  padding: ${theme.space(4)} 0 0;

  li {
    padding: 3px 10px;
    border: 1px solid ${theme.color.border};
    border-radius: ${theme.radius.pill};
    font-family: ${theme.font.mono};
    font-size: ${theme.size.xs};
    color: ${theme.color.textFaint};
  }
`;

const RepoLink = styled.a`
  position: relative;
  z-index: 2;
  align-self: flex-start;
  font-family: ${theme.font.mono};
  font-size: ${theme.size.xs};
  color: ${theme.color.accent};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: currentColor;
  }
`;

export const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const copy = t.projectList[project.titleKey];

  // No celular não há hover: o preview começa sozinho quando o card fica em tela
  const autoPlay = useAutoPreview(cardRef);

  const start = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setIsPlaying(true);
    // play() rejeita se o navegador bloquear autoplay — silenciamos e ficamos na imagem
    void video.play().catch(() => setIsPlaying(false));
  }, []);

  const stop = useCallback(() => {
    const video = videoRef.current;
    setIsPlaying(false);
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    if (!project.video) return;
    if (autoPlay) start();
    else stop();
  }, [autoPlay, project.video, start, stop]);

  return (
    <Wrapper
      as="article"
      ref={cardRef}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
    >
      <PlayingMedia $playing={isPlaying}>
        {project.isClientWork && <Badge>{t.projects.clientBadge}</Badge>}
        <img
          src={project.image}
          alt={`${copy.title} — ${copy.description}`}
          loading="lazy"
          decoding="async"
        />
        {project.video && (
          /* preload="none": os bytes do vídeo só saem da rede quando dá play */
          <video
            ref={videoRef}
            src={project.video}
            preload="none"
            muted
            loop
            playsInline
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
      </PlayingMedia>

      <Body>
        <TitleRow>
          <Title>
            <StretchedLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.title}
              <VisuallyHidden>
                {" "}
                — {t.projects.viewLive} ({t.projects.opensInNewTab})
              </VisuallyHidden>
            </StretchedLink>
          </Title>
          <Year>{project.year}</Year>
        </TitleRow>

        <Description>{copy.description}</Description>

        <Tags>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </Tags>

        {project.repo && (
          <RepoLink
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.projects.viewCode} ↗
          </RepoLink>
        )}
      </Body>
    </Wrapper>
  );
};
