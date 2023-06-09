import styled from "styled-components";

export const ProjectStyled = styled.div`
  min-height: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 20px;
  background: #eee;
  padding: 100px 10%;

  @media (max-width: 1066px) {
    padding: 100px 0px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 60px;
    width: 100%;
    padding: 100px 0px;
  }
  @media (max-width: 1120px) {
    height: fit-content;
  }
`;
