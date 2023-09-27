import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import NavbarComponent from "./components/NavbarComponent";
import SpecialOfferComponent from "./components/SpecialOfferComponent";
import QuoteComponent from "./components/QuoteComponent";
import Footer from "./components/FooterComponent";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Croatian");

  return (
    <div className="app_container">
      <NavbarComponent
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <CarouselComponent selectedLanguage={selectedLanguage} />
      <QuoteComponent selectedLanguage={selectedLanguage} />
      <SpecialOfferComponent selectedLanguage={selectedLanguage} />
      <Footer selectedLanguage={selectedLanguage} />
      <Outlet />
    </div>
  );
}

export default App;
