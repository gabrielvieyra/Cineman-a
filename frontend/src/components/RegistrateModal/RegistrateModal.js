import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../LoginModal/LoginModal.css";
import Swal from "sweetalert2";

const RegistrateModal = (props) => {
    const handleRegistroClick = () => {
        let url = "http://localhost:8888/auth/registro";

        let params = {
            nombre: nombreCompleto,
            user: nombreUsuario,
            email: email,
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
                    props.handleHide();
                    Swal.fire({
                        text: data.message,
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        text: data.message,
                        icon: "error"
                    });
                }
            });

        setNombreCompleto("");
        setNombreUsuario("");
        setEmail("");
        setPassword("");
    };

    const [nombreCompleto, setNombreCompleto] = useState("");
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNombreCompletoChange = (event) => {
        setNombreCompleto(event.target.value);
    };

    const handleNombreUsuarioChange = (event) => {
        setNombreUsuario(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <Modal
            className="login-modal"
            show={props.show}
            onHide={props.handleHide}
        >
            <Modal.Header closeButton>
                <Modal.Title className="login-title">Registrate</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group>
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control
                        type="text"
                        required="required"
                        value={nombreCompleto}
                        onChange={handleNombreCompletoChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control
                        type="text"
                        required="required"
                        value={nombreUsuario}
                        onChange={handleNombreUsuarioChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        required="required"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        required="required"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Button
                        variant="none"
                        className="btn-search"
                        onClick={handleRegistroClick}
                    >
                        Registrarme
                    </Button>
                </Form.Group>
            </Modal.Body>
        </Modal>
    );
};

export default RegistrateModal;
