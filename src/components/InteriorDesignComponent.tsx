import ServicePage from "./ServicePage";
import img1 from "../assets/renovation/renovation1.jpg";
import img2 from "../assets/renovation/renovation2.jpg";
import img3 from "../assets/renovation/renovation3.jpg";
import img4 from "../assets/renovation/renovation4.jpg";
import img5 from "../assets/renovation/renovation5.jpg";
import img6 from "../assets/renovation/renovation6.jpg";
import img7 from "../assets/renovation/renovation7.jpg";
import img8 from "../assets/renovation/renovation8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const title = {
    eng: "Interior Design",
    cro: "Uređenje interijera",
};

const paragraphs = [
    {
        eng: "We design interiors that balance aesthetics, comfort and functionality. Whether you are furnishing a new home, refreshing your apartment, or styling a commercial space, our team turns your ideas into thoughtfully composed environments that feel personal and inviting.",
        cro: "Dizajniramo interijere koji ujedinjuju estetiku, udobnost i funkcionalnost. Bez obzira opremate li novi dom, osvježavate stan ili uređujete poslovni prostor, naš tim vaše ideje pretvara u promišljeno osmišljene prostore koji djeluju osobno i toplo.",
    },
    {
        eng: "From the first concept and mood board to material selection, lighting, custom furniture and final styling, we coordinate every detail. Our goal is to create spaces with a clear identity, well-considered ergonomics and finishes that stand the test of time.",
        cro: "Od prvog koncepta i mood boarda do odabira materijala, rasvjete, namještaja po mjeri i završnog stiliziranja, koordiniramo svaki detalj. Cilj nam je stvoriti prostore jasnog identiteta, promišljene ergonomije i obrade koja traje.",
    },
    {
        eng: "We work hand in hand with our clients, listen carefully to their vision and translate it into design decisions that respect both budget and lifestyle. The result is an interior that is functional in everyday life and inspiring at every glance.",
        cro: "Sa svakim klijentom radimo blisko, pažljivo slušamo njegovu viziju i pretvaramo je u dizajnerska rješenja koja poštuju i proračun i stil života. Rezultat je interijer koji je funkcionalan u svakodnevnom životu, a inspirativan na svaki pogled.",
    },
];

const InteriorDesignComponent = () => (
    <ServicePage title={title} paragraphs={paragraphs} images={images} />
);

export default InteriorDesignComponent;
