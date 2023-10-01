import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <div className="app_container">
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
