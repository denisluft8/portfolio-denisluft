import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  background: rgba(100, 100, 100, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  height: 52px;
  top: 0;
  left: 0;
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  color: #e5e7eb;

  & > li {
    list-style: none;
    text-decoration: none;

    & > a {
      font-size: 18px;
      color: inherit;
      text-decoration: none;
    }
  }
`;
