import "./QuoteComponent.css";

export default function QuoteComponent() {
    return (
        <div className="quote_container">
            <p>
                “The bitterness of poor quality remains long after the sweetness of low
                price is forgotten.”
            </p>
            <p style={{ alignSelf: 'flex-end', color: '#C99B11' }}>- Benjamin Franklin</p>
        </div>
    );
}
