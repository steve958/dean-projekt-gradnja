import ContactComponent from "../components/ContactComponent";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../i18n";

export default function Contact() {
    const { t } = useLang();
    useDocumentMeta(
        t("Contact", "Kontakt"),
        t(
            "Get in touch with Dean Projekt Gradnja for construction, renovation, real estate and interior design.",
            "Kontaktirajte Dean Projekt Gradnja za izgradnju, renoviranje, nekretnine i uređenje interijera."
        )
    );
    return <ContactComponent />;
}
