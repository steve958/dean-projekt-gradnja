import RealestateComponent from "../components/RealestateComponent";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../i18n";

export default function Realestate() {
    const { t } = useLang();
    useDocumentMeta(
        t("Real Estate", "Prodaja nekretnina"),
        t(
            "Houses, apartments and land for sale on Vis, Hvar and across Croatia.",
            "Kuće, stanovi i zemljišta na prodaju na Visu, Hvaru i diljem Hrvatske."
        )
    );
    return <RealestateComponent />;
}
