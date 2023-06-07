import styled from "styled-components";

export const AboutStyled = styled.section`
  height: fit-content;
  width: 100%;
  background-color: #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0px;

  @media (max-width: 768px) {
    padding: 0px 0px;
  }
`;

export const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 52px;
  background-color: #4767a4;
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
    margin-left: -80px;
  }
`;

export const ProfileStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 18px;
  position: absolute;
  margin-top: 20px;
  margin-left: 24px;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
export const AboutContainer = styled.div`
  height: fit-content;
  /* background-color: white; */
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;

  & > p {
    height: fit-content;
    color: black;
    font-size: 18px;
    margin: 8px;
    text-align: justify;
    padding-left: 12px;
    border-left: 6px solid #4767a4;
  }
`;
