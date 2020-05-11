import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.svg';
import './styles/Footer.css';

const Footer = () => {

    return (
        <Container>
            <Row className="bg-light px-3 py-2 d-flex align-items-center">
                <Col md={4} className="pl-0 copy ">
                    <span>&copy; 2020 - Todos los derechos reservados</span>
                </Col>

                <Col md={4} className="d-flex justify-content-center">
                    <img className="logo-footer" src={logo}></img>
                </Col>

                <Col md={4} className="d-flex justify-content-end pr-0 icon">
                    <div className="d-flex align-items-end">
                        <i className="fab fa-facebook-square icon-footer mr-4"></i>
                    </div>
                    <div className="d-flex align-items-end">
                        <i className="fab fa-twitter icon-footer mr-4"></i>
                    </div>
                    <div className="d-flex align-items-end">
                        <i className="fab fa-youtube icon-footer mr-4"></i>
                    </div>
                    <div className="d-flex align-items-end">
                        <i className="fab fa-instagram icon-footer"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;

/*<div class="container">
          <footer class="row mt-2 bg-light">
            <div class="col-md-4  pt-4" id="copy">
                <span>&copy; 2020 - Todos los derechos reservados</span>
            </div>
            <div class="col-md-4 text-center p-2">
                <a class="navbar-brand" href="index.html">
                    <img src="img/signo_marcario.svg" alt="Logo del sitio" id="logo">
                </a>
            </div>

            <div class="col-md-4 pt-4 text-right icon">
                <ul class="navbar-nav d-inline">
                            
                    <li class="nav-item d-inline mr-4">
                        <i class="fab fa-facebook-square icon-footer"></i>
                    </li>

                    <li class="nav-item d-inline mr-4">
                        <i class="fab fa-twitter icon-footer"></i>
                    </li>

                    <li class="nav-item d-inline mr-4">
                        <i class="fab fa-youtube icon-footer"></i>
                   </li>

                   <li class="nav-item d-inline">
                        <i class="fab fa-instagram icon-footer"></i>
                    </li>

                </ul>
            </div>
        </footer>
        </div>*/
