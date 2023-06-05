import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Check } from "./components/Check";
import { Trade } from "./components/Trade";
import { Market } from "./components/Market";
import { Detailed } from "./components/Detailed";
import { Grow } from "./components/Grow";
import Hero from "./components/Hero";
import Choose from "./components/Choose";
import Digital from "./components/Digital";
import Start from "./components/Start";
import Foot from "./components/Foot";
import Cryptocurrencies from "./components/Cryptocurrencies";
function App() {
  AOS.init({ once: true, disable: "mobile" });
  return (
    <div className="App">
      <Hero />
      <Digital />
      <Choose />
      <Check />
      <Trade />
      <Cryptocurrencies />
      <Market />
      <Detailed />
      <Grow />
      <Start />
      <Foot />
    </div>
  );
}

export default App;
