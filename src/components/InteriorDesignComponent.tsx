import { useEffect } from "react";
import { useLang } from "../i18n";
import "./InteriorDesignComponent.css";

const InteriorDesignComponent = () => {
    const { t } = useLang();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="container interior_soon">
            <div className="interior_soon_panel">
                <span className="interior_soon_badge">
                    {t("Coming soon", "Uskoro")}
                </span>
                <h1 className="interior_soon_title">
                    {t("Interior Design", "Uređenje interijera")}
                </h1>
                <p className="interior_soon_text">
                    {t(
                        "We're putting together our interior design portfolio. Check back soon to see our latest projects.",
                        "Pripremamo galeriju projekata uređenja interijera. Vratite se uskoro kako biste vidjeli naše najnovije radove."
                    )}
                </p>
            </div>
        </div>
    );
};

export default InteriorDesignComponent;
