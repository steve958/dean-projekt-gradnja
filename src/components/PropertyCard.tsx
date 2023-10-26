import { Carousel, Card } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { priceConverter } from "../helpers/priceconverter";
import "./PropertyCard.css"

const PropertyCard = () => {
    const property = useAppSelector(
        (state: RootState) => state.language?.selectedProperty
    );
    const language = useAppSelector((state: RootState) => state.language.value);

    useEffect(() => {
        console.log(property);
    }, [property]);

    return (
        <Card
            className="property_card-container"
        >
            <Carousel className="property_card-image">
                {property?.images?.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            style={{ width: "auto", height: "565px", objectFit: "contain" }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Card.Body
                className="property_card-body"
            >
                <Card.Title style={{ fontSize: "25px" }}>
                    {language === "English" ? property.titleEng : property.titleCro}
                </Card.Title>
                <Card.Text>
                    {language === "English"
                        ? property.descriptionEng
                        : property.descriptionCro}
                </Card.Text>
                <Card.Text style={{ fontSize: "25px", fontWeight: '600' }}>
                    {language === "English"
                        ? `Price: ${priceConverter(property.price)}€`
                        : `Cijena: ${priceConverter(property.price)}€`}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PropertyCard;
