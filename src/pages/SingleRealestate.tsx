import { useParams } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../i18n";
import { realestate } from "../data/realestateData";

export default function SingleRealestate() {
    const { id } = useParams();
    const { isEng, t } = useLang();
    const property = realestate.find((p) => p.id.toString() === id);
    const title = property
        ? isEng
            ? property.titleEng
            : property.titleCro
        : t("Property", "Nekretnina");
    useDocumentMeta(title);
    return <PropertyCard />;
}
