import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <Carousel className="mb-2">
           <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/bad-boys.jpg"
                        alt="First Slide"
                    />
           </Carousel.Item>

           <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/unidos.jpg"
                        alt="Second Slide"
                    />
           </Carousel.Item>

           <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/sonic.jpg"
                        alt="Third Slide"
                    />
           </Carousel.Item>

           <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/aves-presa.jpg"
                        alt="Fourth Slide"
                    />
           </Carousel.Item>
        </Carousel> 
    )
}

export default Slider;

        

