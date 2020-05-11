import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Noticias = (props) => {

    return (
        <Col lg={4} className="d-flex align-items-stretch mb-2">
            <Card>
                <img className="card-img-top" src={props.imagen}></img>
            <Card.Body className="card-block bg-light p-2">
                <Card.Title className="mb-2">{props.titulo}</Card.Title>

                <Card.Text className="mb-0">{props.texto}</Card.Text>

                <hr className="my-2"></hr>

                <div className="d-flex justify-content-between">
                    <span>{props.fecha}</span>
                    <a className="text-dark" href="#">
                        <i class="fas font-weight-normal py-1 fa-heart"></i>
                    </a>
                </div>
            </Card.Body>

            </Card>
        </Col> 
    )
}

export default Noticias;
