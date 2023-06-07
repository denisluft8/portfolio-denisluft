import { HomeStyled, NameCard, TypedContainer } from "./HomeStyled";
import Typed from "react-typed";

export const Home = () => {
  return (
    <HomeStyled id="home">
      <NameCard>
        <h1>
          <span>&lt;</span>Dênis Luft
          <span> /&gt;</span>
        </h1>
        <TypedContainer>
          <Typed
            strings={["Desenvolvedor Front-end"]}
            typeSpeed={150}
            backSpeed={50}
            backDelay={5000}
            loop
          />
        </TypedContainer>
      </NameCard>
    </HomeStyled>
  );
};
