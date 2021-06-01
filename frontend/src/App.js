import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Titulo from "./components/Titulo";
import ListadoPeliculas from "./components/ListadoPeliculas";
import Slider from "./components/Slider";
import DetallePelicula from "./components/DetallePelicula";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ProximosEstrenos from "./components/ProximosEstrenos";
import DetalleProximamente from "./components/DetalleProximamente";
import Footer from "./components/Footer/Footer";
import NoticiasCine from "./components/NoticiasCine";
import NoticiasSeries from "./components/NoticiasSeries";
import AccordionCine from "./components/AccordionCine/AccordionCine";
import AccordionCineBottom from "./components/AccordionCineBottom/AccordionCineBottom";
import AccordionCandy from "./components/AccordionCandy/AccordionCandy";
import AccordionCandyBottom from "./components/AccordionCandyBottom/AccordionCandyBottom";

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

                                <AccordionCine
                                    franquicia="Cinemanía Caballito"
                                    ubicacion="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5168066320443!2d-58.43085368423646!3d-34.61637806567606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca5b53585ed3%3A0xf9cb2435f6e602ca!2sAv.%20La%20Plata%2096%2C%20C1184AAN%20CABA!5e0!3m2!1ses!2sar!4v1585536661166!5m2!1ses!2sar"
                                />

                                <AccordionCine
                                    franquicia="Cinemanía Puerto Madero"
                                    ubicacion="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3290232731274!2d-58.36709428423636!3d-34.62112476592752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d193f8300d%3A0x36dda3cf7d0c7ce!2sAv.%20Alicia%20Moreau%20de%20Justo%201920%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1585542129614!5m2!1ses!2sar"
                                />

                                <AccordionCineBottom
                                    franquicia="Cinemanía Palermo"
                                    ubicacion="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6986946255333!2d-58.41245018423718!3d-34.5864897640948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca821285d881%3A0xda2445f84f2a86e0!2sBeruti%203399%2C%20C1425BBQ%20CABA!5e0!3m2!1ses!2sar!4v1585544213556!5m2!1ses!2sar"
                                />
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
