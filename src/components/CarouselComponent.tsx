import "./CarouselComponent.css";
import Carousel from "react-bootstrap/Carousel";
import slika1 from "../assets/realestate1.jpg";
import slika2 from "../assets/renovation1.jpg";
import slika3 from "../assets/construction1.jpg";
import { useAppSelector } from "../app/hooks";
import { useNavigate } from "react-router-dom";

export default function CarouselComponent() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const selectedLanguage = useAppSelector((state: any) => state.language) as string

    const navigate = useNavigate()

    return (
        <Carousel className="carousel">
            {/* Slide 1 */}
            <Carousel.Item className="carousel_item">
                <img className="d-block w-100" src={slika2} alt="Second slide" />

                <Carousel.Caption className="caption_container" onClick={() => navigate("/renovation")}>
                    <h3>
                        {selectedLanguage === "English"
                            ? "RENOVATION AND ADAPTATION"
                            : "RENOVIRANJE I ADAPTACIJA"}
                    </h3>
                    <p>
                        {selectedLanguage === "English"
                            ? "Our team of skilled workers is dedicated to surpassing your expectations, making your home an expression of your unique style."
                            : "Naš tim kvalificiranih radnika posvećen je prevazilaženju vaših očekivanja, čineći vaš dom izrazom vašeg jedinstvenog stila."}
                    </p>
                </Carousel.Caption>
                {/* Slide 2 */}
            </Carousel.Item>
            <Carousel.Item className="carousel_item">
                <img className="d-block w-100" src={slika1} alt="First slide" />
                <Carousel.Caption className="caption_container" onClick={() => navigate("/realestate")}>
                    <h3>
                        {selectedLanguage === "English"
                            ? "REAL ESTATE SALE"
                            : "PRODAJA NEKRETNINA"}
                    </h3>
                    <p>
                        {selectedLanguage === "English"
                            ? "We specialize in connecting you with the perfect vacation property, whether it's your first home, an investment opportunity, or a luxurious retreat."
                            : "Specijalizirani smo za povezivanje vas sa savršenim mjestom za odmor, bilo da to je vaš prvi dom, prilika za ulaganje ili luksuzna vikendica"}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item className="carousel_item">
                <img className="d-block w-100" src={slika3} alt="Third slide" />

                <Carousel.Caption className="caption_container" onClick={() => navigate("/construction")}>
                    <h3>
                        {selectedLanguage === "English"
                            ? "RESIDENTIAL CONSTRUCTION"
                            : "IZGRADNJA OBJEKATA"}
                    </h3>
                    <p>
                        {selectedLanguage === "English"
                            ? "Build your future with DEAN PROJEKT GRADNJA, where quality meets innovation."
                            : "Gradite svoju budućnost uz DEAN PROJEKT GRADNJU, gdje se susreću kvaliteta i inovacija."}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
