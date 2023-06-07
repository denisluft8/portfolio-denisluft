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

export const TypedContainer = styled.div`
  font-size: 2em;
  height: fit-content;
  margin: 0 0 0 28px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin: 0;
    height: 60px;
    text-align: center;
  }
`;

export const NameCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 13%;
  color: #d1d5db;

  & > h1 {
    margin: 0;
    height: fit-content;
    font-size: 5em;

    & > span {
      color: #4767a4;
    }
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
      font-size: 3.5em;
      text-align: center;
    }
    & > h2 {
      text-align: center;
    }
  }
`;
