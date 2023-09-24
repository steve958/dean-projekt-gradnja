import './CarouselComponent.css'
import Carousel from 'react-bootstrap/Carousel';
import slika1 from '../assets/house1.jpg'
import slika2 from '../assets/renovation.jpg'

export default function CarouselComponent() {
    return (
        <Carousel className='carousel'>
            {/* Slide 1 */}
            <Carousel.Item className='carousel_item'>
                <img
                    className="d-block w-100"
                    src={slika1}
                    alt="First slide"
                />
                <Carousel.Caption className='caption_container'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item className='carousel_item'>
                <img
                    className="d-block w-100"
                    src={slika2}
                    alt="Second slide"
                />

                <Carousel.Caption className='caption_container'>
                    <h3>Renovacija i adaptacija</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item className='carousel_item'>
                <img
                    className="d-block w-100"
                    src={slika1}
                    alt="Third slide"
                />

                <Carousel.Caption className='caption_container'>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
