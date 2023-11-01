import { Carousel, Modal, Form } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { useEffect, useRef, useState } from "react";
import { priceConverter } from "../helpers/priceconverter";
import { useParams } from "react-router-dom";
import "./PropertyCard.css";
import emailjs from "@emailjs/browser";
import { Realestate, realestate } from "../data/realestateData";

const PropertyCard = () => {
    const language = useAppSelector((state: RootState) => state.language.value);
    const [property, setProperty] = useState<Realestate | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [messageSent, setMessageSent] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);
    const { id } = useParams();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form = useRef<any>(null);

    useEffect(() => {
        const element = document.getElementsByClassName("card-body");
        element[0]?.scrollIntoView({ behavior: "smooth", block: "start" });
        const find = realestate?.find(
            (realestate: Realestate) => realestate.id.toString() === id
        );
        if (find) setProperty(find);
    }, [id]);

    useEffect(() => {
        if (messageSent) {
            setTimeout(() => {
                setMessageSent(false);
            }, 3000);
        }
    }, [messageSent]);

    useEffect(() => {
        if (messageError) {
            setTimeout(() => {
                setMessageError(false);
            }, 3000);
        }
    }, [messageError]);

    const handleSendMessage = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function sendEmail(e: any) {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_9fb2576",
                "template_swiqmsz",
                form.current,
                "YzjcisuTMf4N1ViWq"
            )
            .then(
                (result) => {
                    setMessageSent(true);
                    console.log(result.text);
                },
                (error) => {
                    setMessageError(true);
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card property-card-container">
                            <div
                                className="property-card-image"
                                style={{ backgroundColor: "#45526E" }}
                            >
                                <Carousel>
                                    {property?.images?.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                src={image}
                                                className="d-block w-100 shadow-lg rounded main-image"
                                                alt={`Slide ${index}`}
                                                style={{ maxHeight: "565px", objectFit: "contain" }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="card-body property-card-body">
                                <h5 className="card-title" style={{ fontSize: "25px" }}>
                                    {language === "English"
                                        ? property?.titleEng
                                        : property?.titleCro}
                                </h5>
                                <p className="card-text">
                                    {language === "English"
                                        ? property?.descriptionEng
                                        : property?.descriptionCro}
                                </p>
                                {language !== "English" &&
                                    property?.summaryCro.map((summary: string) => {
                                        return <p key={Math.random()}>{summary}</p>;
                                    })}
                                {language === "English" &&
                                    property?.summaryEng.map((summary: string) => {
                                        return <p key={Math.random()}>{summary}</p>;
                                    })}
                                <p style={{ fontSize: "25px", fontWeight: "600" }}>
                                    {language === "English"
                                        ? `Price: ${property?.price && priceConverter(property?.price)
                                        }€`
                                        : `Cijena: ${property?.price && priceConverter(property?.price)
                                        }€`}
                                </p>
                                <span className="button_send-message">
                                    <a
                                        className="btn btn-outline-secondary"
                                        onClick={handleSendMessage}
                                    >
                                        {language === "English" ? "Send Message" : "Pošaljite upit"}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {messageError && (
                <div className="message-error">
                    <p>
                        {language
                            ? "Desila se greška pri slanju vaše poruke."
                            : "There was an error sending your message."}
                    </p>
                </div>
            )}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {language === "English" ? "Send Message" : "Pošaljite upit"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        className="contact-form-container"
                        onSubmit={sendEmail}
                        ref={form}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label name="property" value={property?.titleCro}>
                                Nekretnina: {property?.titleCro}
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="user_name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="user_email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="Enter phone number"
                                name="user_number"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                required
                                rows={3}
                                placeholder="Enter your message"
                            />
                        </Form.Group>
                        <button className="btn btn-outline-secondary" type="submit">
                            Send
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PropertyCard;
