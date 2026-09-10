import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLang } from "../i18n";
import { interiorProjects } from "../data/interiorDesignData";
import "./InteriorDesignComponent.css";

const photos = interiorProjects.flatMap((project) => project.images.map((photo) => ({ ...photo, title: project.title })));

const InteriorDesignComponent = () => {
    const { t } = useLang();
    const [selected, setSelected] = useState<number | null>(null);
    const current = selected === null ? null : photos[selected];
    const text = (value: { eng: string; cro: string }) => t(value.eng, value.cro);

    useEffect(() => { window.scrollTo({ top: 0 }); }, []);
    useEffect(() => {
        if (selected === null) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") setSelected((index) => index === null ? null : (index + 1) % photos.length);
            if (event.key === "ArrowLeft") setSelected((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [selected]);

    const services = [
        { title: t("On-site visit and in-person consultation", "Izlazak na teren i savjetovanje na licu mjesta"), price: t("€80 + VAT", "80 € + PDV"), detail: t("If collaboration is agreed, this amount is included in the total service price.", "Ako dođe do suradnje, ovaj se iznos uračunava u ukupnu cijenu usluge.") },
        { title: t("Full interior design service", "Kompletna usluga uređenja interijera"), price: t("€12 / m² + VAT", "12 € / m² + PDV"), detail: t("Ideas, consultation, furniture selection and presentation are included. The price includes 2 revisions.", "Ideje, savjetovanje, odabir namještaja i prezentacija uključeni su u cijenu. U cijenu su uključene 2 izmjene.") },
        { title: t("Furnishing plan and proposal", "Plan opremanja i prijedlog"), price: t("€8 / m² + VAT", "8 € / m² + PDV"), detail: "" },
        { title: t("Refreshing an already furnished space", "Osvježavanje već opremljenog prostora"), price: t("From €96 + VAT", "Od 96 € + PDV"), detail: t("Ideas, sourcing solutions and presentation. The final price depends on the number of rooms and the agreed scope of services.", "Ideje, pronalazak rješenja i prezentacija. Konačna cijena ovisi o broju prostorija i opsegu dogovorenih usluga.") },
    ];

    return (
        <main className="container interior_page">
            <header className="interior_intro">
                <span className="interior_eyebrow">INTERIJER JULIJA</span>
                <h1>{t("Interior design", "Uređenje interijera")}</h1>
                <p className="interior_tagline">{t("For every budget, style and purpose", "Za svaki budžet, stil i namjenu")}</p>
                <p>{t("From apartments and kitchens to bedrooms, living rooms and villas. Carefully chosen details, functional layouts and an atmosphere tailored to each space.", "Od apartmana i kuhinja do spavaćih soba, dnevnih boravaka i vila. Pažljivo odabrani detalji, funkcionalan raspored i atmosfera prilagođena prostoru.")}</p>
                <div className="interior_actions">
                    <a className="btn btn-outline-secondary" href="#interior-portfolio">{t("Explore the portfolio", "Pogledajte portfolio")}</a>
                    <a className="btn btn-outline-secondary" href="#interior-prices">{t("Service prices", "Cjenik usluga")}</a>
                    <Link className="btn btn-dark" to="/contact">{t("Discuss your space", "Razgovarajmo o vašem prostoru")}</Link>
                </div>
            </header>
            <section className="interior_statement">
                <h2>{t("From an idea to a space with character", "Od ideje do prostora koji ima karakter")}</h2>
                <p>{t("From compact apartments and narrow rooms to open-plan living areas, kitchens, dining rooms and guest spaces. The goal is to spend each euro thoughtfully: on the right layout, furniture proportions, colours, lighting and details that create warmth and a refined feel.", "Od manjih apartmana i uskih soba do otvorenih dnevnih zona, kuhinja, blagovaonica i prostora za goste. Cilj je da svaki euro bude uložen promišljeno: u pravi raspored, odgovarajuće dimenzije namještaja, boje, rasvjetu i detalje koji zajedno stvaraju toplinu i dojam luksuza.")}</p>
                <strong>{t("A good interior is not only about budget — it is about making the right choices.", "Dobar interijer nije pitanje samo budžeta — nego dobrih odluka.")}</strong>
            </section>
            <section id="interior-prices" className="interior_prices">
                <h2>{t("Service price list", "Cjenik usluga")}</h2>
                <p>{t("Indicative prices — each offer is tailored to the space, location and scope of work. Prices depend on the agreement, the size of the space and the scope of the service.", "Orijentacijske cijene — svaka ponuda prilagođava se prostoru, lokaciji i opsegu posla. Cijene ovise o dogovoru, veličini prostora i opsegu usluge.")}</p>
                <div className="interior_price_grid">{services.map((service) => (
                    <article className="interior_price_card" key={service.title}>
                        <h3>{service.title}</h3><p className="interior_price">{service.price}</p>
                        {service.detail && <p>{service.detail}</p>}
                    </article>
                ))}</div>
            </section>
            <section id="interior-portfolio">
                <h2>{t("Interiors and transformations", "Interijeri i transformacije")}</h2>
                <p className="interior_note">{t("Furniture prices shown in the portfolio refer to furnishings only, not the interior design service fee. Select any photograph to view it in full.", "Cijene namještaja prikazane u portfoliju odnose se isključivo na opremu, ne na uslugu uređenja interijera. Odaberite fotografiju za prikaz u punoj veličini.")}</p>
                {interiorProjects.map((project) => (
                    <article className="interior_project" key={project.id}>
                        <h3>{text(project.title)}</h3>
                        {(project.id === 7 || project.id === 8) && <p className="interior_budget">{t("Furnishings only", "Samo oprema")}: {project.id === 7 ? "900 €" : "1.760 €"}</p>}
                        <div className={`interior_gallery ${project.images.length === 1 ? "interior_gallery--single" : ""}`}>
                            {project.images.map((photo) => (
                                <figure key={photo.src}>
                                    <button type="button" onClick={() => setSelected(photos.findIndex((item) => item.src === photo.src))} aria-label={`${t("Enlarge", "Povećaj")}: ${text(project.title)} — ${text(photo.label)}`}>
                                        <img src={photo.src} width={photo.width} height={photo.height} loading="lazy" alt={`${text(project.title)} — ${text(photo.label)}`} />
                                    </button>
                                    {project.images.length > 1 && <figcaption>{text(photo.label)}</figcaption>}
                                </figure>
                            ))}
                        </div>
                        <p>{text(project.description)}</p>
                    </article>
                ))}
            </section>
            <section className="interior_cta">
                <h2>{t("A good space starts with a good idea.", "Dobar prostor počinje dobrom idejom.")}</h2>
                <Link className="btn btn-dark" to="/contact">{t("Request a tailored quote", "Zatražite ponudu po mjeri")}</Link>
            </section>
            <Modal show={current !== null} onHide={() => setSelected(null)} size="xl" centered aria-labelledby="interior-photo-title">
                <Modal.Header closeButton closeLabel={t("Close", "Zatvori")}><Modal.Title id="interior-photo-title">{current && `${text(current.title)} — ${text(current.label)}`}</Modal.Title></Modal.Header>
                <Modal.Body className="interior_modal">{current && <img src={current.src} alt={`${text(current.title)} — ${text(current.label)}`} />}</Modal.Body>
                <Modal.Footer className="interior_modal_controls">
                    <button className="btn btn-outline-secondary" onClick={() => setSelected((index) => index === null ? null : (index - 1 + photos.length) % photos.length)}>{t("Previous", "Prethodna")}</button>
                    <span aria-live="polite">{selected === null ? 0 : selected + 1} / {photos.length}</span>
                    <button className="btn btn-outline-secondary" onClick={() => setSelected((index) => index === null ? null : (index + 1) % photos.length)}>{t("Next", "Sljedeća")}</button>
                </Modal.Footer>
            </Modal>
        </main>
    );
};
export default InteriorDesignComponent;
