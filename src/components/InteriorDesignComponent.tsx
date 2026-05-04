import { Container, Row, Col, Image } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { useEffect } from "react";
import img1 from "../assets/renovation/renovation1.jpg";
import img2 from "../assets/renovation/renovation2.jpg";
import img3 from "../assets/renovation/renovation3.jpg";
import img4 from "../assets/renovation/renovation4.jpg";
import img5 from "../assets/renovation/renovation5.jpg";
import img6 from "../assets/renovation/renovation6.jpg";
import img7 from "../assets/renovation/renovation7.jpg";
import img8 from "../assets/renovation/renovation8.jpg";

const InteriorDesignComponent = () => {
    const selectedLanguage = useAppSelector(
        (state: RootState) => state.language.value
    );

    useEffect(() => {
        const element = document.getElementsByClassName("headings");
        element[0]?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, []);

    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    return (
        <Container>
            <Row>
                <Col>
                    <div className="card-header p-0">
                        <div className="text-center p-4 headings">
                            <h3>
                                {selectedLanguage === "English"
                                    ? "Interior Design"
                                    : "Uređenje interijera"}
                            </h3>
                        </div>
                    </div>
                    <p>
                        {selectedLanguage === "English"
                            ? "We design interiors that balance aesthetics, comfort and functionality. Whether you are furnishing a new home, refreshing your apartment, or styling a commercial space, our team turns your ideas into thoughtfully composed environments that feel personal and inviting."
                            : "Dizajniramo interijere koji ujedinjuju estetiku, udobnost i funkcionalnost. Bez obzira opremate li novi dom, osvježavate stan ili uređujete poslovni prostor, naš tim vaše ideje pretvara u promišljeno osmišljene prostore koji djeluju osobno i toplo."}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "From the first concept and mood board to material selection, lighting, custom furniture and final styling, we coordinate every detail. Our goal is to create spaces with a clear identity, well-considered ergonomics and finishes that stand the test of time."
                            : "Od prvog koncepta i mood boarda do odabira materijala, rasvjete, namještaja po mjeri i završnog stiliziranja, koordiniramo svaki detalj. Cilj nam je stvoriti prostore jasnog identiteta, promišljene ergonomije i obrade koja traje."}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "We work hand in hand with our clients, listen carefully to their vision and translate it into design decisions that respect both budget and lifestyle. The result is an interior that is functional in everyday life and inspiring at every glance."
                            : "Sa svakim klijentom radimo blisko, pažljivo slušamo njegovu viziju i pretvaramo je u dizajnerska rješenja koja poštuju i proračun i stil života. Rezultat je interijer koji je funkcionalan u svakodnevnom životu, a inspirativan na svaki pogled."}
                    </p>
                </Col>
            </Row>
            <Row>
                {images.map((image: string) => (
                    <Col
                        key={image}
                        xs={6}
                        md={4}
                        lg={3}
                        className="mb-4 img-fluid"
                    >
                        <Image
                            src={image}
                            thumbnail
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default InteriorDesignComponent;
