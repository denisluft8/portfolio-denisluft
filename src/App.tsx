import { Header } from "./components/Header";
import { LanguageProvider } from "./i18n/LanguageContext";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
import { GlobalStyle } from "./styles/globalStyles";

/**
 * Ordem pensada para conversão: quem chega vê a proposta, o que pode contratar
 * e a prova de que funciona, antes da biografia.
 */
export default function App() {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
