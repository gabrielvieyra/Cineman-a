import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function TextWithInput(props) {
    const { label, value, handleCallback, type } = props;

    function handleChange(e) {
        handleCallback(e.target.value);
    }

    return (
        <Form.Group>
            <Row>
                <Col md={4} className="py-2">
                    <Form.Label className="m-0">{label}</Form.Label>
                </Col>

                <Col md={8}>
                    <Form.Control
                        type={type}
                        required="required"
                        value={value}
                        onChange={handleChange}
                    />
                </Col>
            </Row>
        </Form.Group>
    );
}

export default TextWithInput;
