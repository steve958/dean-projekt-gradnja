import ConstructionComponent from "../components/ConstructionComponent";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../i18n";

const Construction = () => {
    const { t } = useLang();
    useDocumentMeta(
        t("Construction", "Izgradnja"),
        t(
            "Custom residential construction from foundation to handover, built to EU standards.",
            "Izgradnja stambenih objekata po mjeri od temelja do predaje, prema EU standardima."
        )
    );
    return <ConstructionComponent />;
};

export default Construction;
