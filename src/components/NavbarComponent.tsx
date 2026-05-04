import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarComponent.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { changeLanguage } from "../features/languageSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLang } from "../i18n";
import croFlag from "../assets/croatia.jpg";
import engFlag from "../assets/english.jpg";

export default function NavbarComponent() {
    const { isEng, t } = useLang();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLanguageChange = (language: string) => {
        dispatch(changeLanguage(language));
    };

    return (
        <Navbar
            bg="light"
            expand="lg"
            sticky="top"
            className={`app_navbar${scrolled ? " app_navbar--scrolled" : ""}`}
        >
            <Container>
                <Navbar.Brand
                    onClick={() => navigate("/")}
                    style={{ fontWeight: "700", cursor: "pointer" }}
                >
                    DEAN PROJEKT GRADNJA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto" style={{ fontSize: "18px" }}>
                        <Nav.Link onClick={() => navigate("/")}>
                            {t("Home", "Početna")}
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate("/about")}>
                            {t("About", "O nama")}
                        </Nav.Link>
                        <NavDropdown
                            title={t("Our services", "Naše usluge")}
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item onClick={() => navigate("/realestate")}>
                                {t("Real Estate sale", "Prodaja nekretnina")}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/renovation")}>
                                {t(
                                    "Renovation and finishing works",
                                    "Renoviranje i završni radovi"
                                )}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/construction")}>
                                {t("Residential construction", "Izgradnja objekata")}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/interior-design")}>
                                {t("Interior design", "Uređenje interijera")}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => navigate("/contact")}>
                            {t("Contact", "Kontakt")}
                        </Nav.Link>
                        <span className="flag_wrapper">
                            <Nav.Link onClick={() => handleLanguageChange("English")}>
                                <img
                                    src={engFlag}
                                    alt="English"
                                    style={{ width: "35px" }}
                                    className={isEng ? "flag_active" : ""}
                                />
                            </Nav.Link>
                            <Nav.Link onClick={() => handleLanguageChange("Croatian")}>
                                <img
                                    src={croFlag}
                                    alt="Croatian"
                                    style={{ width: "35px" }}
                                    className={!isEng ? "flag_active" : ""}
                                />
                            </Nav.Link>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
