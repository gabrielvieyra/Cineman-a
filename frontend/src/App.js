import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Titulo from "./components/Titulo/Titulo";
import ListadoPeliculas from "./components/ListadoPeliculas/ListadoPeliculas";
import Slider from "./components/Slider/Slider";
import DetallePelicula from "./components/DetallePelicula/DetallePelicula";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ProximosEstrenos from "./components/ProximosEstrenos/ProximosEstrenos";
import DetalleProximamente from "./components/DetalleProximamente/DetalleProximamente";
import Footer from "./components/Footer/Footer";
import NoticiasCine from "./components/NoticiasCine/NoticiasCine";
import NoticiasSeries from "./components/NoticiasSeries/NoticiasSeries";
import AccordionCine from "./components/AccordionCine/AccordionCine";
import AccordionCandy from "./components/AccordionCandy/AccordionCandy";
import AccordionCandyBottom from "./components/AccordionCandyBottom/AccordionCandyBottom";
import cinemaDetail from "./data/cinema-detail.json";

function App() {
    const [usuario, setUsuario] = useState(null);
    const [searchPub, setSearchPub] = useState(null);

    const onLoginSuccess = (loggedUser) => {
        setUsuario(loggedUser);
    };

    const onLogout = () => {
        let url = "http://localhost:8888/auth";

        fetch(url, {
            method: "DELETE",
            credentials: "include"
        })
            .then((response) => response.json())
            .then((data) => {
                setUsuario(null);
            });
    };

    const handleSearchPubs = (terminoBuscado) => {
        if (terminoBuscado === "") {
            terminoBuscado = null;
        }

        setSearchPub(terminoBuscado);
    };

    return (
        <Router>
            <Container>
                <NavigationBar
                    user={usuario}
                    handleLoginSuccess={onLoginSuccess}
                    handleLogout={onLogout}
                    onSearchPubs={handleSearchPubs}
                />

                <Switch>
                    <Route
                        exact
                        path="/"
                        children={
                            <>
                                <Slider />

                                <Titulo titulo="Estrenos" />

                                <ListadoPeliculas
                                    type="peliculas"
                                    user={usuario}
                                    searchPub={searchPub}
                                />

                                <Titulo titulo="Próximos estrenos" />

                                <ProximosEstrenos
                                    type="proximamente"
                                    user={usuario}
                                    searchPub={searchPub}
                                />

                                <Titulo titulo="Noticias de cine" />

                                <NoticiasCine
                                    type="noticias"
                                    user={usuario}
                                    searchPub={searchPub}
                                />

                                <Titulo titulo="Noticias de series" />

                                <NoticiasSeries
                                    type="noticias"
                                    user={usuario}
                                    searchPub={searchPub}
                                />
                            </>
                        }
                    />

                    <Route
                        exact
                        path="/cines"
                        children={
                            <>
                                <Slider />
                                <Row className="mb-2">
                                    <Col>
                                        {cinemaDetail.cinemas.map(
                                            (cinema, key) => {
                                                return (
                                                    <AccordionCine
                                                        franquicia={
                                                            cinema.cinema
                                                        }
                                                        ubicacion={cinema.site}
                                                    />
                                                );
                                            }
                                        )}
                                    </Col>
                                </Row>
                            </>
                        }
                    />

                    <Route
                        exact
                        path="/candy"
                        children={
                            <>
                                <Slider />

                                <AccordionCandy categoria="Comidas" />

                                <AccordionCandyBottom categoria="Bebidas" />
                            </>
                        }
                    />

                    <Route
                        exact
                        path="/peliculas/:id"
                        children={<DetallePelicula />}
                    />

                    <Route
                        exact
                        path="/proximamente/:id"
                        children={<DetalleProximamente />}
                    />

                    {usuario && (
                        <>
                            <Route
                                exact
                                path="/favoritos"
                                children={
                                    <>
                                        <Titulo titulo="Peliculas favoritas" />

                                        <ListadoPeliculas
                                            user={usuario}
                                            type="favoritos"
                                            searchPub={searchPub}
                                        />

                                        <ProximosEstrenos
                                            user={usuario}
                                            type="favoritos"
                                            searchPub={searchPub}
                                        />

                                        <Titulo titulo="Noticias favoritas" />

                                        <NoticiasCine
                                            user={usuario}
                                            type="favoritos"
                                            searchPub={searchPub}
                                        />

                                        <NoticiasSeries
                                            user={usuario}
                                            type="favoritos"
                                            searchPub={searchPub}
                                        />
                                    </>
                                }
                            />

                            <Route
                                exact
                                path="/micuenta"
                                children={<Titulo titulo="Compras" />}
                            />
                        </>
                    )}

                    <Redirect to={{ pathname: "/" }} />
                </Switch>

                <Footer />
            </Container>
        </Router>
    );
}

export default App;
