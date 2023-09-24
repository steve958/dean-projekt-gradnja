import { Outlet } from "react-router-dom";
import "./App.css";
import CarouselComponent from "./bootstrap_components/CarouselComponent";

function App() {
  return (
    <div className="app_container">
      <CarouselComponent />
      <Outlet />
    </div>
  );
}

export default App;
