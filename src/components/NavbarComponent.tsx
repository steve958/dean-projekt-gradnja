import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

interface Props {
    selectedLanguage: string
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>
}

export default function NavbarComponent(props: Props) {

    const { selectedLanguage, setSelectedLanguage } = props

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
    };

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" style={{ fontWeight: "700" }}>
                    DEAN PROJEKT GRADNJA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto" style={{ fontSize: "18px" }}>
                        <Nav.Link href="/">{selectedLanguage === 'English' ? 'Home' : 'Početna'}</Nav.Link>
                        <Nav.Link href="/about">{selectedLanguage === 'English' ? 'About' : 'O nama'}</Nav.Link>
                        <NavDropdown title={selectedLanguage === 'English' ? "Our services" : "Naše usluge"} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1">{selectedLanguage === 'English' ? 'Real Estate sale' : 'Prodaja nekretnina'}</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2">{selectedLanguage === 'English' ? 'Renovation and adaptation' : 'Renoviranje i adaptacija'}</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3">{selectedLanguage === 'English' ? 'Residential construction' : 'Izgradnja objekata'}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={selectedLanguage === 'English' ? "Language" : 'Jezik'} id="language-dropdown">
                            <NavDropdown.Item
                                onClick={() => handleLanguageChange("English")}
                                active={selectedLanguage === "English"}
                            >
                                {selectedLanguage === 'English' ? 'English' : 'Engleski'}
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => handleLanguageChange("Croatian")}
                                active={selectedLanguage === "Croatian"}
                            >
                                {selectedLanguage === 'English' ? 'Croatian' : 'Hrvatski'}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact">{selectedLanguage === 'English' ? 'Contact' : 'Kontakt'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

