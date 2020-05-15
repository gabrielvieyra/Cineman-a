import React, {useState} from 'react';
import './styles/NavigationBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../logo.svg';
import LoginModal from './LoginModal';
import {Link} from 'react-router-dom';
import RegistrateModal from './RegistrateModal';

const NavigationBar = (props) => {

  const [showLoginModal, setLoginModal] = useState(false);

  const handleHideLoginModal = () =>{
      setLoginModal(false);
  }

  const handleShowLoginModal = () =>{
      setLoginModal(true);
  }

  const [showRegistrateModal, setRegistrateModal] = useState(false);

  const handleHideRegistrateModal = () =>{
      setRegistrateModal(false);
  }

  const handleShowRegistrateModal = () =>{
      setRegistrateModal(true);
  }

  return (
    <>
    <Navbar className="bg-light mb-2" expand="xl">
     
      <Link to={"/"} className="pt-0 navbar-brand">
        <img className="logo" src={logo}></img>
      </Link>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          
          <Link to={"/cines"} className="nav-header nav-link">Cines</Link>
          
          <Link to={"/candy"} className="nav-header nav-link">Candy</Link>
          
          <Link to={"/noticias"} className="nav-header nav-link">Noticias</Link>
          
        </Nav>

        <Form className="pl-2 search-media" inline>
          <FormControl className="py-0 pl-2 pr-0 search" type="text" method="post" max-length="30" autocomplete="off" placeholder="Peliculas, Cines y más..." />
          <Button className="btn-search ml-2" variant="none">
            <i className="fas fa-search"></i>
          </Button>
        </Form>

        <Nav className="ml-auto">

          { !props.user 
              ?
                  <>
                  <Button variant="none" className="btn-margin btn-search" onClick={ handleShowLoginModal }>Ingresar</Button>

                  <Button variant="none" className="btn-search" onClick={ handleShowRegistrateModal }>Registrate</Button>
                  
                  </>
              :
                  <>
              
                  <Link to={"/favoritos"} className="nav-header nav-link">Favoritos</Link>
                
                  <NavDropdown alignRight title={props.user.nombre}>
                    <NavDropdown.Item className="nav-header">Mi cuenta</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="nav-header" onClick={props.handleLogout}>Cerrar sesión</NavDropdown.Item>
                  </NavDropdown> 
                  </>
          }
        </Nav>
      </Navbar.Collapse>

    </Navbar>

    <LoginModal show={showLoginModal} 
                handleHide={handleHideLoginModal}
                handleLoginSuccess={props.handleLoginSuccess}
    
    />

    <RegistrateModal show={showRegistrateModal} handleHide={handleHideRegistrateModal}/>
    
    </>
  )
}

export default NavigationBar;

                      

                

                    
                
            
        