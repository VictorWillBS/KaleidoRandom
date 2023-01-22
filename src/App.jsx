import { Navbarr } from "./components/Navbarr/navbarr";
import GlobalStyle from "./globalStyle/resetCss";
import { MainPage } from "./pages/mainPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
    </div>
  );
}

export default App;
