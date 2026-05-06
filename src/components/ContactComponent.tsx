import { useRef, useState } from "react";
import "./ContactComponent.css";
import emailjs from "@emailjs/browser";
import { useLang } from "../i18n";

const ADDRESS = "Petra Svačića 27, 21480 Vis, HR";
const EMAIL = "info@deanprojektgradnja.org";
const PHONE_DISPLAY = "+385 95 3466323";
const PHONE_TEL = "+385953466323";
const MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=Petra+Sva%C4%8Di%C4%87a+27%2C+21480+Vis%2C+HR";
const MAPS_EMBED =
    "https://www.google.com/maps?q=Petra+Sva%C4%8Di%C4%87a+27%2C+21480+Vis%2C+HR&output=embed";

export default function ContactComponent() {
    const { t } = useLang();
    const form = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        setStatus("sending");
        emailjs
            .sendForm(
                "service_9fb2576",
                "template_swiqmsz",
                form.current,
                "YzjcisuTMf4N1ViWq"
            )
            .then(
                () => {
                    setStatus("sent");
                    form.current?.reset();
                    setTimeout(() => setStatus("idle"), 4000);
                },
                () => {
                    setStatus("error");
                }
            );
    };

    return (
        <div className="container contact_container">
            <header className="contact_header">
                <h1 className="contact_title">
                    {t("Contact Us", "Kontaktirajte nas")}
                </h1>
                <p className="contact_subtitle">
                    {t(
                        "We will be glad to assist You",
                        "Rado ćemo Vam pomoći"
                    )}
                </p>
            </header>

            <div className="row g-4 contact_grid">
                <div className="col-lg-7">
                    <div className="contact_panel">
                        <h4 className="contact_panel_title">
                            {t("Send a message", "Pošaljite poruku")}
                        </h4>
                        <form
                            method="post"
                            onSubmit={handleSubmit}
                            ref={form}
                            className="contact_form"
                        >
                            <div className="mb-3">
                                <label htmlFor="user_name" className="form-label">
                                    {t("Name and surname", "Ime i prezime")}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="user_name"
                                    name="user_name"
                                    placeholder={t("Your full name", "Vaše ime i prezime")}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="user_email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="user_email"
                                    name="user_email"
                                    placeholder={t("you@example.com", "vi@primjer.com")}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    {t("Message", "Poruka")}
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder={t(
                                        "How can we help?",
                                        "Kako vam možemo pomoći?"
                                    )}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="contact_submit"
                            >
                                {status === "sending"
                                    ? t("Sending…", "Šaljem…")
                                    : t("Send message", "Pošalji poruku")}
                            </button>
                            {status === "sent" && (
                                <p className="contact_status contact_status--success">
                                    {t(
                                        "Message sent. Thank you!",
                                        "Poruka je poslana. Hvala!"
                                    )}
                                </p>
                            )}
                            {status === "error" && (
                                <p className="contact_status contact_status--error">
                                    {t(
                                        "Sending failed, please try again.",
                                        "Slanje nije uspjelo, pokušajte ponovno."
                                    )}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="contact_panel">
                        <h4 className="contact_panel_title">
                            {t("Get in touch", "Kontakt podaci")}
                        </h4>
                        <a
                            href={MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact_info_item"
                        >
                            <div className="contact_info_icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                            </div>
                            <div className="contact_info_text">
                                <div className="contact_info_label">
                                    {t("Address", "Adresa")}
                                </div>
                                <div className="contact_info_value">{ADDRESS}</div>
                            </div>
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="contact_info_item"
                        >
                            <div className="contact_info_icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                            </div>
                            <div className="contact_info_text">
                                <div className="contact_info_label">Email</div>
                                <div className="contact_info_value">{EMAIL}</div>
                            </div>
                        </a>
                        <a
                            href={`tel:${PHONE_TEL}`}
                            className="contact_info_item"
                        >
                            <div className="contact_info_icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    />
                                </svg>
                            </div>
                            <div className="contact_info_text">
                                <div className="contact_info_label">
                                    {t("Phone", "Telefon")}
                                </div>
                                <div className="contact_info_value">
                                    {PHONE_DISPLAY}
                                </div>
                            </div>
                        </a>

                        <div className="contact_map">
                            <iframe
                                src={MAPS_EMBED}
                                title={t("Office location", "Lokacija ureda")}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
