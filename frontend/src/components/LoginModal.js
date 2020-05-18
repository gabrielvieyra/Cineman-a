import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './styles/LoginModal.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';

const LoginModal = (props) => {

	const handleLoginClick = ()=>{
			
			let url = 'http://localhost:8888/auth';

            let params = {
                            user:     nombreUsuario,
                            password: password
                         };

            fetch(url, {
                            method : 'POST',
                            credentials : 'include',
                            body: JSON.stringify( params ),
                            headers: {
                                        'Content-Type' : 'application/json'
                                     }
                       }
            ).then( response => response.json() )
             .then( data => {
                if ( data.status === 'ok' ){
					props.handleLoginSuccess(data.loggedUser);
					props.handleHide();       
                }else{
					Swal.fire(
						{
							text: data.message,
							icon: 'error'
						}
					)
                }
             });

	}

	const [nombreUsuario, setNombreUsuario] = useState('');
	const [password, setPassword] = useState(''); 

    const handleUserNameChange = (event)=>{
        setNombreUsuario( event.target.value );
	}
	
	const handlePasswordChange = (event)=>{
		setPassword( event.target.value );
	}

    return (
        <Modal className="login-modal" show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                <Modal.Title className="login-title">Ingresar</Modal.Title>
            </Modal.Header>

            <Modal.Body>

					<Form.Group>
						<Row>
							<Col md={4} className="py-2">
								<Form.Label className="m-0">Nombre de usuario</Form.Label>
							</Col>

							<Col md={8}>	
								<Form.Control type="text" 
											  required="required"
											  value={nombreUsuario}
											  onChange={handleUserNameChange}
								/>
    						</Col>
						</Row>
					</Form.Group>

  					<Form.Group>
						<Row>
							<Col md={4} className="py-2">
    							<Form.Label className="m-0">Contraseña</Form.Label>
							</Col>

							<Col md={8}>	
								<Form.Control type="password" 
											  required="required"
											  value={password}
											  onChange={handlePasswordChange}
								
								/>
    						</Col>
						</Row>
  					</Form.Group>
					
					<Form.Group>
						<Row>
							<Col md={4} className="py-2">
    							
							</Col>

							<Col md={8}>
								<Button variant="none" className="btn-search" type="submit" onClick={ handleLoginClick }>Ingresar</Button>																		
    						</Col>
						</Row>
  					</Form.Group>	

            </Modal.Body>
        </Modal>
    )
}

export default LoginModal;
