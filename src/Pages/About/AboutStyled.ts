import styled from "styled-components";

export const AboutStyled = styled.div`
  height: 100%;
  background-image: linear-gradient(#020202, #632038, #020202);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const ProfileStyled = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
export const AboutContainer = styled.div`
  height: fit-content;
  width: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;

  & > p {
    height: fit-content;
    color: white;
    font-size: 18px;
    margin: 8px;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
