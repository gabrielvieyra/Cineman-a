import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
    let currentYear = new Date();

    return (
        <Container>
            <Row className="bg-light d-flex align-items-center py-2">
                <Col md={4} className="copy">
                    <span>
                        &copy;
                        {` ${currentYear.getFullYear()} - Todos los derechos reservados`}
                    </span>
                </Col>

                <Col md={4} className="d-flex justify-content-center">
                    <img className="logo-footer" src={logo} alt=""></img>
                </Col>

                <Col md={4} className="d-flex justify-content-end icon">
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
    );
};

export default Footer;
