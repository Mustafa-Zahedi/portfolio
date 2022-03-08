import "./App.css";
import { Helmet } from "react-helmet";
import Index from "./components";
import Abilities from "./components/Abilities";
import Portfolio from "./components/portofolio";
import Quote from "./components/quote";

function App() {
  return (
    <main className="App">
      <Helmet>
        <title>Mostapha</title>
      </Helmet>
      <Index />
      <Abilities />
      <Portfolio />
      <Quote />
    </main>
  );
}

export default App;
