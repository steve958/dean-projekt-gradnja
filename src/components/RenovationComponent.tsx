import ServicePage from "./ServicePage";
import drone1 from "../assets/finish-work/dji_fly_20260407_120504_148_1775555494550_photo_optimized.jpg";
import drone2 from "../assets/finish-work/dji_fly_20260407_120648_154_1775555473746_photo_optimized.jpg";
import drone3 from "../assets/finish-work/dji_fly_20260407_120738_158_1775555455925_photo_optimized.jpg";
import img1 from "../assets/finish-work/20250113_113539.jpg";
import img2 from "../assets/finish-work/20250224_131417.jpg";
import img3 from "../assets/finish-work/476634867_573858305652518_80779812425899159_n.jpg";
import img4 from "../assets/finish-work/476642511_573858138985868_4059846480865615165_n.jpg";
import img5 from "../assets/finish-work/477004966_573858332319182_3662815728022872476_n.jpg";
import img6 from "../assets/finish-work/477072721_573858428985839_5918993981884009330_n_1.jpg";
import img7 from "../assets/finish-work/477078861_573858228985859_2474018226023316119_n.jpg";
import img8 from "../assets/finish-work/477154419_573858495652499_1448730000806706486_n.jpg";
import img9 from "../assets/finish-work/477287746_573858098985872_6316140163081029713_n.jpg";
import img10 from "../assets/finish-work/477287777_573858565652492_5886568815306014832_n.jpg";
import img11 from "../assets/finish-work/477318657_573858515652497_1757545729552987521_n.jpg";
import img12 from "../assets/finish-work/477493801_573858478985834_5489917107224815724_n.jpg";
import img13 from "../assets/finish-work/477742074_573858518985830_8694855423202181397_n_1.jpg";
import img14 from "../assets/finish-work/477787306_573858272319188_8447349680735867555_n.jpg";
import img15 from "../assets/finish-work/478322421_573858455652503_4877910028552635352_n.jpg";
import img16 from "../assets/finish-work/496003760_653766047661743_99175368717907088_n.jpg";
import img20 from "../assets/finish-work/20230123_095016.jpg";
import img21 from "../assets/finish-work/20240614_175157.jpg";
import img22 from "../assets/finish-work/20240618_054926.jpg";
import img23 from "../assets/finish-work/20251122_100910.jpg";
import img24 from "../assets/finish-work/20251212_095611.jpg";
import img25 from "../assets/finish-work/1000050252.jpg";
import img26 from "../assets/finish-work/1000050253.jpg";
import img27 from "../assets/finish-work/1000066024.jpg";
import img28 from "../assets/finish-work/1000111525.jpg";
import img29 from "../assets/finish-work/1000111526.jpg";
import img30 from "../assets/finish-work/1000111528.jpg";
import img31 from "../assets/finish-work/1000111529.jpg";
import img32 from "../assets/finish-work/1000131758.jpg";
import img33 from "../assets/finish-work/IMG_20230711_193829_048.jpg";
import img34 from "../assets/finish-work/IMG-20231218-WA0020.jpg";
import img35 from "../assets/finish-work/IMG-20251121-WA0028.jpg";
import img36 from "../assets/finish-work/IMG-20251121-WA0032.jpg";
import img37 from "../assets/finish-work/Screenshot_20220202-150847_Facebook.jpg";
import img38 from "../assets/finish-work/Screenshot_20230117_214131_Facebook.jpg";

const images = [
    drone1,
    drone2,
    drone3,
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
    img14,
    img15,
    img16,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
];

const title = {
    eng: "Renovation and Finishing Works",
    cro: "Renoviranje i završni radovi",
};

const bullets = [
    { eng: "Facades", cro: "Fasade" },
    { eng: "Tiling", cro: "Keramika" },
    { eng: "Drywall (Knauf)", cro: "Knauf" },
    { eng: "Stonework", cro: "Kamen" },
    { eng: "Painting", cro: "Soboslikarstvo" },
];

const RenovationComponent = () => (
    <ServicePage title={title} bullets={bullets} images={images} />
);

export default RenovationComponent;
