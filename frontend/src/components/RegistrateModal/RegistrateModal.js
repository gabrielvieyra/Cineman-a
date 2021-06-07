import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../LoginModal/LoginModal.css";
import Swal from "sweetalert2";
import TextWithInputTwo from "../TextWithInputTwo/TextWithInputTwo";

const RegistrateModal = (props) => {
    const { show, handleHide } = props;

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

    const handleNombreCompletoChange = (inputValue) => {
        setNombreCompleto(inputValue);
    };

    const handleNombreUsuarioChange = (inputValue) => {
        setNombreUsuario(inputValue);
    };

    const handleEmailChange = (inputValue) => {
        setEmail(inputValue);
    };

    const handlePasswordChange = (inputValue) => {
        setPassword(inputValue);
    };

    return (
        <Modal className="login-modal" show={show} onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title className="login-title">Registrate</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <TextWithInputTwo
                    label="Nombre y apellido"
                    value={nombreCompleto}
                    handleCallback={handleNombreCompletoChange}
                    type="text"
                />

                <TextWithInputTwo
                    label="Nombre de usuario"
                    value={nombreUsuario}
                    handleCallback={handleNombreUsuarioChange}
                    type="text"
                />

                <TextWithInputTwo
                    label="Email"
                    value={email}
                    handleCallback={handleEmailChange}
                    type="email"
                />

                <TextWithInputTwo
                    label="Contraseña"
                    value={password}
                    handleCallback={handlePasswordChange}
                    type="password"
                />

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
