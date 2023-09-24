import { Outlet } from "react-router-dom";
import "./App.css";
import CarouselComponent from "./bootstrap_components/CarouselComponent";
import NavbarComponent from "./bootstrap_components/NavbarComponent";


function App() {
  return (
    <div className="app_container">
      <NavbarComponent />
      <CarouselComponent />
      <Outlet />
    </div>
  );
}

export default App;
