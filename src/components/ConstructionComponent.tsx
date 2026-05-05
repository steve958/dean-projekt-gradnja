import ServicePage from "./ServicePage";
import img1 from "../assets/construction/472485112_547534851618197_5498991906129530660_n.jpg";
import img2 from "../assets/construction/472233554_544884228549926_511622223924232654_n.jpg";
import img3 from "../assets/construction/472275188_544883988549950_1782619168591798926_n.jpg";
import img4 from "../assets/construction/472192242_544884065216609_6318671620042293266_n.jpg";
import img5 from "../assets/construction/472069979_544884061883276_8580507215081268823_n.jpg";
import img6 from "../assets/construction/506999932_667545919617089_3867495114982802152_n.jpg";
import img7 from "../assets/construction/20240905_075035.jpg";
import img8 from "../assets/construction/477749046_573858555652493_2378558044884761956_n.jpg";
import img9 from "../assets/construction/dji_fly_20250905_170156_78_1757086980475_photo_optimized.jpg";
import img10 from "../assets/construction/477130806_573858358985846_1800686379557943739_n.jpg";
import img11 from "../assets/construction/476641701_573858145652534_8113029243462307328_n.jpg";
import img12 from "../assets/construction/477243779_573858465652502_1168673263885890747_n.jpg";
import img13 from "../assets/construction/20241218_110346.jpg";

const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
];

const title = {
    eng: "Residential construction",
    cro: "Izgradnja objekata",
};

const paragraphs = [
    {
        eng: "Our company is dedicated to delivering high-quality residential construction services, tailored to meet the unique needs and aspirations of our clients. With a passion for crafting exceptional living spaces, we combine innovative design, superior craftsmanship, and attention to detail to bring your dream home to life.",
        cro: "Naša tvrtka posvećena je pružanju visokokvalitetnih usluga stambene izgradnje, prilagođenih jedinstvenim potrebama i težnjama naših klijenata. Sa strašću za stvaranjem iznimnih životnih prostora, kombiniramo inovativni dizajn, vrhunsku izradu i pažnju posvećenu detaljima kako bismo oživjeli vaš dom iz snova.",
    },
    {
        eng: "From custom-built homes to renovations and additions, we offer a comprehensive range of residential construction solutions. Our experienced team of architects, engineers, and builders collaborates closely with clients to ensure that every aspect of the project aligns with their vision and budget. We prioritize open communication and transparency, keeping our clients informed at every stage of the construction process.",
        cro: "Od kuća izgrađenih po narudžbi do renoviranja i dogradnje, nudimo sveobuhvatan raspon rješenja za stambenu izgradnju. Naš iskusni tim arhitekata, inženjera i građevinara blisko surađuje s klijentima kako bi osigurali da je svaki aspekt projekta usklađen s njihovom vizijom i proračunom. Prioritet nam je otvorena komunikacija i transparentnost, obavještavajući naše klijente u svakoj fazi procesa izgradnje.",
    },
    {
        eng: "With a commitment to using the finest materials and the latest construction techniques, we strive to create homes that are not only aesthetically stunning but also structurally sound and built to last. Our dedication to excellence and customer satisfaction has established us as a trusted partner for realizing your residential construction dreams.",
        cro: "Uz predanost korištenju najfinijih materijala i najnovijih tehnika gradnje, nastojimo stvoriti domove koji nisu samo estetski zadivljujući, već su i strukturno zdravi i izgrađeni da traju. Naša predanost izvrsnosti i zadovoljstvu kupaca postavila nas je kao pouzdanog partnera za ostvarenje vaših snova o stambenoj izgradnji.",
    },
];

const ConstructionComponent = () => (
    <ServicePage title={title} paragraphs={paragraphs} images={images} />
);

export default ConstructionComponent;
