import styled from "styled-components";

export const SkillsStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: white;

  @media (max-width: 1120px) {
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
