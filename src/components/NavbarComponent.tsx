import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeLanguage } from "../features/languageSlice";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent() {
    const selectedLanguage = useAppSelector((state: RootState) => state?.language.value)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()


    const handleLanguageChange = (language: string) => {
        dispatch(changeLanguage(language));
    };

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')} style={{ fontWeight: "700" }}>
                    DEAN PROJEKT GRADNJA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto" style={{ fontSize: "18px" }}>
                        <Nav.Link onClick={() => navigate('/')}>
                            {selectedLanguage === "English" ? "Home" : "Početna"}
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate('/about')}>
                            {selectedLanguage === "English" ? "About" : "O nama"}
                        </Nav.Link>
                        <NavDropdown
                            title={
                                selectedLanguage === "English" ? "Our services" : "Naše usluge"
                            }
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/1">
                                {selectedLanguage === "English"
                                    ? "Real Estate sale"
                                    : "Prodaja nekretnina"}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/renovation")}>
                                {selectedLanguage === "English"
                                    ? "Renovation and adaptation"
                                    : "Renoviranje i adaptacija"}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/construction")}>
                                {selectedLanguage === "English"
                                    ? "Residential construction"
                                    : "Izgradnja objekata"}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title={selectedLanguage === "English" ? "Language" : "Jezik"}
                            id="language-dropdown"
                        >
                            <NavDropdown.Item
                                onClick={() => handleLanguageChange("English")}
                                active={selectedLanguage === "English"}
                            >
                                {selectedLanguage === "English" ? "English" : "Engleski"}
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => handleLanguageChange("Croatian")}
                                active={selectedLanguage === "Croatian"}
                            >
                                {selectedLanguage === "English" ? "Croatian" : "Hrvatski"}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => navigate('/contact')}>
                            {selectedLanguage === "English" ? "Contact" : "Kontakt"}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
