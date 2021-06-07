import React, { useState } from "react";
import {
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button
} from "react-bootstrap";
import "./NavigationBar.css";
import logo from "../../assets/logo.svg";
import isotipo from "../../assets/signo.svg";
import LoginModal from "../LoginModal/LoginModal";
import { Link, useHistory } from "react-router-dom";
import RegistrateModal from "../RegistrateModal/RegistrateModal";

const NavigationBar = (props) => {
    const { onSearchPubs, user, handleLogout, handleLoginSuccess } = props;

    const history = useHistory();

    const [showLoginModal, setLoginModal] = useState(false);
    const [showRegistrateModal, setRegistrateModal] = useState(false);
    const [terminoBuscado, setTerminoBuscado] = useState("");

    const handleHideLoginModal = () => {
        setLoginModal(false);
    };

    const handleShowLoginModal = () => {
        setLoginModal(true);
    };

    const handleHideRegistrateModal = () => {
        setRegistrateModal(false);
    };

    const handleShowRegistrateModal = () => {
        setRegistrateModal(true);
    };

    const handleTerminoBuscadoChange = (event) => {
        history.push("/");

        let busqueda = event.target.value;
        setTerminoBuscado(busqueda);

        onSearchPubs(busqueda);
    };

    return (
        <>
            <Navbar
                style={{ backgroundColor: "#fff" }}
                className="bg-light mb-2"
                expand="lg"
            >
                <Link to={"/"} className="py-0 navbar-brand">
                    <img
                        className="logo d-sm-block d-none"
                        alt="imagotipo"
                        src={logo}
                    />
                    <img
                        className="isotipo d-sm-none d-block"
                        alt="isotipo"
                        src={isotipo}
                    />
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="d-flex justify-content-between align-items-md-center w-100 mt-lg-0 mt-3 flex-md-row flex-column">
                        <div className="d-flex mb-md-0 mb-3 flex-sm-row flex-column">
                            <div className="d-flex mr-3 align-items-center mb-sm-0 mb-3">
                                <Link
                                    to={"/cines"}
                                    className="nav-header nav-link p-0 pr-3"
                                >
                                    Cines
                                </Link>
                                <Link
                                    to={"/candy"}
                                    className="nav-header nav-link p-0"
                                >
                                    Candy
                                </Link>
                            </div>
                            <Form className="pl-lg-2 pl-0 search-media d-flex flex-sm-row flex-column">
                                <FormControl
                                    className="py-0 pl-2 pr-0 search"
                                    type="text"
                                    method="post"
                                    max-length="30"
                                    autoComplete="off"
                                    placeholder="Peliculas, Noticias y más..."
                                    value={terminoBuscado}
                                    onChange={handleTerminoBuscadoChange}
                                />
                                <div className="mt-sm-0 mt-3">
                                    <Button
                                        className="btn-search ml-sm-2 ml-0"
                                        variant="none"
                                    >
                                        <i className="fas fa-search"></i>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                        <div>
                            {!user ? (
                                <div className="d-flex">
                                    <Button
                                        variant="none"
                                        className="btn-search"
                                        onClick={handleShowLoginModal}
                                    >
                                        Ingresar
                                    </Button>

                                    <Button
                                        variant="none"
                                        className="btn-search ml-3"
                                        onClick={handleShowRegistrateModal}
                                    >
                                        Registrate
                                    </Button>
                                </div>
                            ) : (
                                <div className="d-flex">
                                    <Link
                                        to={"/favoritos"}
                                        className="nav-header nav-link pl-md-3 pl-0"
                                    >
                                        Favoritos
                                    </Link>

                                    <NavDropdown title={user.nombre}>
                                        <NavDropdown.Item
                                            className="nav-header"
                                            onClick={() => {
                                                history.push("/micuenta");
                                            }}
                                        >
                                            Mi cuenta
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            className="nav-header"
                                            onClick={handleLogout}
                                        >
                                            Cerrar sesión
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            )}
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>

            <LoginModal
                show={showLoginModal}
                handleHide={handleHideLoginModal}
                handleLoginSuccess={handleLoginSuccess}
            />

            <RegistrateModal
                show={showRegistrateModal}
                handleHide={handleHideRegistrateModal}
            />
        </>
    );
};

export default NavigationBar;
