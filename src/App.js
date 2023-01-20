import "./App.css";
import About from "./Components/About/About";
import Auction from "./Components/Auction/Auction";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Writers from "./Components/Writers/writers";

function App() {
  return (
    <div className="App c-wrapper d-col">
      <div className="container">
        <Header />
        <Hero />
      </div>
      <About />
      <div className="container">
        <Auction />
        <Writers />
      </div>
    </div>
  );
}

export default App;
