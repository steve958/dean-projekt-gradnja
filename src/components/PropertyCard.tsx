import { Card, Carousel, Modal, Form } from 'react-bootstrap';
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { useEffect, useState } from "react";
import { priceConverter } from "../helpers/priceconverter";
import { useParams } from "react-router-dom";
import "./PropertyCard.css"
import { Realestate, realestate } from "../data/realestateData";

const PropertyCard = () => {
    const language = useAppSelector((state: RootState) => state.language.value);
    const [property, setProperty] = useState<Realestate | null>(null);
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const find = realestate?.find((realestate: Realestate) => realestate.id.toString() === id);
        if (find) setProperty(find);
    }, [id]);

    const handleSendMessage = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Card className="property_card-container">
                <Carousel className="property_card-image">
                    {property?.images?.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                style={{ width: "auto", minWidth: '550px', height: "565px", objectFit: "cover" }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Card.Body className="property_card-body">
                    <Card.Title style={{ fontSize: "25px" }}>
                        {language === "English" ? property?.titleEng : property?.titleCro}
                    </Card.Title>
                    <Card.Text>
                        {language === "English"
                            ? property?.descriptionEng
                            : property?.descriptionCro}
                    </Card.Text>
                    <Card.Text style={{ fontSize: "25px", fontWeight: '600' }}>
                        {language === "English"
                            ? `Price: ${property?.price && priceConverter(property?.price)}€`
                            : `Cijena: ${property?.price && priceConverter(property?.price)}€`}
                    </Card.Text>
                    <span style={{ position: 'absolute', right: '10px', bottom: '30px' }}>
                        <a className='btn btn-outline-secondary' onClick={handleSendMessage}>
                            {language === "English" ? "Send Message" : "Pošaljite upit"}
                        </a>
                    </span>
                </Card.Body>
            </Card>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{language === "English" ? "Send Message" : "Pošaljite upit"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nekretnina: {property?.titleCro}</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>

                        <a className='btn btn-outline-secondary' type="submit">
                            Send
                        </a>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PropertyCard;
