import { Outlet } from "react-router-dom";
import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import NavbarComponent from "./components/NavbarComponent";
import SpecialOfferComponent from "./components/SpecialOfferComponent";
import QuoteComponent from "./components/QuoteComponent";


function App() {
  return (
    <div className="app_container">
      <NavbarComponent />
      <CarouselComponent />
      <QuoteComponent />
      <SpecialOfferComponent />
      <Outlet />
    </div>
  );
}

export default App;
