import { styled } from "styled-components";

export const ImgContainer = styled.a`
  padding: 8px;
  height: 400px;
  width: 394px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  text-decoration: none;
  background-color: #222;

  & > p {
    font-size: 20px;
    color: white;
  }

  & > img {
    width: 394px;
    height: 270px;
  }

  @media (max-width: 768px) {
    height: fit-content;
    position: static;
    flex-direction: column;
    text-decoration: none;
    height: 400px;
    width: 312px;

    & > p {
      font-size: 1.2em;
    }

    & > img {
      width: 300px;
      height: 244px;
    }
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;

  & > video {
    width: 394px;
    height: 260px;
    object-fit: fill;
  }

  @media (max-width: 768px) {
    & > video {
      width: 300px;
      height: 244px;
      object-fit: fill;
    }
  }
`;
