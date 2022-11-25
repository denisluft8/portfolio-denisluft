import { Header } from "./Components/Header/Header";
import { About } from "./Pages/About/About";
import { Home } from "./Pages/Home/Home";
import { Skills } from "./Pages/Skills/Skills";
import { GlobalStyle } from "./Styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      <Skills/>
    </>
  );
}

export default App;
