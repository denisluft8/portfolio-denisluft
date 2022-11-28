import { Header } from "./Components/Header/Header";
import { About, Contact, Home, Projects, Skills } from "./Pages";
import { GlobalStyle } from "./Styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </>
  );
}

export default App;
