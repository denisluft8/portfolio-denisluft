import styled from "styled-components";
import img from "../../assets/bg.png";

export const HomeStyled = styled.div`
  background: url(${img}) no-repeat;
  background-position-x: 20%;
  height: calc(100% - 50px);
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const NameCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 13%;
  color: #d1d5db;

  & > h1 {
    margin: 0;
    height: fit-content;
    font-size: 5.5em;
  }
  & > h2 {
    font-size: 1.7em;
    height: fit-content;
    margin: 0;
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    align-items: center;
    margin: 0;
    & > h1 {
      font-size: 4em;
    }
  }
`;
