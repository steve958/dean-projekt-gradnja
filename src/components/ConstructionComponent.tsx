import { Container, Row, Col, Image } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import construction1 from "../assets/construction/construction1.jpg";
import construction2 from "../assets/construction/construction2.jpg";
import construction3 from "../assets/construction/construction3.jpg";
import construction4 from "../assets/construction/construction4.jpg";
import construction5 from "../assets/construction/construction5.jpg";
import construction6 from "../assets/construction/construction6.jpg";
import construction7 from "../assets/construction/construction7.jpg";
import construction8 from "../assets/construction/construction8.jpg";
import construction9 from "../assets/construction/construction9.jpg";
import construction10 from "../assets/construction/construction10.jpg";
import construction11 from "../assets/construction/construction11.jpg";
import construction12 from "../assets/construction/construction12.jpg";

const ConstructionComponent = () => {
    const selectedLanguage = useAppSelector(
        (state: RootState) => state.language.value
    );

    const array = [
        construction1,
        construction2,
        construction3,
        construction4,
        construction5,
        construction6,
        construction7,
        construction8,
        construction9,
        construction10,
        construction11,
        construction12,
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <div className="card-header p-0">
                        <div className="text-center p-4">
                            <h3>
                                {selectedLanguage === "English"
                                    ? "Residential construction"
                                    : "Izgradnja objekata"}
                            </h3>
                        </div>
                    </div>
                    <p>
                        {selectedLanguage === "English"
                            ? "Our company is dedicated to delivering high-quality residential construction services, tailored to meet the unique needs and aspirations of our clients. With a passion for crafting exceptional living spaces, we combine innovative design, superior craftsmanship, and attention to detail to bring your dream home to life."
                            : "Naša tvrtka posvećena je pružanju visokokvalitetnih usluga stambene izgradnje, prilagođenih jedinstvenim potrebama i težnjama naših klijenata. Sa strašću za stvaranjem iznimnih životnih prostora, kombiniramo inovativni dizajn, vrhunsku izradu i pažnju posvećenu detaljima kako bismo oživjeli vaš dom iz snova."}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "From custom-built homes to renovations and additions, we offer a comprehensive range of residential construction solutions. Our experienced team of architects, engineers, and builders collaborates closely with clients to ensure that every aspect of the project aligns with their vision and budget. We prioritize open communication and transparency, keeping our clients informed at every stage of the construction process."
                            : "Od kuća izgrađenih po narudžbi do renoviranja i dogradnje, nudimo sveobuhvatan raspon rješenja za stambenu izgradnju. Naš iskusni tim arhitekata, inženjera i građevinara blisko surađuje s klijentima kako bi osigurali da je svaki aspekt projekta usklađen s njihovom vizijom i proračunom. Prioritet nam je otvorena komunikacija i transparentnost, obavještavajući naše klijente u svakoj fazi procesa izgradnje."}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "With a commitment to using the finest materials and the latest construction techniques, we strive to create homes that are not only aesthetically stunning but also structurally sound and built to last. Our dedication to excellence and customer satisfaction has established us as a trusted partner for realizing your residential construction dreams."
                            : "Uz predanost korištenju najfinijih materijala i najnovijih tehnika gradnje, nastojimo stvoriti domove koji nisu samo estetski zadivljujući, već su i strukturno zdravi i izgrađeni da traju. Naša predanost izvrsnosti i zadovoljstvu kupaca postavila nas je kao pouzdanog partnera za ostvarenje vaših snova o stambenoj izgradnji."}
                    </p>
                </Col>
            </Row>
            <Row>
                {array.map((image: string) => {
                    return (
                        <Col key={Math.random()} xs={6} md={4} lg={3} className="mb-4 img-fluid">
                            <Image src={image} thumbnail style={{ width: '100%', height: '100%' }} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ConstructionComponent;
