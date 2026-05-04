import "./BannerComponent.css";
import { useNavigate } from "react-router-dom";
import banner from "../assets/renovation1.jpg";
import { useLang } from "../i18n";

export default function BannerComponent() {
    const { t } = useLang();
    const navigate = useNavigate();

    return (
        <section className="banner">
            <img
                src={banner}
                alt="Dean Projekt Gradnja"
                className="banner_image"
            />
            <button
                className="banner_cta"
                onClick={() => navigate("/realestate")}
            >
                {t("View properties", "Pogledajte ponudu")}
            </button>
        </section>
    );
}
