import React from 'react';
import './styles/Cine.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Precios from './Precios';

const Cine = () => {

    return (
        <>
        <Col md={4} className="p-3">

        <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">Classic</Card.Title>

        <Precios categoria="General"
                 precio="$530"
        />

        <Precios categoria="Menor NAP"
                 precio="$380"
        />

        <Precios categoria="Jubilados NAP"
                 precio="$380"
        />

        <Precios categoria="Miércoles"
                 precio="$265"
        />

        <Card.Title className="title bg-light my-2 p-2 font-weight-normal">Gold class</Card.Title>

        <Precios categoria="General"
                 precio="$530"
        />

        <Precios categoria="Menor NAP"
                 precio="$380"
        />

        <Precios categoria="Jubilados NAP"
                 precio="$380"
        />

        <Precios categoria="Miércoles"
                 precio="$265"
        />
        
        </Col>

        <Col md={4} className="p-3">

        <Card.Title className="title bg-light mb-2 p-2 font-weight-normal">4D</Card.Title>

        <Precios categoria="General"
                 precio="$530"
        />

        <Precios categoria="Menor NAP"
                 precio="$380"
        />

        <Precios categoria="Jubilados NAP"
                 precio="$380"
        />

        <Precios categoria="Miércoles"
                 precio="$265"
        />

        <Card.Title className="title bg-light my-2 p-2 font-weight-normal">Monster screen</Card.Title>

        <Precios categoria="General"
                 precio="$530"
        />

        <Precios categoria="Menor NAP"
                 precio="$380"
        />

        <Precios categoria="Jubilados NAP"
                 precio="$380"
        />

        <Precios categoria="Miércoles"
                 precio="$265"
        />
    </Col>
    </>
    )
}

export default Cine;

                

