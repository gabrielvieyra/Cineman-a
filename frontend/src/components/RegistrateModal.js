import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './styles/LoginModal.css';
import Form from 'react-bootstrap/Form';

const RegistrateModal = (props) => {

	const [registrateNombreCompleto, setRegistrateNombreCompleto] = useState('');
	const [registrateUsuario, setRegistrateUsuario] = useState('');
	const [registrateEmail, setRegistrateEmail] = useState('');
	const [registrateContraseña, setRegistrateContraseña] = useState('');

	const handleRegistrateNombreCompletoChange = event => {
		setRegistrateNombreCompleto( event.target.value );
	}

	const handleRegistrateUsuarioChange = event => { 
		setRegistrateUsuario( event.target.value );
	}

	const handleRegistrateEmailChange = event => {
		setRegistrateEmail( event.target.value );
	}

	const handleRegistrateContraseñaChange = event => {
		setRegistrateContraseña( event.target.value );
	}

	const handleSave = ()=>{

		const formData = new FormData();

		formData.append('registrateNombreCompleto', registrateNombreCompleto);
		formData.append('registrateUsuario', registrateUsuario);
		formData.append('registrateEmail', registrateEmail);
		formData.append('registrateContraseña', registrateContraseña);

		fetch('http://localhost:8888/auth', {
			method: 'POST',
            body: formData,
            credentials : 'include'
		})
		.then( response => response.json() )
        .then( data => {
			console.log(data);
		})
		.catch( error => {
			console.log('Error');
		})
	}

    return (
        <Modal className="login-modal" show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                <Modal.Title className="login-title">Registrate</Modal.Title>
            </Modal.Header>

            <Modal.Body>
				<Form.Group>
					<Form.Label>Nombre y apellido</Form.Label>
					<Form.Control type="text" 
					              required="required"
								  value={registrateNombreCompleto}
								  onChange={handleRegistrateNombreCompletoChange}

					/>

				</Form.Group>

				<Form.Group>
					<Form.Label>Nombre de usuario</Form.Label>
					<Form.Control type="text" 
					              required="required"
					              value={registrateUsuario}
								  onChange={handleRegistrateUsuarioChange}
					
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" 
					              required="required"
					              value={registrateEmail}
								  onChange={handleRegistrateEmailChange}
					
					/>
				</Form.Group>

			<Form.Group>
				<Form.Label>Contraseña</Form.Label>
				<Form.Control type="password" 
				              required="required"
				              value={registrateContraseña}
						      onChange={handleRegistrateContraseñaChange}
				
				/>
			</Form.Group>

				<Form.Group>
					<Button variant="none" className="btn-search" onClick={handleSave} >Registrarme</Button>
				</Form.Group>
            </Modal.Body>

        </Modal>
    )
}

export default RegistrateModal;

