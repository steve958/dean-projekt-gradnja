import "./BannerComponent.css";
import { useNavigate } from "react-router-dom";
import banner from "../assets/renovation1.jpg";
import { useLang } from "../i18n";

export default function BannerComponent() {
    const { t } = useLang();
    const navigate = useNavigate();

    return (
        <section className="banner">
            <img src={banner} alt="" className="banner_image" />
            <div className="banner_overlay">
                <div className="banner_content">
                    <h1 className="banner_title">
                        {t(
                            "Building quality. Designing homes.",
                            "Gradimo kvalitetu. Stvaramo dom."
                        )}
                    </h1>
                    <p className="banner_subtitle">
                        {t(
                            "Construction, renovation and interior design across Croatia.",
                            "Izgradnja, renoviranje i uređenje interijera diljem Hrvatske."
                        )}
                    </p>
                    <button
                        className="banner_cta"
                        onClick={() => navigate("/realestate")}
                    >
                        {t("View properties", "Pogledajte ponudu")}
                    </button>
                </div>
            </div>
        </section>
    );
}
