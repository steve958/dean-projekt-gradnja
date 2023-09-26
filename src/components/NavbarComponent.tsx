import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ fontWeight: '700' }}>Dean Projekt Gradnja</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto" style={{ fontSize: '18px' }}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
