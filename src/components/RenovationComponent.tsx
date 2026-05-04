import ServicePage from "./ServicePage";
import renovation1 from "../assets/renovation/renovation1.jpg";
import renovation2 from "../assets/renovation/renovation2.jpg";
import renovation3 from "../assets/renovation/renovation3.jpg";
import renovation4 from "../assets/renovation/renovation4.jpg";
import renovation5 from "../assets/renovation/renovation5.jpg";
import renovation6 from "../assets/renovation/renovation6.jpg";
import renovation7 from "../assets/renovation/renovation7.jpg";
import renovation8 from "../assets/renovation/renovation8.jpg";
import renovation9 from "../assets/renovation/renovation9.jpg";
import renovation10 from "../assets/renovation/renovation10.jpg";
import renovation11 from "../assets/renovation/renovation11.jpg";
import renovation12 from "../assets/renovation/renovation12.jpg";

const images = [
    renovation1,
    renovation2,
    renovation3,
    renovation4,
    renovation5,
    renovation6,
    renovation7,
    renovation8,
    renovation9,
    renovation10,
    renovation11,
    renovation12,
];

const title = {
    eng: "Renovation and Finishing Works",
    cro: "Renoviranje i završni radovi",
};

const paragraphs = [
    {
        eng: "Our company specializes in providing comprehensive renovation and finishing services tailored to meet the evolving needs of our clients. With a focus on both residential and commercial properties, we combine innovation and expertise to breathe new life into existing spaces.",
        cro: "Naša tvrtka specijalizirana je za pružanje sveobuhvatnih usluga obnove i završnih radova prilagođenih rastućim potrebama naših klijenata. S fokusom na stambene i poslovne nekretnine, kombiniramo inovacije i stručnost kako bismo udahnuli novi život postojećim prostorima.",
    },
    {
        eng: "Whether it's a complete overhaul of a property or a selective adaptation to accommodate specific requirements, our team of skilled professionals works diligently to ensure that every project is executed with precision and attention to detail. We understand the importance of maintaining the structural integrity of buildings while incorporating modern design elements and functionality.",
        cro: "Bilo da se radi o kompletnom remontu nekretnine ili selektivnoj prilagodbi specifičnim zahtjevima, naš tim vještih profesionalaca marljivo radi kako bi osigurao da je svaki projekt izveden s preciznošću i pažnjom za detalje. Razumijemo važnost održavanja strukturalnog integriteta zgrada uz uključivanje elemenata modernog dizajna i funkcionalnosti.",
    },
    {
        eng: "From concept development to the final execution, we collaborate closely with our clients to understand their vision and deliver results that exceed expectations. Our commitment to quality craftsmanship, adherence to timelines, and transparent communication sets us apart as a trusted partner in realizing your renovation goals.",
        cro: "Od razvoja koncepta do konačne izvedbe, surađujemo blisko s našim klijentima kako bismo razumjeli njihovu viziju i isporučili rezultate koji premašuju očekivanja. Naša predanost kvalitetnom majstorstvu, poštivanju rokova i transparentnoj komunikaciji izdvaja nas kao pouzdanog partnera u realizaciji vaših ciljeva obnove.",
    },
];

const RenovationComponent = () => (
    <ServicePage title={title} paragraphs={paragraphs} images={images} />
);

export default RenovationComponent;
