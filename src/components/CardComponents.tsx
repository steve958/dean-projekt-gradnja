import { useLang } from "../i18n";
import "./CardComponents.css";

export default function CardComponents() {
    const { t } = useLang();

    const cards = [
        {
            title: t("High quality", "Vrhunska kvaliteta"),
            text: t(
                "Top-grade materials and craftsmanship built to EU standards on every project we deliver.",
                "Vrhunski materijali i izrada po EU standardima na svakom projektu koji isporučujemo."
            ),
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M10.53 5.968h-.843v4.06h.843c1.117 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm5.396 3.001V11H6.209V8.43H3.687V11H2.5V5.001h1.187v2.44h2.522V5h1.187zM8.5 11V5.001h2.188c1.824 0 2.685 1.09 2.685 2.984C13.373 9.893 12.5 11 10.69 11H8.5z" />
                </svg>
            ),
        },
        {
            title: t("Within the budget", "U okviru budžeta"),
            text: t(
                "Honest pricing and transparent estimates with no hidden costs or last-minute surprises.",
                "Iskrene cijene i transparentne procjene bez skrivenih troškova i neočekivanih iznenađenja."
            ),
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
                </svg>
            ),
        },
        {
            title: t("On time, every time", "U dogovorenom roku"),
            text: t(
                "Realistic timelines and reliable delivery on the dates we agree, communicated step by step.",
                "Realni rokovi i pouzdana isporuka u dogovorenim terminima, uz redovitu komunikaciju u svakom koraku."
            ),
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="why_us_section">
            <div className="container">
                <div className="divider">
                    {t("WHY CHOOSE US", "ZAŠTO ODABRATI NAS")}
                </div>
                <div className="row g-4 justify-content-center">
                    {cards.map((c) => (
                        <div
                            className="col-12 col-sm-6 col-lg-4"
                            key={c.title}
                        >
                            <div className="why_card">
                                <div className="why_card_icon">{c.svg}</div>
                                <h3 className="why_card_title">{c.title}</h3>
                                <p className="why_card_text">{c.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
