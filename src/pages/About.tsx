import AboutComponent from "../components/AboutComponent";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLang } from "../i18n";

const AboutUs = () => {
    const { t } = useLang();
    useDocumentMeta(
        t("About", "O nama"),
        t(
            "Ten years of construction experience, now operating throughout Croatia and Dalmatia.",
            "Deset godina iskustva u građevini, sada s djelovanjem diljem Hrvatske i Dalmacije."
        )
    );
    return <AboutComponent />;
};

export default AboutUs;
