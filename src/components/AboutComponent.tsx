import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logoAbout.png";
import "./AboutComponent.css";
import { useLang } from "../i18n";

const AboutComponent = () => {
    const { t } = useLang();

    const stats = [
        {
            value: "10+",
            label: t("Years of experience", "Godina iskustva"),
        },
        {
            value: "EU",
            label: t("Construction standards", "Građevinski standardi"),
        },
        {
            value: "DE / HR",
            label: t("Markets we work in", "Tržišta na kojima radimo"),
        },
    ];

    const highlights = [
        {
            title: t("Built for durability", "Građeno da traje"),
            text: t(
                "We use top-grade materials and modern construction techniques so every structure stands the test of time.",
                "Koristimo prvoklasne materijale i moderne tehnike gradnje, kako bi svaki objekt prkosio vremenu."
            ),
        },
        {
            title: t("End-to-end execution", "Od početka do kraja"),
            text: t(
                "From concept and permits to final handover, we handle the entire project under one roof.",
                "Od koncepta i dozvola do predaje ključeva, vodimo cijeli projekt na jednom mjestu."
            ),
        },
        {
            title: t("Transparent communication", "Otvorena komunikacija"),
            text: t(
                "Clear timelines, honest budgets and regular updates so you always know where the project stands.",
                "Jasni rokovi, iskreni proračun i redoviti izvještaji – uvijek znate u kojoj je fazi projekt."
            ),
        },
    ];

    return (
        <Container className="about_container">
            <header className="about_header">
                <h1 className="about_title">{t("About Us", "O Nama")}</h1>
                <p className="about_subtitle">
                    {t(
                        "Closer look at our company",
                        "Bolje upoznajte našu tvrtku"
                    )}
                </p>
            </header>

            <Row className="about_main g-4 align-items-center">
                <Col lg={7}>
                    <p className="about_paragraph">
                        {t(
                            "We are a company with 10 years of work experience in the field of construction and execution of all construction works. For the last 10 years, we have been successfully performing work on facilities in the north of Germany, having built a large number of schools, hospitals, housing facilities... The highest level of construction quality according to German and EU standards. From now on in Croatia and throughout Dalmatia. Regardless of the scope of the project, we are committed to delivering high quality work that meets the needs and expectations of our clients.",
                            "Mi smo tvrtka sa 10 godina radnog iskustva u području građenja i izvođenja svih građevinskih radova. Posljednjih 10 godina uspješno izvodimo radove na objektima na sjeveru Njemačke izgradivši veliki broj škola, bolnica, stambenih objekata... Najviša razina kvalitete gradnje po njemačkim i EU standardima. Od sada i u Hrvatskoj širom Dalmacije. Bez obzira na opseg projekta, predani smo isporuci visokokvalitetnog rada koji zadovoljava potrebe i očekivanja naših klijenata."
                        )}
                    </p>
                    <p className="about_paragraph">
                        {t(
                            "At our company, we know that construction can be a complex and challenging process. That's why we're committed to staying organized and efficient and adapting to changing conditions as they arise. We also place a strong emphasis on safety, following all necessary regulations to ensure the well-being of our team and those around us. Overall, our goal is to contribute to the growth and development of the communities in which we work and to play a key role in the economy.",
                            "U našoj tvrtki znamo da izgradnja može biti složen i izazovan proces. Zato smo posvećeni tome da ostanemo organizirani i učinkoviti te da se prilagođavamo promjenjivim uvjetima kako se pojavljuju. Također stavljamo snažan naglasak na sigurnost, poštujući sve potrebne propise kako bismo osigurali dobrobit našeg tima i onih oko nas. Općenito, naš je cilj pridonijeti rastu i razvoju zajednica u kojima radimo te igrati ključnu ulogu u gospodarstvu."
                        )}
                    </p>
                </Col>
                <Col lg={5} className="about_logo_col">
                    <img
                        src={logo}
                        alt="Dean Projekt Gradnja"
                        className="about_logo"
                    />
                </Col>
            </Row>

            <Row className="about_stats g-3">
                {stats.map((s) => (
                    <Col xs={12} sm={4} key={s.label}>
                        <div className="about_stat">
                            <div className="about_stat_value">{s.value}</div>
                            <div className="about_stat_label">{s.label}</div>
                        </div>
                    </Col>
                ))}
            </Row>

            <h2 className="about_section_title">
                {t("What sets us apart", "Što nas izdvaja")}
            </h2>
            <Row className="about_highlights g-4">
                {highlights.map((h) => (
                    <Col xs={12} md={4} key={h.title}>
                        <div className="about_highlight">
                            <h5 className="about_highlight_title">{h.title}</h5>
                            <p className="about_highlight_text">{h.text}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutComponent;
