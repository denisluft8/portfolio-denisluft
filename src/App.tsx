import { Header } from "./Components/Header/Header";
import { LanguageProvider } from "./contexts/LanguageContext";
import { About, Contact, Home, Projects, Skills } from "./Pages";
import { GlobalStyle } from "./Styles/globalStyles";

function App() {
  return (
    <>
      <LanguageProvider>
        <GlobalStyle />
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </LanguageProvider>
    </>
  );
}

export default App;
