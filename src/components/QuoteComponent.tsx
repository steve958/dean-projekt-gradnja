import "./QuoteComponent.css";
import { useLang } from "../i18n";

export default function QuoteComponent() {
    const { t } = useLang();

    return (
        <div className="quote_container">
            <p>
                {t(
                    "“The bitterness of poor quality remains long after the sweetness of low price is forgotten.”",
                    "“Gorčina loše kvalitete ostaje dugo nakon što se zaboravi slatkoća niske cijene.”"
                )}
            </p>
            <p style={{ alignSelf: "flex-end", color: "var(--brand-gold)" }}>
                - Benjamin Franklin
            </p>
        </div>
    );
}
