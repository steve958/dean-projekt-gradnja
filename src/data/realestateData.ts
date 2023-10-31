//object 1
import onemain from "../assets/realestate/1-Kuca-Vis-Rukavac/main.jpg";
import oneimg1 from "../assets/realestate/1-Kuca-Vis-Rukavac/img1.jpg";
import oneimg2 from "../assets/realestate/1-Kuca-Vis-Rukavac/img2.jpg";
import oneimg3 from "../assets/realestate/1-Kuca-Vis-Rukavac/img3.jpg";
import oneimg4 from "../assets/realestate/1-Kuca-Vis-Rukavac/img4.jpg";
import oneimg5 from "../assets/realestate/1-Kuca-Vis-Rukavac/img5.jpg";
import oneimg6 from "../assets/realestate/1-Kuca-Vis-Rukavac/img6.jpg";
//object 2
import twomain from "../assets/realestate/2-Kuca-Kut-Valica/main.jpg";
import twoimg1 from "../assets/realestate/2-Kuca-Kut-Valica/img1.jpg";
import twoimg2 from "../assets/realestate/2-Kuca-Kut-Valica/img2.jpg";
import twoimg3 from "../assets/realestate/2-Kuca-Kut-Valica/img3.jpg";
import twoimg4 from "../assets/realestate/2-Kuca-Kut-Valica/img4.jpg";
import twoimg5 from "../assets/realestate/2-Kuca-Kut-Valica/img5.jpg";
import twoimg6 from "../assets/realestate/2-Kuca-Kut-Valica/img6.jpg";
import twoimg7 from "../assets/realestate/2-Kuca-Kut-Valica/img7.jpg";
import twoimg8 from "../assets/realestate/2-Kuca-Kut-Valica/img8.jpg";
import twoimg9 from "../assets/realestate/2-Kuca-Kut-Valica/img9.jpg";
//object 3
import threemain from "../assets/realestate/3-Stan-Hvar/main.jpg";
import threeimg1 from "../assets/realestate/3-Stan-Hvar/img1.jpg";
import threeimg2 from "../assets/realestate/3-Stan-Hvar/img2.jpg";
import threeimg3 from "../assets/realestate/3-Stan-Hvar/img3.jpg";
import threeimg4 from "../assets/realestate/3-Stan-Hvar/img4.jpg";
import threeimg5 from "../assets/realestate/3-Stan-Hvar/img5.jpg";
import threeimg6 from "../assets/realestate/3-Stan-Hvar/img6.jpg";
import threeimg7 from "../assets/realestate/3-Stan-Hvar/img7.jpg";
//object 4
import fourmain from "../assets/realestate/4-Stan-Split-Riva/main.jpg";
import fourimg1 from "../assets/realestate/4-Stan-Split-Riva/img1.jpg";
import fourimg2 from "../assets/realestate/4-Stan-Split-Riva/img2.jpg";
import fourimg3 from "../assets/realestate/4-Stan-Split-Riva/img3.jpg";
import fourimg4 from "../assets/realestate/4-Stan-Split-Riva/img4.jpg";
import fourimg5 from "../assets/realestate/4-Stan-Split-Riva/img5.jpg";
import fourimg6 from "../assets/realestate/4-Stan-Split-Riva/img6.jpg";
import fourimg7 from "../assets/realestate/4-Stan-Split-Riva/img7.jpg";
import fourimg8 from "../assets/realestate/4-Stan-Split-Riva/img8.jpg";
//object 5
import fivemain from "../assets/realestate/5-Stan-Vis/main.jpg"
//object 6
import sixmain from "../assets/realestate/6-Stan-Hvar-2/main.jpg"

export interface Realestate {
  id: number;
  mainImage: string;
  titleCro: string;
  titleEng: string;
  price: number;
  images: string[];
  status: string;
  type:string;
  descriptionCro: string;
  descriptionEng: string;
}

export const realestate = [
  {
    id: 1,
    mainImage: onemain,
    titleCro: "Novogradnja - Vis Rukavac, Srebrna Plaža",
    titleEng: "New house - Vis Rukavac, Srebrna Plaža",
    price: 340000,
    images: [oneimg1, oneimg2, oneimg3, oneimg4, oneimg5, oneimg6],
    status:"active",
    type:'house',
    descriptionCro:
      "Novogradnja 3-sobna kuca sa rokom useljenja Ljeto 2023, sa mogućim jos jednim apartmanom od 36m² u prizemlju. Bazen / Đakuzi. Pogled na more i prirodu. Miran kraj prepun zelenila. Cijena je fleksibilna.",
    descriptionEng:
      "Newly built 3-room house with move-in deadline Summer 2023, with possible one more apartment of 36m² on the ground floor. Pool / Jacuzzi. View of the sea and nature. A quiet neighborhood full of greenery.The price is flexible.",
  },
  {
    id: 2,
    mainImage: twomain,
    titleCro: "Kuća - Kut Valica, Neuseljavana",
    titleEng: "House - Kut Valica, No previous owners ",
    price: 330000,
    images: [twoimg1, twoimg2, twoimg3, twoimg4, twoimg5, twoimg6, twoimg7, twoimg8, twoimg9],
    status:"active",
    type:'house',
    descriptionCro: "Neuseljavana Četvorosobna kuća. Površina 130m². Mogućnost bazena. Rok useljenja - Ljeto 2023",
    descriptionEng: "Four-room house witouth previous owners. Square footage 130m². The possibility of a swimming pool. Deadline for moving in - Summer 2023",
  },
  {
    id: 3,
    mainImage: threemain,
    titleCro: "Stan - Hvar - 37m² + 7,5m² teraca",
    titleEng: "Apartment - Hvar - 37m² + 7,5m² terrace",
    price: 113000,
    images: [threeimg1, threeimg2, threeimg3, threeimg4, threeimg5, threeimg6, threeimg7],
    status:"active",
    type:'apartment',
    descriptionCro: "Stan na Hvaru, ul Marina Blagajića 11. Površina 37m² + 7,5m² teraca.Oko stana veliki vrt.",
    descriptionEng: "Apartment on Hvar in the street Marina Blagajića 11. Square footage 37m² + 7,5m² terrace. The apartment is surrounded by a large garden",
  },
  {
    id: 4,
    mainImage: fourmain,
    titleCro: "Split - Riva, Varoš 50m²",
    titleEng: "Split - Riva, Varoš 50m²",
    price: 310000,
    images: [fourimg1, fourimg2, fourimg3, fourimg4, fourimg5, fourimg6, fourimg7, fourimg8],
    status:"active",
    type:'apartment',
    descriptionCro: "Kompletno sređen i renoviran stan u samom jezgru grada Splita. Nove instalacije, nova stolarija, apsolutno sve novo. Svaka prostorija i soba imaju prozore i prirodnu ventilaciju. Ulica Kovačića 18. Dvoiposoban stan od 50m². Dobro uhodan na Booking-u. Savršen stan kao i investicija!",
    descriptionEng: "Completely arranged and renovated apartment in the very core of the city of Split. New installations, new carpentry, absolutely everything new. Every room and room has windows and natural ventilation. Street Kovačića 18. Two and a half room apartment of 50m². Excellent attendance at Booking. A perfect apartment as well as an investment!",
  },
  {
    id: 5,
    mainImage: fivemain,
    titleCro: "Stan - Otok Vis 37m²",
    titleEng: "Split - Island of Vis 37m²",
    price: 140000,
    images: [fivemain],
    status:"sold",
    type:'apartment',
    descriptionCro: "",
    descriptionEng: "",
  },
  {
    id: 6,
    mainImage: sixmain,
    titleCro: "Stan - Hvar - 24m² + 7,5m² teraca",
    titleEng: "Apartment - Hvar - 24m² + 7,5m² terrace",
    price: 77000,
    images: [sixmain],
    status:"sold",
    type:'apartment',
    descriptionCro: "",
    descriptionEng: "",
  },
];
