import BannerComponent from "../components/BannerComponent";
import QuoteComponent from "../components/QuoteComponent";
import ServicesComponent from "../components/ServicesComponent";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../i18n";

export default function HomePage() {
    const { t } = useLang();
    useDocumentMeta(
        t("Home", "Početna"),
        t(
            "Construction, renovation and interior design across Croatia. Real estate sale on Vis, Hvar and beyond.",
            "Izgradnja, renoviranje i uređenje interijera diljem Hrvatske. Prodaja nekretnina na Visu, Hvaru i šire."
        )
    );

    return (
        <>
            <BannerComponent />
            <QuoteComponent />
            <ServicesComponent />
        </>
    );
}
