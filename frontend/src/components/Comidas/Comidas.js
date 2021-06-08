import React from "react";
import "../AccordionCandy/AccordionCandy.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Precios from "../Room/Room";

const Comidas = () => {
    return (
        <>
            <Col lg={4} className="p-3">
                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Pizzas
                </Card.Title>

                <Precios categoria="Muzzarella" precio="$250" />

                <Precios categoria="Pizzeta de muzzarella" precio="$160" />

                <Precios categoria="Vegetariana" precio="$250" />

                <Precios categoria="Bastones de muzarella" precio="$250" />

                <Card.Title className="title bg-light my-2 p-2 font-weight-normal">
                    Sandwiches
                </Card.Title>

                <Precios categoria="Hamburguesa casera" precio="$290" />

                <Precios categoria="Sandwich de cerdo" precio="$300" />

                <Precios categoria="Lomito" precio="$300" />

                <Precios categoria="Panini vegetariano" precio="$290" />
            </Col>

            <Col lg={4} className="p-3">
                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Postres
                </Card.Title>

                <Precios categoria="Cremoso de chocolate" precio="$200" />

                <Precios categoria="Delicia de chocolate" precio="$200" />

                <Precios categoria="Crocante de manzana" precio="$200" />

                <Precios categoria="Helado freddo (dos bochas)" precio="$200" />

                <Card.Title className="title bg-light my-2 p-2 font-weight-normal">
                    Pastelería
                </Card.Title>

                <Precios categoria="Cheesecake" precio="$160" />

                <Precios categoria="Budín de limón" precio="$160" />

                <Precios categoria="Brownie con nueces" precio="$160" />

                <Precios categoria="Opción con café" precio="$250" />
            </Col>

            <Col lg={4} className="p-3">
                <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">
                    Cafeteria
                </Card.Title>

                <Precios categoria="Medialuna de manteca" precio="$45" />

                <Precios categoria="Café con dos medialunas" precio="$180" />

                <Precios categoria="Tostado de jamón y queso" precio="$200" />

                <Precios
                    categoria="Alfajor (consultar variedades)"
                    precio="$90"
                />

                <Card.Title className="title bg-light my-2 p-2 font-weight-normal">
                    Sugerencias
                </Card.Title>

                <Precios categoria="Balde de pochoclos" precio="$230" />

                <Precios
                    categoria="Balde de pochoclos + Bebida"
                    precio="$480"
                />

                <Precios categoria="Nachos con cheddar" precio="$250" />

                <Precios categoria="Agujas de pollo rebozadas" precio="$250" />
            </Col>
        </>
    );
};

export default Comidas;
