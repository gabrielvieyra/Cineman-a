import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import "./LoginModal.css";
import Swal from "sweetalert2";
import TextWithInput from "../TextWithInput/TextWithInput";

const LoginModal = (props) => {
    const { show, handleLoginSuccess, handleHide } = props;

    const handleLoginClick = () => {
        let url = "http://localhost:8888/auth";

        let params = {
            user: nombreUsuario,
            password: password
        };

        fetch(url, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "ok") {
                    Swal.fire({
                        text: data.message,
                        icon: "success"
                    });

                    handleLoginSuccess(data.loggedUser);
                    handleHide();
                } else {
                    Swal.fire({
                        text: data.message,
                        icon: "error"
                    });
                }
            });

        setNombreUsuario("");
        setPassword("");
    };

    const [nombreUsuario, setNombreUsuario] = useState("");
    const [password, setPassword] = useState("");

    const handleUserNameChange = (inputValue) => {
        setNombreUsuario(inputValue);
    };

    const handlePasswordChange = (inputValue) => {
        setPassword(inputValue);
    };

    return (
        <Modal className="login-modal" show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title className="login-title">Ingresar</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <TextWithInput
                    label="Nombre de usuario"
                    value={nombreUsuario}
                    handleCallback={handleUserNameChange}
                    type="text"
                />

                <TextWithInput
                    label="Contraseña"
                    value={password}
                    handleCallback={handlePasswordChange}
                />

                <Form.Group>
                    <Row>
                        <Col md={4} className="py-2"></Col>

                        <Col md={8}>
                            <Button
                                variant="none"
                                className="btn-search"
                                type="submit"
                                onClick={handleLoginClick}
                            >
                                Ingresar
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;
