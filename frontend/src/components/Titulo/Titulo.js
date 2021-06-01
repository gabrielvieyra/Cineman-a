import React from "react";
import "../../App.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Titulo = (props) => {
    return (
        <Container>
            <Row className="bg-light mb-2">
                <div>
                    <div>
                        <h1 className="titulos m-0 p-2 font-weight-normal">
                            {props.titulo}
                        </h1>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Titulo;
