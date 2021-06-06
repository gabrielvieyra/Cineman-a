import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../App.css";
import detailMovie from "../../data/movie-detail.json";

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
                    <Col lg={6} className="p-3 video-heigh">
                        <iframe
                            className="w-100 h-100"
                            src={pelicula.pel_trailer}
                            frameborder="0"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title={pelicula.pel_titulo}
                        ></iframe>
                    </Col>
                    <Col lg={6} className="p-3">
                        <h2 className="title-detalle mb-2 p-2 font-weight-normal">
                            Sinopsis
                        </h2>
                        <p className="p-2 m-0">{pelicula.pel_sinopsis}</p>

                        <h2 className="title-detalle mb-2 p-2 font-weight-normal">
                            Datos Técnicos
                        </h2>
                        <div className="d-flex justify-content-between px-2">
                            <span>Origen</span>
                            <span>{pelicula.ori_pais}</span>
                        </div>
                        <div className="d-flex justify-content-between px-2">
                            <span>Género</span>
                            <span>{pelicula.gen_genero}</span>
                        </div>
                        <div className="d-flex justify-content-between px-2">
                            <span>Director</span>
                            <span>{pelicula.pel_director}</span>
                        </div>
                        <div className="d-flex justify-content-between px-2">
                            <span>Clasificación</span>
                            <span>{pelicula.cla_clasificación}</span>
                        </div>
                    </Col>

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
