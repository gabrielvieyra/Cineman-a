import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Proximamente = (props) => {

    return (
        <Col lg={2} md={4} xs={6} className="d-flex align-items-stretch mb-2">
            <Card>
                <Link to={"/proximamente/" + props.id}>
                    <img className="card-img-top" src={props.imagen}></img>
                </Link>
            <Card.Body className="card-block bg-light p-2">
                <Card.Title className="mb-0">{props.nombre}</Card.Title>

                <hr className="my-1"></hr>
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

export default Proximamente;
