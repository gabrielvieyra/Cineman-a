import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imgBadBoys from "../../assets/images/bad-boys.jpg";
import imgUnidos from "../../assets/images/unidos.jpg";
import imgSonic from "../../assets/images/sonic.jpg";
import imgAvesDePresa from "../../assets/images/aves-presa.jpg";

const Slider = () => {
    const dataCarousel = [
        {
            title: "Bad Boys",
            image: imgBadBoys,
            id: 1
        },
        {
            title: "Unidos",
            image: imgUnidos,
            id: 2
        },
        {
            title: "Sonic",
            image: imgSonic,
            id: 3
        },
        {
            title: "Aves de presa",
            image: imgAvesDePresa,
            id: 4
        }
    ];

    return (
        <Carousel className="mb-2">
            {dataCarousel.map((val, key) => {
                return (
                    <Carousel.Item key={val.id ? val.id : key}>
                        <img
                            className="d-block w-100"
                            src={val.image}
                            alt={`imagen de la pelicula ${val.title}`}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default Slider;
