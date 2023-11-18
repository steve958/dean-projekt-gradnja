import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { realestate } from '../data/realestateData'
import { priceConverter } from "../helpers/priceconverter";
import "./RealestateComponent.css"
import { setSelectedProperty } from "../features/languageSlice";
import { Realestate } from "./PropertyCard";
import { useEffect } from "react";

const RealestateComponent = () => {

    const selectedLanguage = useAppSelector((state: RootState) => state.language.value)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const element = document.getElementsByClassName("headings");
        element[0]?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [])

    function handleSelectProperty(property: Realestate) {
        dispatch(setSelectedProperty(property))
        navigate(`/realestate/${property.id}`)
    }

    return (
        <div className="album bg-light">
            <div className="container">
                <div className="row">
                    <div className="card-header p-0">
                        <div className="text-center p-4 headings">
                            <h3>
                                {selectedLanguage === "English"
                                    ? "Real Estate sale"
                                    : "Prodaja nekretnina"}
                            </h3>
                        </div>
                    </div>
                    <p>
                        {selectedLanguage === "English"
                            ? "Our portfolio spans a wide range of properties, from luxurious estates to cozy family homes, and from prime commercial spaces to exclusive investment opportunities. Whether you're in search of a dream home, an office space that suits your business needs, or an investment that promises long-term growth, you'll find it within our carefully curated collection."
                            : "Naš portfelj obuhvaća širok raspon nekretnina, od luksuznih imanja do udobnih obiteljskih kuća, od vrhunskih poslovnih prostora do ekskluzivnih prilika za ulaganje. Bilo da ste u potrazi za kućom iz snova, uredskim prostorom koji odgovara vašim poslovnim potrebama ili investicijom koja obećava dugoročni rast, pronaći ćete to u našoj pažljivo odabranoj kolekciji."}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "Each property in our portfolio is meticulously selected for its exceptional quality, desirable location, and unique character. Our team of experienced real estate professionals works tirelessly to source properties that offer the perfect blend of aesthetics, functionality, and value."
                            : "Svaka nekretnina u našem portfelju pomno je odabrana zbog svoje iznimne kvalitete, poželjnog položaja i jedinstvenog karaktera. Naš tim iskusnih stručnjaka za nekretnine neumorno radi na pronalaženju nekretnina koje nude savršenu mješavinu estetike, funkcionalnosti i vrijednosti."}
                    </p>
                    <p>
                        {selectedLanguage === "English"
                            ? "We understand that real estate is not just about transactions, it's about fulfilling dreams and securing the future. That's why we strive to provide our clients with personalized guidance and support throughout the buying or selling process."
                            : "Vodimo se time da nekretnine nisu samo trgovina negose radi o ispunjenju snova i osiguravanju budućnosti. Zato nastojimo našim klijentima pružiti personalizirano vodstvo i podršku tijekom cijelog procesa kupnje ili prodaje."}
                    </p>
                    {realestate.map((realestate: Realestate) => {
                        return (
                            <div className="col-md-4" key={realestate.id} style={{ position: 'relative' }} >
                                {realestate.status === 'sold' && <p className="sold_stamp text-large">{selectedLanguage === "English" ? 'SOLD' : 'PRODANO'}</p>}
                                <div className="card card_realestate mb-4 box-shadow" id={realestate.status}>
                                    <img
                                        src={realestate.mainImage}
                                        alt="Album cover"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-text">{selectedLanguage === 'English' ? realestate.titleEng : realestate.titleCro}</h5>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <a className={`btn btn-outline-secondary ${realestate.status !== 'active' ? 'disabled' : ''}`} onClick={() => handleSelectProperty(realestate)}>
                                                {selectedLanguage === "English" ? "More details" : "Detaljnije"}
                                            </a>
                                            <h2 className="card-text">
                                                {priceConverter(realestate.price)}€
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div >
    );
};

export default RealestateComponent;