import React from "react";
import { Accordion, Card, Button, Row, Col, Container } from "react-bootstrap";
import RoomsCinema from "../RoomsCinema/RoomsCinema";

const AcordeonCine = (props) => {
    const { franquicia, ubicacion } = props;

    return (
        <Accordion>
            <Card>
                <Card.Header className="p-2">
                    <Accordion.Toggle
                        className="title m-0 font-weight-normal px-2 py-0"
                        as={Button}
                        variant="none"
                        eventKey="0"
                    >
                        {franquicia}
                    </Accordion.Toggle>
                </Card.Header>

                <Container>
                    <Accordion.Collapse eventKey="0">
                        <Row>
                            <Col md={4} className="p-3">
                                <iframe
                                    src={ubicacion}
                                    className="w-100 h-100"
                                    frameborder="0"
                                    allowfullscreen=""
                                    aria-hidden="false"
                                    tabindex="0"
                                    title={franquicia}
                                ></iframe>
                            </Col>

                            <RoomsCinema />
                        </Row>
                    </Accordion.Collapse>
                </Container>
            </Card>
        </Accordion>
    );
};

export default AcordeonCine;
