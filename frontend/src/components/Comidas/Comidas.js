import React from "react";
import "../AccordionCandy/AccordionCandy.css";
import { Col, Card } from "react-bootstrap";
import cinemaDetail from "../../data/cinema-detail";

const Comidas = () => {
    return (
        <>
            <Col lg={4} className="p-3">
                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Pizzas
                </Card.Title>
                {cinemaDetail.pizzas.map((pizza, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{pizza.category}</p>
                            <p className="mb-0">{pizza.price}</p>
                        </div>
                    );
                })}

                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Sandwiches
                </Card.Title>
                {cinemaDetail.sandwiches.map((sandwich, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{sandwich.category}</p>
                            <p className="mb-0">{sandwich.price}</p>
                        </div>
                    );
                })}
            </Col>
            <Col lg={4} className="p-3">
                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Postres
                </Card.Title>
                {cinemaDetail.postres.map((postre, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{postre.category}</p>
                            <p className="mb-0">{postre.price}</p>
                        </div>
                    );
                })}

                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Pastelería
                </Card.Title>
                {cinemaDetail.pasteleria.map((pasteleria, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{pasteleria.category}</p>
                            <p className="mb-0">{pasteleria.price}</p>
                        </div>
                    );
                })}
            </Col>
            <Col lg={4} className="p-3">
                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Cafeteria
                </Card.Title>
                {cinemaDetail.cafeteria.map((cafeteria, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{cafeteria.category}</p>
                            <p className="mb-0">{cafeteria.price}</p>
                        </div>
                    );
                })}

                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Sugerencias
                </Card.Title>
                {cinemaDetail.sugerencias.map((sugerencia, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{sugerencia.category}</p>
                            <p className="mb-0">{sugerencia.price}</p>
                        </div>
                    );
                })}
            </Col>
        </>
    );
};

export default Comidas;
