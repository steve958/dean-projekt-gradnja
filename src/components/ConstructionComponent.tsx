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

const bullets = [
    { eng: "Rough construction (Roh-bau)", cro: "Roh-bau – siva faza" },
    { eng: "Extended shell construction", cro: "Visoka siva faza" },
    { eng: "Turn-key", cro: "Ključ u ruke" },
    { eng: "Roofing works", cro: "Krovopokrivački poslovi" },
];

const ConstructionComponent = () => (
    <ServicePage title={title} bullets={bullets} images={images} />
);

export default ConstructionComponent;
