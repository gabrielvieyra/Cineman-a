import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../App.css";
import DataMovie from "../DataMovie/DataMovie";
import TrailerMovie from "../TrailerMovie/TrailerMovie";

const DetalleProximamente = (props) => {
    let { id } = useParams();

    let [proximamente, setProximamente] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8888/proximamente/" + id)
            .then((response) => response.json())
            .then((data) => {
                setProximamente(data);
            });
    }, []);

    return (
        proximamente && (
            <Container className="mb-2">
                <Row className="bg-white">
                    <TrailerMovie
                        trailer={proximamente.pro_trailer}
                        title={proximamente.pro_titulo}
                    />

                    <DataMovie
                        synopsis={proximamente.pro_sinopsis}
                        country={proximamente.ori_pais}
                        type={proximamente.gen_genero}
                        director={proximamente.pro_director}
                        classification={proximamente.cla_clasificación}
                    />
                </Row>
            </Container>
        )
    );
};

export default DetalleProximamente;
