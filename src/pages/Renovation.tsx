import RenovationComponent from "../components/RenovationComponent";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../i18n";

const Renovation = () => {
    const { t } = useLang();
    useDocumentMeta(
        t("Renovation", "Renoviranje"),
        t(
            "Comprehensive renovation and finishing works for homes and businesses.",
            "Sveobuhvatno renoviranje i završni radovi za domove i poslovne prostore."
        )
    );
    return <RenovationComponent />;
};

export default Renovation;
