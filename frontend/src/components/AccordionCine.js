import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cine from './Cine';

const AcordeonCine = (props) => {

    return (
        <Accordion>
            <Card>

                <Card.Header className="p-2">
                    <Accordion.Toggle className="title m-0 font-weight-normal px-2 py-0" as={Button} variant="none" eventKey="0">
                        {props.franquicia}
                    </Accordion.Toggle>
                </Card.Header>

                <Container>
                    <Accordion.Collapse eventKey="0">
                        <Row>
                            <Col md={4} className="p-3">
                                <iframe src={props.ubicacion} className="w-100 h-100" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </Col>

                            <Cine />
                
                        </Row>
                    </Accordion.Collapse>
                </Container>
            
            </Card>
        </Accordion>
    )
}

export default AcordeonCine;

                    
