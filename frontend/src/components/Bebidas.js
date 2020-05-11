import React from 'react';
import './styles/AccordionCandy.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Precios from './Precios';

const Bebidas = () => {

    return (
        <>
        <Col lg={4} className="p-3">

        <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">Cervezas</Card.Title>

        <Precios categoria="Quilmes-chopp"
                 precio="$170"
        />

        <Precios categoria="Stella Artois-copa"
                 precio="$190"
        />

        <Precios categoria="Patagonia-copa"
                 precio="$200"
        />

        <Precios categoria="Corona 355cc"
                 precio="$200"
        />

        <Card.Title className="title bg-light my-2 p-2 font-weight-normal">Vinos</Card.Title>

        <Precios categoria="Copa de vino (línea Elementos)"
                 precio="$110"
        />

        <Precios categoria="Copa de vino (línea Don David)"
                 precio="$150"
        />

        <Precios categoria="Botella Elementos (750 cc)"
                 precio="$310"
        />

        <Precios categoria="Botella Don David (750 cc)"
                 precio="$370"
        />
        
        </Col>

        <Col lg={4} className="p-3">

        <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">Sin alcohol</Card.Title>

        <Precios categoria="Agua"
                 precio="$100"
        />

        <Precios categoria="Agua saborizada"
                 precio="$100"
        />

        <Precios categoria="Gaseosas"
                 precio="$160"
        />

        <Precios categoria="Jugo de naranja cepita (400cc)"
                 precio="$120"
        />

        <Card.Title className="title bg-light my-2 p-2 font-weight-normal">Aperitivos</Card.Title>

        <Precios categoria="Campari con Naranja"
                 precio="$170"
        />

        <Precios categoria="Aperol Spritz"
                 precio="$170"
        />

        <Precios categoria="Fernet Branca con Coca Cola"
                 precio="$170"
        />

        <Precios categoria="Fernet Branca Menta con Sprite"
                 precio="$170"
        />

        <Precios categoria="Carpano Rosso con pomelo"
                 precio="$160"
        />
        </Col>

        <Col lg={4} className="p-3">

        <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">Cafeteria</Card.Title>

        <Precios categoria="Café Nesspreso"
                 precio="$110"
        />

        <Precios categoria="Café cortado"
                 precio="$110"
        />

        <Precios categoria="Café con leche"
                 precio="$120"
        />

        <Precios categoria="Choco Macchiato"
                 precio="$120"
        />

        <Precios categoria="Vainilla Late"
                 precio="$120"
        />

        <Precios categoria="Café con dos medialunas"
                 precio="$180"
        />

        <Precios categoria="Té (consultar variedades)"
                 precio="$100"
        />

        <Precios categoria="Café con tostado"
                 precio="$270"
        />
        </Col>
    </>
    )
}

export default Bebidas;

                

