import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../App.css";
import detailMovie from "../../data/movie-detail.json";
import DataMovie from "../DataMovie/DataMovie";
import TrailerMovie from "../TrailerMovie/TrailerMovie";

const DetallePelicula = () => {
    const { id } = useParams();

    const [pelicula, setPelicula] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const getData = await fetch("http://localhost:8888/peliculas/" + id);
        const getJson = await getData.json();

        setPelicula(getJson);
    }

    return (
        pelicula && (
            <Container className="mb-2">
                <Row className="bg-white">
                    <TrailerMovie
                        trailer={pelicula.pel_trailer}
                        title={pelicula.pel_titulo}
                    />

                    <DataMovie
                        synopsis={pelicula.pel_sinopsis}
                        country={pelicula.ori_pais}
                        type={pelicula.gen_genero}
                        director={pelicula.pel_director}
                        classification={pelicula.cla_clasificación}
                    />

                    <Col lg={3} md={6} className="px-3 pb-sm-2 pb-0">
                        <div className="p-2 d-flex flex-row">
                            <label className="my-0 mr-2 reserva">
                                Complejos
                            </label>
                            <select className="complejos" custom>
                                {detailMovie.complexes.map((complex, key) => {
                                    return (
                                        <option key={key}>
                                            {complex.site}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </Col>
                    <Col
                        lg={5}
                        md={6}
                        className="px-3 pb-2 d-flex flex-sm-row flex-column"
                    >
                        <div className="p-2 reserva">Salas</div>
                        <div className="d-flex">
                            {detailMovie.rooms.map((sala, key) => {
                                return (
                                    <Button
                                        variant="none"
                                        className="btn-search mr-2"
                                        key={key}
                                    >
                                        {sala.type}
                                    </Button>
                                );
                            })}
                        </div>
                    </Col>
                    <Col
                        lg={4}
                        md={6}
                        className="px-3 pb-2 d-flex flex-sm-row flex-column"
                    >
                        <div className="p-2 reserva">Idiomas</div>
                        <div className="d-flex">
                            {detailMovie.languages.map((lenguage, key) => {
                                return (
                                    <Button
                                        variant="none"
                                        className="btn-search mr-2"
                                        key={key}
                                    >
                                        {lenguage.type}
                                    </Button>
                                );
                            })}
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="px-3 pb-2 d-flex flex-row">
                        <div className="p-2 reserva">Formatos</div>
                        {detailMovie.formats.map((format, key) => {
                            return (
                                <Button
                                    variant="none"
                                    className="btn-search mr-2"
                                    key={key}
                                >
                                    {format.type}
                                </Button>
                            );
                        })}
                    </Col>
                    <Col lg={4} md={6} className="px-3 pb-2 d-flex flex-row">
                        <div className="p-2">
                            <label className="my-0 mr-2 reserva">Fecha</label>
                            <input className="complejos" type="date"></input>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className="px-3 pb-2 d-flex flex-row">
                        <div className="p-2 reserva">Hora</div>
                        {detailMovie.schedule.map((schedule, key) => {
                            return (
                                <Button
                                    variant="none"
                                    className="btn-search mr-2"
                                    key={key}
                                >
                                    {schedule.hour}
                                </Button>
                            );
                        })}
                    </Col>
                    <Col lg={2} className="px-3 pb-2 d-flex flex-row">
                        <Button variant="none" className="btn-search">
                            Reservar
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    );
};

export default DetallePelicula;
