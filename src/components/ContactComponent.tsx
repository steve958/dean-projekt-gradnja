import { useRef, useState } from "react";
import "./ContactComponent.css";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import emailjs from "@emailjs/browser";

interface Info {
    home: boolean;
    mail: boolean;
    phone: boolean;
}

export default function ContactComponent() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form = useRef<any>(null);

    const selectedLanguage = useAppSelector(
        (state: RootState) => state.language.value
    );

    const [infoClicked, setInfoClicked] = useState<Info>({
        home: false,
        mail: false,
        phone: false,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_9fb2576",
                "template_swiqmsz",
                form.current,
                "YzjcisuTMf4N1ViWq"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-12 pb-1">
                    <form method="post" onSubmit={handleSubmit} ref={form}>
                        <div className="card border-none rounded-2">
                            <div className="card-header p-0">
                                <div
                                    className="text-white text-center p-4"
                                    style={{ backgroundColor: "#45526E" }}
                                >
                                    <h3>
                                        {selectedLanguage === "English"
                                            ? "Contact Us"
                                            : "Kontaktirajte nas"}
                                    </h3>
                                    <p className="m-0">
                                        {selectedLanguage === "English"
                                            ? "We will be glad to assist you"
                                            : "Rado ćemo vam pomoći"}
                                    </p>
                                </div>
                            </div>
                            <div className="card-body p-5">
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="#45526E"
                                                    className="bi bi-person-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="user_name"
                                            name="user_name"
                                            placeholder={
                                                selectedLanguage === "English"
                                                    ? "Name and surname"
                                                    : "Ime i prezime"
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="#45526E"
                                                    className="bi bi-envelope-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="user_email"
                                            placeholder={
                                                selectedLanguage === "English" ? " Enter email" : "Vaš mail"
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="#45526E"
                                                    className="bi bi-chat-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            placeholder={
                                                selectedLanguage === "English"
                                                    ? "Your message"
                                                    : "Vaša poruka"
                                            }
                                            rows={1}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input
                                        type="submit"
                                        value={selectedLanguage === "English" ? "Send" : "Pošalji"}
                                        className="btn btn-block rounded-2 py-2 text-white"
                                        style={{ backgroundColor: "#45526E" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact_icons_container">
                <span
                    className="contact_icon_wrapper"
                    title="Donja Pastuša 23, Petrinja, HR"
                    onClick={() =>
                        setInfoClicked({
                            home: !infoClicked.home,
                            mail: false,
                            phone: false,
                        })
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="#45526E"
                        className="bi bi-house"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                    </svg>
                    <p>Donja Pastuša 23, Petrinja, HR</p>
                    {infoClicked.home && (
                        <p className="info">Donja Pastuša 23, Petrinja, HR</p>
                    )}
                </span>
                <span
                    className="contact_icon_wrapper"
                    title="info@deanprojektgradnja.com"
                    onClick={() =>
                        setInfoClicked({
                            home: false,
                            mail: !infoClicked.mail,
                            phone: false,
                        })
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="#45526E"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                    <p>info@deanprojektgradnja.com</p>
                    {infoClicked.mail && (
                        <p className="info">info@deanprojektgradnja.com</p>
                    )}
                </span>
                <span
                    className="contact_icon_wrapper"
                    title="+385 95 3466323"
                    onClick={() =>
                        setInfoClicked({
                            home: false,
                            mail: false,
                            phone: !infoClicked.phone,
                        })
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="#45526E"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                    </svg>
                    <p>+385 95 3466323</p>
                    {infoClicked.phone && <p className="info">+385 95 3466323</p>}
                </span>
            </div>
        </div>
    );
}
