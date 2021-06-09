import React from "react";
import { Accordion, Card, Button, Row, Container } from "react-bootstrap";
import Comidas from "../Comidas/Comidas";
import Bebidas from "../Bebidas/Bebidas";
import "../../App.css";

const AcordeonCandy = (props) => {
    const { title, type } = props;

    return (
        <Accordion>
            <Card>
                <Card.Header className="p-2">
                    <Accordion.Toggle
                        className="titulos m-0 font-weight-normal px-2 py-0"
                        as={Button}
                        variant="none"
                        eventKey="0"
                    >
                        {title}
                    </Accordion.Toggle>
                </Card.Header>

                <Container>
                    <Accordion.Collapse eventKey="0">
                        <Row>{type === "food" ? <Comidas /> : <Bebidas />}</Row>
                    </Accordion.Collapse>
                </Container>
            </Card>
        </Accordion>
    );
};

export default AcordeonCandy;
