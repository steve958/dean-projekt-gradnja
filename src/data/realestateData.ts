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
import fivemain from "../assets/realestate/5-Stan-Vis/main.jpg";
//object 6
import sixmain from "../assets/realestate/6-Stan-Hvar-2/main.jpg";
//obejct 7
import sevenmain from "../assets/realestate/7-Kuca-Apartmani/main.jpg";
//object 8
import eightmain from "../assets/realestate/8-Kuca-Komiza/main.jpg";
import eightimg3 from "../assets/realestate/8-Kuca-Komiza/img1.jpg";
import eightimg1 from "../assets/realestate/8-Kuca-Komiza/img2.jpg";
import eightimg2 from "../assets/realestate/8-Kuca-Komiza/img3.jpg";
//object 9
import ninemain from "../assets/realestate/9-Kuca-Osijek/main.jpg";
import nineimg1 from "../assets/realestate/9-Kuca-Osijek/img1.jpg";
import nineimg2 from "../assets/realestate/9-Kuca-Osijek/img2.jpg";
import nineimg3 from "../assets/realestate/9-Kuca-Osijek/img3.jpg";
import nineimg4 from "../assets/realestate/9-Kuca-Osijek/img4.jpg";
import nineimg5 from "../assets/realestate/9-Kuca-Osijek/img5.jpg";
import nineimg6 from "../assets/realestate/9-Kuca-Osijek/img6.jpg";
import nineimg7 from "../assets/realestate/9-Kuca-Osijek/img7.jpg";
//obejct 10
import tenmain from "../assets/realestate/10-Kuca-Plisko-Polje/main.jpg"


export interface Realestate {
  id: number;
  mainImage: string;
  titleCro: string;
  titleEng: string;
  price: number;
  images: string[];
  status: string;
  type: string;
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
    status: "active",
    type: "house",
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
    images: [
      twoimg1,
      twoimg2,
      twoimg3,
      twoimg4,
      twoimg5,
      twoimg6,
      twoimg7,
      twoimg8,
      twoimg9,
    ],
    status: "active",
    type: "house",
    descriptionCro:
      "Neuseljavana Četvorosobna kuća. Površina 130m². Mogućnost bazena. Rok useljenja - Ljeto 2023",
    descriptionEng:
      "Four-room house witouth previous owners. Square footage 130m². The possibility of a swimming pool. Deadline for moving in - Summer 2023",
  },
  {
    id: 3,
    mainImage: threemain,
    titleCro: "Stan - Hvar - 37m² + 7,5m² teraca",
    titleEng: "Apartment - Hvar - 37m² + 7,5m² terrace",
    price: 113000,
    images: [
      threeimg1,
      threeimg2,
      threeimg3,
      threeimg4,
      threeimg5,
      threeimg6,
      threeimg7,
    ],
    status: "active",
    type: "apartment",
    descriptionCro:
      "Stan na Hvaru, ul Marina Blagajića 11. Površina 37m² + 7,5m² teraca.Oko stana veliki vrt.",
    descriptionEng:
      "Apartment on Hvar in the street Marina Blagajića 11. Square footage 37m² + 7,5m² terrace. The apartment is surrounded by a large garden",
  },
  {
    id: 4,
    mainImage: fourmain,
    titleCro: "Split - Riva, Varoš 50m²",
    titleEng: "Split - Riva, Varoš 50m²",
    price: 310000,
    images: [
      fourimg1,
      fourimg2,
      fourimg3,
      fourimg4,
      fourimg5,
      fourimg6,
      fourimg7,
      fourimg8,
    ],
    status: "active",
    type: "apartment",
    descriptionCro:
      "Kompletno sređen i renoviran stan u samom jezgru grada Splita. Nove instalacije, nova stolarija, apsolutno sve novo. Svaka prostorija i soba imaju prozore i prirodnu ventilaciju. Ulica Kovačića 18. Dvoiposoban stan od 50m². Dobro uhodan na Booking-u. Savršen stan kao i investicija!",
    descriptionEng:
      "Completely arranged and renovated apartment in the very core of the city of Split. New installations, new carpentry, absolutely everything new. Every room and room has windows and natural ventilation. Street Kovačića 18. Two and a half room apartment of 50m². Excellent attendance at Booking. A perfect apartment as well as an investment!",
  },
  {
    id: 5,
    mainImage: fivemain,
    titleCro: "Stan - Otok Vis 37m²",
    titleEng: "Apartment - Island of Vis 37m²",
    price: 140000,
    images: [fivemain],
    status: "sold",
    type: "apartment",
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
    status: "sold",
    type: "apartment",
    descriptionCro: "",
    descriptionEng: "",
  },
  {
    id: 7,
    mainImage: sevenmain,
    titleCro: "Vis - Srebrna plaža, 7 apartmana",
    titleEng: "Island of Vis-Srebrna plaža, 7 apartments",
    price: 399000,
    images: [sevenmain],
    status: "sold",
    type: "house",
    descriptionCro: "",
    descriptionEng: "",
  },
  {
    id: 8,
    mainImage: eightmain,
    titleCro: "Komiža, najstarija kuća na Otoku Visu",
    titleEng: "Komiža, the oldest house on Vis island",
    price: 440000,
    images: [eightmain, eightimg1, eightimg2, eightimg3],
    status: "active",
    type: "house",
    descriptionCro:
      "KOMIŽA - Najstarija kuća na Otoku Visu, stara 800 godina. Kuća koja nam govori o samoj povijesti grada Komiže. U 9. mjesecu počinje kompletna restauracija koja bi ttebala biti gotova u 3. mjesecu 2024. Kuća će biti uradjena u starom dalmatinskom stilu ali i svakako sa par modernih detalja. Kao budući kupac imate mogućnost izmjene projekta,detalja kao i stila renovacije.",
    descriptionEng:
      "KOMIŽA - The oldest house on the island of Vis, 800 years old. A house that tells us about the very history of the city of Komiža. In the 9th month, the complete restoration will begin, which should be finished in the 3rd month of 2024. The house will be done in the old Dalmatian style, but certainly with a few modern details. As a future buyer, you have the option of changing the project, details and style of the renovation.",
  },
  {
    id: 9,
    mainImage: ninemain,
    titleCro: "Kuća - Osijek, Tenja",
    titleEng: "House - Osijek, Tenja",
    price: 63000,
    images: [
      nineimg4,
      nineimg5,
      nineimg6,
      nineimg7,
      nineimg1,
      nineimg2,
      nineimg3,
    ],
    status: "active",
    type: "house",
    descriptionCro:
      "Prodaje se odlična kuća sa urednim papirima u srcu Slavonije. Kuća na kat, ima 6 soba 2 kupaone. Par soba zahtjeva određena ulaganja tj treba ih dovršiti. Dvorište, uvučeno od glavne ceste i ono najvažnije predivan pogled u slavonsku ravnicu. Plac 3000m²",
    descriptionEng:
      "Excellent house for sale with proper papers in the heart of Slavonia. House on one floor, has 6 rooms and 2 bathrooms. A couple of rooms require certain investments, i.e. they need to be completed. The yard, set back from the main road and most importantly, a beautiful view of the Slavonian plain. 3000m² of land",
  },
   {
    id: 10,
    mainImage: tenmain,
    titleCro: "Vis - Plisko Polje",
    titleEng: "Island of Vis - Plisko Polje",
    price: 100000,
    images: [tenmain],
    status: "active",
    type: "house",
    descriptionCro: "Na prodaju kamena kuća 65m² podne površine, zahtjeva ulaganje. Ima pripadajuću gustirnu, i mali vrt. Skrivena od gužve i buke. Sa predivnim pogledom na vinograde i otočke vrtove. Plac 3000m²",
    descriptionEng: "Stone house for sale, 65 m² floor area, investment required. It has an adjoining well and a small garden. Hidden away from the crowd and noise. With a wonderful view of vineyards and island gardens. 3000m² of land",
  },
];