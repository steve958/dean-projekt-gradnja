import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineHighQuality } from 'react-icons/md';
import { RiMoneyEuroBoxLine } from 'react-icons/ri';
import { IoMdTimer } from 'react-icons/io';

function CardComponents() {
    return (
        <Container style={{ marginTop: '50px', width: '100%' }}>
            <Row>
                <Col lg={4} md={6} sm={18} className="card_content">
                    <Card style={{ width: '100%', backgroundColor: 'white' }}>
                        <Card.Body style={{ display: 'flex', padding: '20px', justifyContent: 'center', alignItems: 'center' }}>
                            <MdOutlineHighQuality size={60} color='#C99B11' />
                            <Card.Title style={{ color: '#C99B11' }}>HIGH QUALITY</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={18} className="card_content">
                    <Card style={{ width: '100%', backgroundColor: 'white' }}>
                        <Card.Body style={{ display: 'flex', padding: '20px', justifyContent: 'center', alignItems: 'center' }}>
                            <RiMoneyEuroBoxLine size={60} color='#C99B11' />
                            <Card.Title style={{ color: '#C99B11' }}>WITHIN THE BUDGET</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={18} className="card_content">
                    <Card style={{ width: '100%', backgroundColor: 'white' }}>
                        <Card.Body style={{ display: 'flex', padding: '20px', justifyContent: 'center', alignItems: 'center' }}>
                            <IoMdTimer size={60} color='#C99B11' />
                            <Card.Title style={{ color: '#C99B11' }}>WITHIN THE TIME LIMIT</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CardComponents;
