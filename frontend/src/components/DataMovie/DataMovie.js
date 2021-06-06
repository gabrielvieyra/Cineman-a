import React from "react";
import { Col } from "react-bootstrap";

function DataMovie(props) {
    const { classification, country, director, synopsis, type } = props;

    return (
        <Col lg={6} className="p-3">
            <h2 className="title-detalle mb-2 p-2 font-weight-normal">
                Sinopsis
            </h2>
            <p className="p-2 m-0">{synopsis}</p>

            <h2 className="title-detalle mb-2 p-2 font-weight-normal">
                Datos Técnicos
            </h2>
            <div className="d-flex justify-content-between px-2">
                <span>Origen</span>
                <span>{country}</span>
            </div>
            <div className="d-flex justify-content-between px-2">
                <span>Género</span>
                <span>{type}</span>
            </div>
            <div className="d-flex justify-content-between px-2">
                <span>Director</span>
                <span>{director}</span>
            </div>
            <div className="d-flex justify-content-between px-2">
                <span>Clasificación</span>
                <span>{classification}</span>
            </div>
        </Col>
    );
}

export default DataMovie;
