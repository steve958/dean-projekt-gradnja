import { Carousel, Modal, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import { priceConverter } from "../helpers/priceconverter";
import { useParams } from "react-router-dom";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./PropertyCard.css";
import emailjs from "@emailjs/browser";
import { realestate } from "../data/realestateData";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import L from "leaflet";
import icon from "../assets/Map-Pin.svg";
import { useLang } from "../i18n";
import { useEffect } from "react";

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
    coordinates: LatLngTuple;
}

const PropertyCard = () => {
    const { isEng, t } = useLang();
    const [property, setProperty] = useState<Realestate | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [showMap, setShowMap] = useState<boolean>(false);
    const { id } = useParams();
    const form = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        const element = document.getElementsByClassName("card-body");
        element[0]?.scrollIntoView({ behavior: "smooth", block: "start" });
        const find = realestate?.find(
            (entry: Realestate) => entry.id.toString() === id
        );
        if (find) setProperty(find);
    }, [id]);

    const handleSendMessage = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const myIcon = new L.Icon({
        iconUrl: icon,
        iconSize: [30, 30],
    });

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
                (result) => {
                    console.log(result.text);
                    setShowModal(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.currentTarget.reset();
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card property-card-container">
                            <div
                                className="property-card-image"
                                style={{ backgroundColor: "var(--brand-slate)" }}
                            >
                                <Carousel>
                                    {property?.images?.map((image, index) => (
                                        <Carousel.Item key={image}>
                                            <img
                                                src={image}
                                                className="d-block w-100 shadow-lg rounded main-image"
                                                alt={`Slide ${index + 1}`}
                                                style={{
                                                    maxHeight: "565px",
                                                    objectFit: "contain",
                                                }}
                                                loading="lazy"
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="card-body property-card-body">
                                <h5 className="card-title" style={{ fontSize: "25px" }}>
                                    {isEng ? property?.titleEng : property?.titleCro}
                                </h5>
                                <p className="card-text">
                                    {isEng
                                        ? property?.descriptionEng
                                        : property?.descriptionCro}
                                </p>
                                {(isEng
                                    ? property?.summaryEng
                                    : property?.summaryCro
                                )?.map((summary: string) => (
                                    <p key={summary}>{summary}</p>
                                ))}
                                <p>
                                    {t("Contact:", "Kontakt:")}{" "}
                                    <a
                                        href="tel:+385953466323"
                                        style={{ color: "inherit" }}
                                    >
                                        +385 95 3466323
                                    </a>
                                </p>
                                {!showMap && (
                                    <span style={{ display: "flex", cursor: "pointer" }}>
                                        <p onClick={() => setShowMap(true)}>
                                            {t("Show map", "Prikaži na mapi")}
                                        </p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-geo-alt-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </span>
                                )}
                                {showMap && property && (
                                    <div className="map_container">
                                        <MapContainer
                                            center={property.coordinates}
                                            zoom={15}
                                            scrollWheelZoom={false}
                                        >
                                            <TileLayer
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <Marker
                                                position={property.coordinates}
                                                icon={myIcon}
                                            />
                                        </MapContainer>
                                        <span
                                            onClick={() => setShowMap(false)}
                                            className="close_map"
                                        >
                                            X
                                        </span>
                                    </div>
                                )}
                                <p style={{ fontSize: "25px", fontWeight: "600" }}>
                                    {t("Price:", "Cijena:")}{" "}
                                    {property?.price && priceConverter(property.price)}€
                                </p>
                                <span className="button_send-message">
                                    <a
                                        className="btn btn-outline-secondary"
                                        onClick={handleSendMessage}
                                    >
                                        {t("Send Message", "Pošaljite upit")}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{t("Send Message", "Pošaljite upit")}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        className="contact-form-container"
                        onSubmit={sendEmail}
                        ref={form}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label>{t("Realestate", "Nekretnina")}</Form.Label>
                            <Form.Control
                                type="text"
                                name="property"
                                value={property?.titleCro ?? ""}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>{t("Name", "Ime")}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t("Your name", "Vaše ime")}
                                name="user_name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder={t("Enter email", "Vaš mail")}
                                name="user_email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>{t("Phone number", "Broj telefona")}</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder={t(
                                    "Enter phone number",
                                    "Vaš broj telefona"
                                )}
                                name="user_number"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
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
                        <button className="btn btn-outline-secondary" type="submit">
                            {t("Send", "Pošalji")}
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PropertyCard;
