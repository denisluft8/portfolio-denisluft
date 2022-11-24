import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { GlobalStyle } from "./Styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
