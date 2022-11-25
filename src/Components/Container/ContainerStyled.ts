import styled from "styled-components";
import { ContainerProps } from "./Container";

export const ContainerStyled = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: rgb(89, 29, 50, 0.6);
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2),
    inset 1px 1px 0px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & > h2 {
    font-weight: normal;
    height: fit-content;
    margin-bottom: 32px;
  }
`;

export const ChildrenContainer = styled.div<ContainerProps>`
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
