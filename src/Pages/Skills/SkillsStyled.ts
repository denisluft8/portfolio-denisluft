import styled from "styled-components";

export const SkillsStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: white;

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    margin-bottom: 80px;
  }
`;
