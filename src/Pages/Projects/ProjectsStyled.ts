import styled from "styled-components";

export const ProjectStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 10%;
  padding-right: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 60px;
  }
  @media (max-width: 1120px) {
    height: fit-content;
  }
`;

export const ImgContainer = styled.a`
  height: 300px;
  padding: 8px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  & > p {
    font-size: 24px;
    position: absolute;
    color: white;
    opacity: 0;
    transition: 0.5s;
    height: fit-content;
  }
  &:hover {
    & > p {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: 24px;
      background-color: #632038;
      opacity: 0.95;
    }
  }

  & > img {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: fit-content;
    position: static;
    flex-direction: column;
    text-decoration: none;
    background-color: #632038;

    & > p {
      position: static;
      opacity: 1;
    }

    & > img {
      height: 260px;
    }
  }
  
`;
