import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  background: rgba(100, 100, 100, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  height: 52px;
  z-index: 99;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    justify-content: center;
    align-content: center;
    padding: 0;
    margin: 0;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 24px;
  color: #e5e7eb;

  & > li {
    list-style: none;
    text-decoration: none;

    & > a {
      font-size: 20px;
      color: inherit;
      text-decoration: none;

      &:hover {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding: 0;
    & > li {
      & > a {
        font-size: 16px;
      }
    }
  }
`;
