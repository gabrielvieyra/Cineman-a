import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './styles/LoginModal.css';
import Form from 'react-bootstrap/Form';

const RegistrateModal = (props) => {

    return (
        <Modal className="login-modal" show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                <Modal.Title className="login-title">Registrate</Modal.Title>
            </Modal.Header>

            <Modal.Body>

				<Form autocomplete="off">
					<Form.Group>
						<Form.Label>Nombre de usuario</Form.Label>
						<Form.Control type="text" required="required"/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" required="required"/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Contraseña</Form.Label>
						<Form.Control type="password" required="required"/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Repetir contraseña</Form.Label>
						<Form.Control type="password" required="required"/>
					</Form.Group>

					<Form.Group>
						<Button variant="none" className="btn-search" type="submit">Registrarme</Button>
					</Form.Group>

				</Form>
				
            </Modal.Body>

        </Modal>
    )
}

export default RegistrateModal;

