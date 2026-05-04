import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { realestate } from "../data/realestateData";
import { priceConverter } from "../helpers/priceconverter";
import "./RealestateComponent.css";
import { setSelectedProperty } from "../features/languageSlice";
import { Realestate } from "./PropertyCard";
import { useEffect, useMemo, useState } from "react";
import { useLang } from "../i18n";

const RealestateComponent = () => {
    const { isEng, t } = useLang();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [selectedType, setSelectedType] = useState<string>("");

    useEffect(() => {
        const element = document.getElementsByClassName("headings");
        element[0]?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, []);

    const filtered = useMemo(
        () =>
            realestate.filter((entry: Realestate) =>
                selectedType ? entry.type === selectedType : true
            ),
        [selectedType]
    );

    function handleSelectProperty(property: Realestate) {
        dispatch(setSelectedProperty(property));
        navigate(`/realestate/${property.id}`);
    }

    return (
        <div className="album bg-light">
            <div className="container">
                <div className="row">
                    <div className="card-header p-0">
                        <div className="text-center p-4 headings">
                            <h3>{t("Real Estate sale", "Prodaja nekretnina")}</h3>
                        </div>
                    </div>
                    <p>
                        {t(
                            "Our portfolio spans a wide range of properties, from luxurious estates to cozy family homes, and from prime commercial spaces to exclusive investment opportunities. Whether you're in search of a dream home, an office space that suits your business needs, or an investment that promises long-term growth, you'll find it within our carefully curated collection.",
                            "Naš portfelj obuhvaća širok raspon nekretnina, od luksuznih imanja do udobnih obiteljskih kuća, od vrhunskih poslovnih prostora do ekskluzivnih prilika za ulaganje. Bilo da ste u potrazi za kućom iz snova, uredskim prostorom koji odgovara vašim poslovnim potrebama ili investicijom koja obećava dugoročni rast, pronaći ćete to u našoj pažljivo odabranoj kolekciji."
                        )}
                    </p>
                    <p>
                        {t(
                            "Each property in our portfolio is meticulously selected for its exceptional quality, desirable location, and unique character. Our team of experienced real estate professionals works tirelessly to source properties that offer the perfect blend of aesthetics, functionality, and value.",
                            "Svaka nekretnina u našem portfelju pomno je odabrana zbog svoje iznimne kvalitete, poželjnog položaja i jedinstvenog karaktera. Naš tim iskusnih stručnjaka za nekretnine neumorno radi na pronalaženju nekretnina koje nude savršenu mješavinu estetike, funkcionalnosti i vrijednosti."
                        )}
                    </p>
                    <p>
                        {t(
                            "We understand that real estate is not just about transactions, it's about fulfilling dreams and securing the future. That's why we strive to provide our clients with personalized guidance and support throughout the buying or selling process.",
                            "Vodimo se time da nekretnine nisu samo trgovina nego se radi o ispunjenju snova i osiguravanju budućnosti. Zato nastojimo našim klijentima pružiti personalizirano vodstvo i podršku tijekom cijelog procesa kupnje ili prodaje."
                        )}
                    </p>
                    <div className="select_type_wrapper">
                        <p
                            style={{
                                margin: "10px",
                                marginLeft: "0",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                        >
                            {t("Choose type:", "Odaberite tip:")}
                        </p>
                        <div className="dropdown show">
                            <select
                                className="form-select"
                                style={{ cursor: "pointer" }}
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                            >
                                <option value="" className="select_option">
                                    {t("All items", "Cjelokupna ponuda")}
                                </option>
                                <option value="house" className="select_option">
                                    {t("Houses", "Ponuda kuća")}
                                </option>
                                <option value="apartment" className="select_option">
                                    {t("Apartments", "Ponuda stanova")}
                                </option>
                                <option value="land" className="select_option">
                                    {t("Pieces of land", "Ponuda placeva")}
                                </option>
                            </select>
                        </div>
                    </div>

                    {filtered.length === 0 && (
                        <div className="empty_state">
                            <p>
                                {t(
                                    "No properties in this category at the moment.",
                                    "Trenutno nema nekretnina u ovoj kategoriji."
                                )}
                            </p>
                        </div>
                    )}

                    {filtered.map((entry: Realestate) => {
                        const isSold = entry.status === "sold";
                        return (
                            <div
                                className="col-md-4"
                                key={entry.id}
                                style={{ position: "relative" }}
                            >
                                <div
                                    className={`card card_realestate mb-4 box-shadow${isSold ? " card_realestate--sold" : ""
                                        }`}
                                    onClick={() =>
                                        !isSold && handleSelectProperty(entry)
                                    }
                                    role={isSold ? undefined : "button"}
                                    tabIndex={isSold ? -1 : 0}
                                    onKeyDown={(e) => {
                                        if (!isSold && e.key === "Enter")
                                            handleSelectProperty(entry);
                                    }}
                                >
                                    {isSold && (
                                        <span className="sold_ribbon">
                                            {t("SOLD", "PRODANO")}
                                        </span>
                                    )}
                                    <img
                                        src={entry.mainImage}
                                        alt={isEng ? entry.titleEng : entry.titleCro}
                                        className="card-img-top"
                                        loading="lazy"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-text">
                                            {isEng ? entry.titleEng : entry.titleCro}
                                        </h5>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <a
                                                className={`btn btn-outline-secondary ${isSold ? "disabled" : ""
                                                    }`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (!isSold) handleSelectProperty(entry);
                                                }}
                                            >
                                                {t("More details", "Detaljnije")}
                                            </a>
                                            <h2 className="card-text">
                                                {priceConverter(entry.price)}€
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RealestateComponent;
