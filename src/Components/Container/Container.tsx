import { ReactNode } from "react";
import { ChildrenContainer, ContainerStyled } from "./ContainerStyled";

export interface ContainerProps {
  children: ReactNode;
  height?: string;
  title?: string;
  width?: string;
}

export const Container = ({
  children,
  height = "500px",
  title,
  width = "350px",
}: ContainerProps) => {
  return (
    <ContainerStyled width={width} height={height}>
      <h2>{title}</h2>
      <ChildrenContainer>{children}</ChildrenContainer>
    </ContainerStyled>
  );
};
