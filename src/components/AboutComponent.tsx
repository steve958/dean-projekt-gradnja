import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/logoAbout.png";
import "./AboutComponent.css";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

const AboutComponent = () => {
    const selectedLanguage = useAppSelector(
        (state: RootState) => state.language.value
    );
    return (
        <Container>
            <div className="card-header p-0">
                <div className="text-center p-4">
                    <h3>{selectedLanguage === "English" ? "About Us" : "O Nama"}</h3>
                    <p className="m-0">
                        {selectedLanguage === "English"
                            ? "Closer look at our company"
                            : "Bolje upoznajte našu tvrtku"}
                    </p>
                </div>
            </div>
            <Row className="about_row">
                <Col>
                    <p style={{ marginTop: "30px" }}>
                        {selectedLanguage === "English"
                            ? "We are a company with 10 years of work experience in the field of construction and execution of all construction works. For the last 10 years, we have been successfully performing work on facilities in the north of Germany, having built a large number of schools, hospitals, housing facilities... The highest level of construction quality according to German and EU standards. From now on in Croatia and throughout Dalmatia. Regardless of the scope of the project, we are committed to delivering high quality work that meets the needs and expectations of our clients."
                            : "Mi smo tvrtka sa 10 godina radnog iskustva u području građenja i izvođenja svih građevinskih radova. Posljednjih 10 godina uspješno izvodimo radove na objektima na sjeveru Njemačke izgradivši velikibroj škola, bolnica, stambenih objekata... Najviša razina kvalitete gradnje po njemačkim i EU standardima. Od sada i u Hrvatskoj širom Dalmacije. Bez obzira na opseg projekta, predani smo isporuci visokokvalitetnog rada koji zadovoljava potrebe i očekivanja naših klijenata."}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "At our company, we know that construction can be a complex and challenging process. That's why we're committed to staying organized and efficient and adapting to changing conditions as they arise. We also place a strong emphasis on safety, following all necessary regulations to ensure the well-being of our team and those around us. Overall, our goal is to contribute to the growth and development of the communities in which we work and to play a key role in the economy."
                            : "U našoj tvrtki znamo da izgradnja može biti složen i izazovan proces. Zato smo posvijećeni tome da ostanemo organizirani iučinkoviti te da se prilagođavamo promjenjivim uvjetima kako se pojavljuju. Također stavljamo snažan naglasak na sigurnost, poštujući sve potrebne propise kako bismo osigurali dobrobit našegtima i onih oko nas. Općenito, naš je cilj pridonijeti rastu irazvoju zajednica u kojima radimo te igrati ključnu ulogu u gospodarstvu."}
                    </p>
                </Col>
                <Col>
                    <Image src={logo} className="about_logo" />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutComponent;
