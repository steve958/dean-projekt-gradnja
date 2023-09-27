import "./SpecialOfferComponent.css";
import slika1 from "../assets/specialoffer/srebrnaplaza.jpg";
import slika2 from "../assets/specialoffer/splitriva.jpg";
import slika3 from "../assets/specialoffer/kucakut.jpg";

interface Props {
    selectedLanguage: string;
}

export default function SpecialOfferComponent(props: Props) {
    const { selectedLanguage } = props;

    return (
        <div className="container" style={{ marginTop: "2%" }}>
            <div className="divider">
                {selectedLanguage === "English"
                    ? "SPECIAL OFFER"
                    : "IZDVAJAMO IZ PONUDE"}
            </div>
            <div className="card-group vgr-cards">
                <div className="card" style={{ padding: "10px" }}>
                    <div className="card-img-body" style={{ height: "370px" }}>
                        <img className="card-img" src={slika3} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            {selectedLanguage === "English"
                                ? "NEW HOUSE - KUT RUKAVAC"
                                : "NOVOGRADNJA - KUT RUKAVAC"}
                        </h4>
                        <p className="card-text">
                            {selectedLanguage === "English"
                                ? "Four-room house witouth previous owners."
                                : "Neuseljavana Četvorosobna kuća."}
                        </p>
                        <p>
                            {selectedLanguage === "English"
                                ? "Square footage 130m². The possibility of a swimming pool."
                                : "Površina 130m². Mogućnost bazena."}
                        </p>
                        <a href="#" className="btn btn-outline-secondary">
                            {selectedLanguage === "English" ? "More details" : "Detaljnije"}
                        </a>
                        <div className="icon_container_right">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="#C99B11"
                                className="bi bi-house-door"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ padding: "10px" }}>
                    <div className="card-img-body" style={{ height: "370px" }}>
                        <img className="card-img" src={slika2} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            {selectedLanguage === "English"
                                ? "APARTMENT - SPLIT"
                                : "APARTMAN - SPLIT"}
                        </h4>
                        <p className="card-text">
                            {selectedLanguage === "English"
                                ? " Completely arranged and renovated apartment in the very core of the city of Split."
                                : "Kompletno sređen i renoviran stan u samom jezgru grada Splita."}
                        </p>
                        <p>
                            {selectedLanguage === "English"
                                ? "Every room and room has windows and natural ventilation."
                                : "Svaka prostorija i soba imaju prozore i prirodnu ventilaciju."}
                        </p>
                        <p>
                            {selectedLanguage === "English"
                                ? "A perfect apartment as well as an investment!"
                                : "Savršen stan kao i investicija!"}
                        </p>
                        <a href="#" className="btn btn-outline-secondary">
                            {selectedLanguage === "English" ? "More details" : "Detaljnije"}
                        </a>
                        <div className="icon_container_left">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="#C99B11"
                                className="bi bi-buildings"
                                viewBox="0 0 16 16"
                            >
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                                <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ padding: "10px" }}>
                    <div className="card-img-body" style={{ height: "370px" }}>
                        <img className="card-img" src={slika1} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            {selectedLanguage === "English"
                                ? "NEW HOUSE - VIS RUKAVAC"
                                : "NOVOGRADNJA - VIS RUKAVAC"}
                        </h4>
                        <p className="card-text">
                            {selectedLanguage === "English"
                                ? "Newly built 3-room house with move-in deadline Summer 2023."
                                : "Novogradnja 3-sobna kuca sa rokom useljenja Ljeto 2023"}
                        </p>
                        <p>
                            {selectedLanguage === "English"
                                ? "View of the sea and nature."
                                : "Pogled na more i prirodu"}
                        </p>
                        <p>
                            {selectedLanguage === "English"
                                ? "A quiet neighborhood full of greenery."
                                : "Miran kraj prepun zelenila"}
                        </p>
                        <a href="#" className="btn btn-outline-secondary">
                            {selectedLanguage === "English" ? "More details" : "Detaljnije"}
                        </a>
                        <div className="icon_container_right">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="#C99B11"
                                className="bi bi-house-door"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
