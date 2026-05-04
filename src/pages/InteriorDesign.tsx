import InteriorDesignComponent from "../components/InteriorDesignComponent";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../i18n";

const InteriorDesign = () => {
    const { t } = useLang();
    useDocumentMeta(
        t("Interior Design", "Uređenje interijera"),
        t(
            "Tailored interior design that turns every space into a reflection of your style.",
            "Uređenje interijera prilagođeno vama, koje svaki prostor pretvara u odraz vašeg stila."
        )
    );
    return <InteriorDesignComponent />;
};

export default InteriorDesign;
