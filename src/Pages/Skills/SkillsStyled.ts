import styled from "styled-components";

export const SkillsStyled = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: white;

  @media (max-width: 1120px) {
    padding: 60px 0px;
    height: fit-content;
    margin-bottom: 80px;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    margin-bottom: 80px;
    margin-top: 60px;
  }
`;

export const ContainerStyled = styled.div`
  width: 350px;
  height: 490px;
  border: 6px solid #632038;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    font-weight: bold;
    font-size: 1.7em;
    height: fit-content;
    color: #632038;
  }

  @media (max-width: 321px) {
    width: 300px;
  }
`;
export const ContainerStyled2 = styled.div`
  width: 350px;
  height: 490px;
  border: 6px solid #4767a4;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    font-weight: normal;
    height: fit-content;
    font-weight: bold;
    font-size: 1.7em;
    height: fit-content;
    color: #4767a4;
  }

  @media (max-width: 321px) {
    height: fit-content;
    width: 300px;
  }
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  & > img {
    height: 70px;
    width: 70px;
  }
  & > p {
    height: fit-content;
  }
`;

export const SoftContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  & > p {
    height: fit-content;
    font-size: 14px;
  }
  & > img {
    height: fit-content;
    width: 70px;
  }
  @media (max-width: 321px) {
    width: 73px;
  }
`;