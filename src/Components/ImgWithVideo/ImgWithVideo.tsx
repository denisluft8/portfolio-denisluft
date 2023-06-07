import { useState } from "react";
import { styled } from "styled-components";
import { ImgContainer, VideoContainer } from "./ImgWithVideoStyles";

interface ImgWithVideoProps {
  img: string;
  video: string;
  link: string;
  description: string;
}



export const ImgWithVideo = ({
  img,
  video,
  link,
  description,
}: ImgWithVideoProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <ImgContainer
        href={link}
        target="_blank"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered ? (
          <VideoContainer>
            <video src={video} autoPlay loop muted />
          </VideoContainer>
        ) : (
          <img src={img} alt="Project Image" />
        )}
        <p>{description}</p>
      </ImgContainer>
    </>
  );
};
