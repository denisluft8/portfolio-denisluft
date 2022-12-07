import styled, { keyframes } from "styled-components";

export const ContactStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 40px;
  }

  @media (max-width: 1120px) {
    height: fit-content;
    flex-direction: column;
    margin-bottom: 80px;
    margin-top: 60px;
  }
`;

export const ContactLinks = styled.div`
  border: 6px solid #632038;
  height: 500px;
  width: 450px;
  position: relative;

  & > h2 {
    color: white;
    font-size: 80px;
    height: fit-content;
    margin: 20px;
    margin-left: 28px;
  }

  @media (max-width: 1120px) {
    width: 350px;
    height: 350px;
    background-color: #020202;

    & > h2 {
      font-size: 48px;
    }
  }
`;

export const IconsDiv = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  height: fit-content;
  margin: 16px;
  & > a {
    margin: 12px;

    &:hover {
      opacity: 0.8;
    }

    & > img {
      height: 100px;
    }
  }

  @media (max-width: 1120px) {
    & > a > img {
      height: 70px;
    }
  }
`;
export const FadeInAnimation = keyframes`  
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

export const InputContainer = styled.div`
  background-color: #632038;
  height: 512px;
  width: 450px;

  & > form {
    display: flex;
    gap: 40px;
    justify-content: center;
    flex-direction: column;
    height: 472px;
    margin: 20px;
    margin-right: 26px;
    outline: none;

    & > input {
      height: 40px;
      border: none;
      padding: 10px;
      background-color: #f3f4f6;
      font-size: 20px;
    }

    & > textarea {
      background-color: #f3f4f6;
      border: none;
      padding: 8px;
      height: 160px;
      font-size: 20px;
    }

    & > textarea::placeholder,
    input::placeholder {
      font-size: 20px;
      font-family: "Courier New", Courier, monospace;
    }

    & > textarea:focus,
    input:focus {
      outline: none;
    }

    & > button {
      height: 50px;
      font-size: 20px;
      font-family: "Courier New", Courier, monospace;
    }
  }
  & > span {
    padding-top: 30px;
    color: #f3f4f6;
    animation-name: ${FadeInAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @media (max-width: 1120px) {
    width: 362px;
    margin-bottom: 40px;
    & > form {
      margin: 0;
      padding: 6px;
    }
  }
`;
