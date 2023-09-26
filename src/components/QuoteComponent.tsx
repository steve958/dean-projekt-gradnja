import "./QuoteComponent.css";

interface Props {
    selectedLanguage: string;
}

export default function QuoteComponent(props: Props) {
    const { selectedLanguage } = props;

    return (
        <div className="quote_container">
            <p>
                {selectedLanguage === "English"
                    ? "“The bitterness of poor quality remains long after the sweetness of low price is forgotten.”"
                    : "“Gorčina loše kvalitete ostaje dugo nakon što se zaboravi slatkoća niske cijene.”"}
            </p>
            <p style={{ alignSelf: "flex-end", color: "#C99B11" }}>
                - Benjamin Franklin
            </p>
        </div>
    );
}
