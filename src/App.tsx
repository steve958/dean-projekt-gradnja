import { Outlet } from "react-router-dom";
import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import NavbarComponent from "./components/NavbarComponent";
import CardComponents from "./components/CardComponents";
import SpecialOfferComponent from "./components/SpecialOfferComponent";


function App() {
  return (
    <div className="app_container">
      <NavbarComponent />
      <CarouselComponent />
      <CardComponents />
      <SpecialOfferComponent />
      <Outlet />
    </div>
  );
}

export default App;
