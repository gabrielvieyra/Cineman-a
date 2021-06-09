import React from "react";
import "../../App.css";
import { Row, Container } from "react-bootstrap";

const Titulo = (props) => {
    const { titulo } = props;

    return (
        <Container>
            <Row className="bg-light mb-2">
                <h1 className="titulos m-0 p-2 font-weight-normal">{titulo}</h1>
            </Row>
        </Container>
    );
};

export default Titulo;
