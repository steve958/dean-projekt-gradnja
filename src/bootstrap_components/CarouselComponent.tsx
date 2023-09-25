import "./CarouselComponent.css";
import Carousel from "react-bootstrap/Carousel";
import slika1 from "../assets/realestate1.jpg";
import slika2 from "../assets/renovation1.jpg";
import slika3 from "../assets/construction1.jpg";

export default function CarouselComponent() {
    return (
        <Carousel className="carousel">
            {/* Slide 1 */}
            <Carousel.Item className="carousel_item">
                <img className="d-block w-100" src={slika2} alt="Second slide" />

                <Carousel.Caption className="caption_container">
                    <h3>RENOVATION AND ADAPTATION</h3>
                    <p>
                        Our team of skilled workers is dedicated to surpassing your
                        expectations, making your home an expression of your unique style.
                    </p>
                </Carousel.Caption>
                {/* Slide 2 */}
            </Carousel.Item>
            <Carousel.Item className="carousel_item">
                <img className="d-block w-100" src={slika1} alt="First slide" />
                <Carousel.Caption className="caption_container">
                    <h3>REAL ESTATE SALE</h3>
                    <p>
                        We specialize in connecting you with the perfect property, whether
                        it's your first home, an investment opportunity, or a luxurious
                        retreat.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item className="carousel_item">
                <img className="d-block w-100" src={slika3} alt="Third slide" />

                <Carousel.Caption className="caption_container">
                    <h3>RESIDENTIAL CONSTRUCTION</h3>
                    <p>
                        Build your future with Dean Projekt Gradnja, where quality meets
                        innovation.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
