import { styled } from "styled-components";

interface SectionNameProps {
  text: string;
  color?: string;
}

const SectionNameContainer = styled.div<{ color?: string }>`
  position: absolute;
  display: flex;
  align-items: center;
  height: min-content;
  gap: 12px;
  left: 120px;
  color: ${(props) => props.color || "#fff"};

  @media (max-width: 768px) {
    left: 5px;
  }

  @media (min-width: 1120px) {
    margin-top: 40px;
    left: 300px;
  }
`;

const SectionNameDash = styled.div`
  height: 4px;
  width: 32px;
  background-color: #4767a4;
`;

const SectionNameText = styled.h2``;

export const SectionName = ({ color, text }: SectionNameProps) => {
  return (
    <SectionNameContainer color={color}>
      <SectionNameDash />
      <SectionNameText>{text}</SectionNameText>
    </SectionNameContainer>
  );
};
