import { Outlet } from "react-router-dom";
import "./App.css";
import CarouselComponent from "./bootstrap_components/CarouselComponent";
import NavbarComponent from "./bootstrap_components/NavbarComponent";
import CardComponents from "./bootstrap_components/CardComponents";


function App() {
  return (
    <div className="app_container">
      <NavbarComponent />
      <CarouselComponent />
      <CardComponents />
      <Outlet />
    </div>
  );
}

export default App;
