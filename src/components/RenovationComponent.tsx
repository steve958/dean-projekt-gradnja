import { Container, Row, Col, Image } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import renovation1 from "../assets/renovation/renovation1.jpg";
import renovation2 from "../assets/renovation/renovation2.jpg";
import renovation3 from "../assets/renovation/renovation3.jpg";
import renovation4 from "../assets/renovation/renovation4.jpg";
import renovation5 from "../assets/renovation/renovation5.jpg";
import renovation6 from "../assets/renovation/renovation6.jpg";
import renovation7 from "../assets/renovation/renovation7.jpg";
import renovation8 from "../assets/renovation/renovation8.jpg";
import renovation9 from "../assets/renovation/renovation9.jpg";
import renovation10 from "../assets/renovation/renovation10.jpg";
import renovation11 from "../assets/renovation/renovation11.jpg";
import renovation12 from "../assets/renovation/renovation12.jpg";
import { useEffect } from "react";

const RenovationComponent = () => {
    const selectedLanguage = useAppSelector(
        (state: RootState) => state.language.value
    );

    useEffect(() => {
        const element = document.getElementsByClassName("headings");
        element[0]?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [])

    const array = [
        renovation1,
        renovation2,
        renovation3,
        renovation4,
        renovation5,
        renovation6,
        renovation7,
        renovation8,
        renovation9,
        renovation10,
        renovation11,
        renovation12,
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <div className="card-header p-0">
                        <div className="text-center p-4 headings">
                            <h3>
                                {selectedLanguage === "English"
                                    ? "Renovation and Adaptation"
                                    : "Renoviranje i adaptacija"}
                            </h3>
                        </div>
                    </div>
                    <p>
                        {selectedLanguage === "English"
                            ? "Our company specializes in providing comprehensive renovation and adaptation services tailored to meet the evolving needs of our clients. With a focus on both residential and commercial properties, we combine innovation and expertise to breathe new life into existing spaces."
                            : "Naša tvrtka specijalizirana je za pružanje sveobuhvatnih usluga obnove i adaptacije prilagođenih rastućim potrebama naših klijenata. S fokusom na stambene i poslovne nekretnine, kombiniramo inovacije i stručnost kako bismo udahnuli novi život postojećim prostorima"}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "Whether it's a complete overhaul of a property or a selective adaptation to accommodate specific requirements, our team of skilled professionals works diligently to ensure that every project is executed with precision and attention to detail. We understand the importance of maintaining the structural integrity of buildings while incorporating modern design elements and functionality."
                            : "Bilo da se radi o kompletnom remontu nekretnine ili selektivnom prilagodbu specifičnim zahtjevima, naš tim vještih profesionalaca marljivo rade kako bi osigurali da svaki projekt bude izvedeno s preciznošću i pažnjom za detalje. Razumijemo važnost održavanja strukturalnog integriteta zgrada dok uključujemo elemente modernog dizajna i funkcionalnosti."}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "From concept development to the final execution, we collaborate closely with our clients to understand their vision and deliver results that exceed expectations. Our commitment to quality craftsmanship, adherence to timelines, and transparent communication sets us apart as a trusted partner in realizing your renovation and adaptation goals."
                            : "Od razvoja koncepta do konačne izvedbe, surađujemo blisko s našim klijentima kako bismo razumjeli njihovu viziju i isporučili je rezultate koji premašuju očekivanja. Naša predanost kvaliteti majstorstvo, poštivanje rokova i transparentna komunikacija izdvaja nas kao pouzdanog partnera u realizaciji vaše obnove i ciljevi prilagodbe."}
                    </p>
                </Col>
            </Row>
            <Row>
                {array.map((image: string) => {
                    return (
                        <Col key={Math.random()} xs={6} md={4} lg={3} className="mb-4">
                            <Image src={image} thumbnail />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default RenovationComponent;
