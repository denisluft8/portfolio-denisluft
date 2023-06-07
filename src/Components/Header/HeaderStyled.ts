import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const HeaderContainer = styled.div<{
  isHidden: boolean;
  backgroundTransparent: boolean;
  display?: string;
}>`
  position: fixed;
  background: ${(props) =>
    props.backgroundTransparent ? "transparent" : "rgba(100, 100, 100, 0.1)"};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  top: 0;
  transition: transform 0.3s ease, background-color 1.2s ease;
  transform: translateY(${(props) => (props.isHidden ? "-100%" : "0")});
  width: 100%;
  z-index: 998;

  & > ul {
    list-style: none;
    margin-right: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    font-weight: bold;

    & > li {
      height: auto;
      & > a {
        transition: 0.3s ease;
        font-size: 20px;
        color: #4767a4;
        text-decoration: none;

        &:hover {
          color: #7f2948;
          transition: 0.5s ease;
        }
      }
    }
  }
  @media (max-width: 500px) {
    transform: none;
    width: 80%;
    right: 0;
    background: #111111d9;
    height: 100%;
    display: ${(props) => props.display};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 200px;
    transition: width 0.35s ease-in-out;
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
    overflow: hidden;

    & > ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: -10px;

      & > li {
        & > a {
          font-size: 24px;
          color: #4767a4;
          text-decoration: none;

          &:hover {
            color: #7f2948;
            transition: 0.5s ease;
          }
        }
      }
    }
  }
`;

interface BurguerProps {
  transform1?: string;
  transform2?: string;
  opacity?: string;
}

export const BurguerContainer = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: inline-block;
    cursor: pointer;
    position: fixed;
    right: 0;
    top: 0;
    margin-top: 12px;
    padding-right: 10px;
    z-index: 999;
  }
`;
export const Burguer1 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #4767a4;

    margin: 6px 0;
    transition: 0.4s;
    transform: ${(props) => props.transform1};
  }
`;
export const Burguer2 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #4767a4;
    margin: 6px 0;
    transition: 0.4s;
    opacity: ${(props) => props.opacity};
  }
`;
export const Burguer3 = styled.div<BurguerProps>`
  @media (max-width: 500px) {
    width: 35px;
    height: 5px;
    background-color: #4767a4;
    margin: 6px 0;
    transition: 0.4s;
    transform: ${(props) => props.transform1};
  }
`;
