import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import "./ServicePage.css";

export interface BilingualText {
    eng: string;
    cro: string;
}

interface ServicePageProps {
    title: BilingualText;
    paragraphs: BilingualText[];
    images: string[];
}

const ServicePage = ({ title, paragraphs, images }: ServicePageProps) => {
    const { isEng, t } = useLang();
    const [lightbox, setLightbox] = useState<number | null>(null);

    useEffect(() => {
        const element = document.getElementsByClassName("headings");
        element[0]?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, []);

    useEffect(() => {
        if (lightbox === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox(null);
            if (e.key === "ArrowRight") {
                setLightbox((i) => (i === null ? null : (i + 1) % images.length));
            }
            if (e.key === "ArrowLeft") {
                setLightbox((i) =>
                    i === null ? null : (i - 1 + images.length) % images.length
                );
            }
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [lightbox, images.length]);

    return (
        <Container className="service_page">
            <Row>
                <Col>
                    <div className="card-header p-0">
                        <div className="text-center p-4 headings">
                            <h3>{isEng ? title.eng : title.cro}</h3>
                        </div>
                    </div>
                    {paragraphs.map((p) => (
                        <p key={p.eng}>{isEng ? p.eng : p.cro}</p>
                    ))}
                </Col>
            </Row>
            <Row>
                {images.map((image, idx) => (
                    <Col
                        key={image}
                        xs={6}
                        md={4}
                        lg={3}
                        className="mb-4 service_page_thumb_col"
                    >
                        <Image
                            src={image}
                            thumbnail
                            loading="lazy"
                            className="service_page_thumb"
                            onClick={() => setLightbox(idx)}
                            alt=""
                        />
                    </Col>
                ))}
            </Row>

            {lightbox !== null && (
                <div
                    className="lightbox_backdrop"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        className="lightbox_btn lightbox_btn--close"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightbox(null);
                        }}
                        aria-label={t("Close", "Zatvori")}
                    >
                        ×
                    </button>
                    <button
                        className="lightbox_btn lightbox_btn--prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightbox(
                                (lightbox - 1 + images.length) % images.length
                            );
                        }}
                        aria-label={t("Previous", "Prethodna")}
                    >
                        ‹
                    </button>
                    <img
                        src={images[lightbox]}
                        className="lightbox_image"
                        onClick={(e) => e.stopPropagation()}
                        alt=""
                    />
                    <button
                        className="lightbox_btn lightbox_btn--next"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightbox((lightbox + 1) % images.length);
                        }}
                        aria-label={t("Next", "Sljedeća")}
                    >
                        ›
                    </button>
                    <div className="lightbox_counter">
                        {lightbox + 1} / {images.length}
                    </div>
                </div>
            )}
        </Container>
    );
};

export default ServicePage;
