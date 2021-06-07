import React from "react";
import { Form } from "react-bootstrap";

function TextWithInputTwo(props) {
    const { label, value, handleCallback, type } = props;

    function handleChange(e) {
        handleCallback(e.target.value);
    }

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                required="required"
                value={value}
                onChange={handleChange}
            />
        </Form.Group>
    );
}

export default TextWithInputTwo;
