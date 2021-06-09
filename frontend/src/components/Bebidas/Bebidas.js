import React from "react";
import "../../App.css";
import { Card, Col } from "react-bootstrap";
import cinemaDetail from "../../data/cinema-detail";

const Bebidas = () => {
    return (
        <>
            <Col lg={4} className="p-3">
                <Card.Title className="titulos bg-light mb-2 p-2 font-weight-normal">
                    Cervezas
                </Card.Title>
                {cinemaDetail.cervezas.map((cerveza, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{cerveza.category}</p>
                            <p className="mb-0">{cerveza.price}</p>
                        </div>
                    );
                })}

                <Card.Title className="titulos bg-light mb-2 p-2 font-weight-normal">
                    Vinos
                </Card.Title>
                {cinemaDetail.vinos.map((vino, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{vino.category}</p>
                            <p className="mb-0">{vino.price}</p>
                        </div>
                    );
                })}
            </Col>
            <Col lg={4} className="p-3">
                <Card.Title className="titulos bg-light mb-2 p-2 font-weight-normal">
                    Sin alcohol
                </Card.Title>
                {cinemaDetail.bebidasSinAlcohol.map((bebida, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{bebida.category}</p>
                            <p className="mb-0">{bebida.price}</p>
                        </div>
                    );
                })}

                <Card.Title className="titulos bg-light mb-2 p-2 font-weight-normal">
                    Aperitivos
                </Card.Title>
                {cinemaDetail.aperitivos.map((aperitivo, key) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={key}
                        >
                            <p className="mb-0">{aperitivo.category}</p>
                            <p className="mb-0">{aperitivo.price}</p>
                        </div>
                    );
                })}
            </Col>
            <Col lg={4} className="p-3">
                <Card.Title className="titulos bg-light mb-2 p-2 font-weight-normal">
                    Cafeteria
                </Card.Title>
                {cinemaDetail.cafeteriaCinema.map((cafeteria, key) => {
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
            </Col>
        </>
    );
};

export default Bebidas;
