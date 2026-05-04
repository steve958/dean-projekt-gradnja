import "./ServicesComponent.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import realestateImg from "../assets/realestate.jpg";
import renovationImg from "../assets/renovation1.jpg";
import constructionImg from "../assets/construction.jpg";
import interiorImg from "../assets/renovation/renovation5.jpg";

interface Service {
    image: string;
    titleEng: string;
    titleCro: string;
    descEng: string;
    descCro: string;
    path: string;
}

const services: Service[] = [
    {
        image: realestateImg,
        titleEng: "Real Estate Sale",
        titleCro: "Prodaja nekretnina",
        descEng:
            "A curated portfolio of houses, apartments and land in attractive coastal and inland locations.",
        descCro:
            "Pažljivo odabrana ponuda kuća, stanova i zemljišta na atraktivnim primorskim i kontinentalnim lokacijama.",
        path: "/realestate",
    },
    {
        image: renovationImg,
        titleEng: "Renovation and Finishing Works",
        titleCro: "Renoviranje i završni radovi",
        descEng:
            "Comprehensive renovation and high-quality finishing works for residential and commercial spaces.",
        descCro:
            "Sveobuhvatno renoviranje i kvalitetni završni radovi za stambene i poslovne prostore.",
        path: "/renovation",
    },
    {
        image: constructionImg,
        titleEng: "Residential Construction",
        titleCro: "Izgradnja objekata",
        descEng:
            "Building custom homes and structures from foundation to handover with precision and care.",
        descCro:
            "Gradnja kuća i objekata po mjeri od temelja do predaje ključeva, uz preciznost i pažnju.",
        path: "/construction",
    },
    {
        image: interiorImg,
        titleEng: "Interior Design",
        titleCro: "Uređenje interijera",
        descEng:
            "Tailored interior design that turns every space into a reflection of your style and lifestyle.",
        descCro:
            "Uređenje interijera prilagođeno vama, koje svaki prostor pretvara u odraz vašeg stila i načina života.",
        path: "/interior-design",
    },
];

export default function ServicesComponent() {
    const selectedLanguage = useAppSelector((s: RootState) => s.language.value);
    const navigate = useNavigate();
    const isEng = selectedLanguage === "English";

    return (
        <div className="container services_container">
            <div className="divider">{isEng ? "OUR SERVICES" : "NAŠE USLUGE"}</div>
            <div className="row services_row">
                {services.map((service) => (
                    <div
                        className="col-12 col-sm-6 col-lg-3 mb-4"
                        key={service.path}
                    >
                        <div
                            className="service_card"
                            onClick={() => navigate(service.path)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") navigate(service.path);
                            }}
                        >
                            <div
                                className="service_card_image"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />
                            <div className="service_card_body">
                                <h5 className="service_card_title">
                                    {isEng ? service.titleEng : service.titleCro}
                                </h5>
                                <p className="service_card_text">
                                    {isEng ? service.descEng : service.descCro}
                                </p>
                                <span className="service_card_link">
                                    {isEng ? "Learn more →" : "Saznajte više →"}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
