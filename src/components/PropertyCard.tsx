import { Carousel, Modal, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { priceConverter } from "../helpers/priceconverter";
import { useNavigate, useParams } from "react-router-dom";
import "./PropertyCard.css";
import emailjs from "@emailjs/browser";
import { realestate } from "../data/realestateData";
import { useLang } from "../i18n";

export interface Realestate {
    id: number;
    mainImage: string;
    titleCro: string;
    titleEng: string;
    price: number;
    images: string[];
    status: string;
    type: string;
    descriptionCro: string;
    descriptionEng: string;
    summaryCro: string[];
    summaryEng: string[];
    coordinates: [number, number];
}

const PHONE_DISPLAY = "+385 95 3466323";
const PHONE_TEL = "+385953466323";

const PropertyCard = () => {
    const { isEng, t } = useLang();
    const navigate = useNavigate();
    const [property, setProperty] = useState<Realestate | null>(null);
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const form = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        const find = realestate?.find(
            (entry: Realestate) => entry.id.toString() === id
        );
        if (find) setProperty(find);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs
            .sendForm(
                "service_9fb2576",
                "template_swiqmsz",
                form.current,
                "YzjcisuTMf4N1ViWq"
            )
            .then(
                () => setShowModal(false),
                (error) => console.log(error.text)
            );
        e.currentTarget.reset();
    };

    if (!property) return null;

    const title = isEng ? property.titleEng : property.titleCro;
    const description = isEng
        ? property.descriptionEng
        : property.descriptionCro;
    const summary = isEng ? property.summaryEng : property.summaryCro;
    const isSold = property.status === "sold";

    const typeLabel = (() => {
        switch (property.type) {
            case "house":
                return t("House", "Kuća");
            case "apartment":
                return t("Apartment", "Stan");
            case "land":
                return t("Land", "Plac");
            default:
                return property.type;
        }
    })();

    const [lat, lng] = property.coordinates;
    const mapEmbedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
    const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

    return (
        <>
            <div className="container property_page">
                <button
                    type="button"
                    className="property_back"
                    onClick={() => navigate("/realestate")}
                >
                    ← {t("Back to listings", "Natrag na ponudu")}
                </button>

                <div className="row g-4 property_main">
                    <div className="col-lg-7">
                        <div className="property_carousel_wrap">
                            <Carousel
                                interval={null}
                                className="property_carousel"
                            >
                                {property.images?.map((image, idx) => (
                                    <Carousel.Item key={image}>
                                        <img
                                            src={image}
                                            className="property_carousel_image"
                                            alt={`${title} ${idx + 1}`}
                                            loading={idx === 0 ? "eager" : "lazy"}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <aside className="property_info">
                            <div className="property_badges">
                                <span className="property_badge property_badge--type">
                                    {typeLabel}
                                </span>
                                {isSold && (
                                    <span className="property_badge property_badge--sold">
                                        {t("Sold", "Prodano")}
                                    </span>
                                )}
                            </div>

                            <h1 className="property_title">{title}</h1>

                            <div className="property_price">
                                {priceConverter(property.price)}€
                            </div>

                            <p className="property_description">{description}</p>

                            {summary && summary.length > 0 && (
                                <ul className="property_summary">
                                    {summary.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="property_actions">
                                <a
                                    href={`tel:${PHONE_TEL}`}
                                    className="property_phone"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                        />
                                    </svg>
                                    <span>{PHONE_DISPLAY}</span>
                                </a>
                                <button
                                    type="button"
                                    className="property_cta"
                                    onClick={() => setShowModal(true)}
                                    disabled={isSold}
                                >
                                    {t("Send inquiry", "Pošaljite upit")}
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>

                <section className="property_map_section">
                    <div className="property_map_header">
                        <h4 className="property_map_title">
                            {t("Location", "Lokacija")}
                        </h4>
                        <a
                            href={mapDirectionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="property_directions"
                        >
                            {t("Get directions", "Upute za put")} →
                        </a>
                    </div>
                    <div className="property_map">
                        <iframe
                            src={mapEmbedUrl}
                            title={t("Property location", "Lokacija nekretnine")}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </section>
            </div>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {t("Send inquiry", "Pošaljite upit")}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        className="property_inquiry_form"
                        onSubmit={sendEmail}
                        ref={form}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label>
                                {t("Property", "Nekretnina")}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="property"
                                value={property.titleCro}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Name", "Ime")}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t("Your name", "Vaše ime")}
                                name="user_name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder={t("Enter email", "Vaš mail")}
                                name="user_email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                {t("Phone number", "Broj telefona")}
                            </Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder={t(
                                    "Enter phone number",
                                    "Vaš broj telefona"
                                )}
                                name="user_number"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Message", "Poruka")}</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                required
                                rows={3}
                                placeholder={t(
                                    "Enter your message",
                                    "Unesite vašu poruku"
                                )}
                            />
                        </Form.Group>
                        <button
                            type="submit"
                            className="property_modal_submit"
                        >
                            {t("Send", "Pošalji")}
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PropertyCard;
