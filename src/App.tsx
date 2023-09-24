import { Outlet } from "react-router-dom";
import "./App.css";
import CarouselComponent from "./bootstrap_components/CarouselComponent";
import NavbarComponent from "./bootstrap_components/NavbarComponent";
import logo from './assets/logoM.png'

function App() {
  return (
    <div className="app_container">
      <div className="logo_background">
        <img src={logo} alt="logo" />
      </div>
      <NavbarComponent />
      <CarouselComponent />
      <Outlet />
    </div>
  );
}

export default App;
