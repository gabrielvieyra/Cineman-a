import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './styles/Detalle.css';

const DetallePelicula = () => {

    let { id } = useParams();

    let [pelicula, setPelicula] = useState(null);

    useEffect(
        ()=>{

            fetch('http://localhost:8888/peliculas/' + id).then(
                response => response.json()
            ).then( data => {
                setPelicula(data);
                console.log(data);
            })
        }, []
    )

    return (

        pelicula && 
        <Container className="mb-2">
            <Row className="bg-white">
                <Col lg={6} className="p-3 video-heigh">
                    <iframe className="w-100 h-100" src={pelicula.pel_trailer} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>

                <Col lg={6} className="p-3">
                    <h2 className="title-detalle mb-2 p-2 font-weight-normal">Sinopsis</h2>

                    <p className="p-2 m-0">
                        {pelicula.pel_sinopsis}
                    </p>

                    <h2 className="title-detalle mb-2 p-2 font-weight-normal">Datos Técnicos</h2>

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
            
                <Col lg={3} className="px-3 pb-2">
                    <div className="p-2 d-flex flex-row">
                        <label className="my-0 mr-2 reserva">Complejos</label>

                        <select custom>
                            <option>Seleccione</option>
                            <option>Caballito</option>
                            <option>Puerto Madero</option>
                            <option>Palermo</option>
                        </select>
                    </div>
                </Col>
                       
                <Col lg={5} className="px-3 pb-2 d-flex flex-row">
                  <div className="p-2 reserva">Salas</div>

                  <Button variant="none" className="btn-search mr-2">Classic</Button>
                  <Button variant="none" className="btn-search mr-2">GC</Button>
                  <Button variant="none" className="btn-search mr-2">4D</Button>
                  <Button variant="none" className="btn-search">MS</Button>
                </Col>

                <Col lg={4} className="px-3 pb-2 d-flex flex-row">
                  <div className="p-2 reserva">Idiomas</div>

                  <Button variant="none" className="btn-search mr-2">Español</Button>
                  <Button variant="none" className="btn-search">Subtitulado</Button>
                </Col>

                <Col lg={3} className="px-3 pb-2 d-flex flex-row">
                  <div className="p-2 reserva">Formatos</div>

                  <Button variant="none" className="btn-search mr-2">2D</Button>
                  <Button variant="none" className="btn-search">3D</Button>
                </Col>

                <Col lg={4} className="px-3 pb-2 d-flex flex-row">
                  <div className="p-2">
                    <label className="my-0 mr-2 reserva">Fecha</label>
                    <input type="date"></input>
                  </div>
                </Col>

                <Col lg={3} className="px-3 pb-2 d-flex flex-row">
                  <div className="p-2 reserva">Hora</div>

                  <Button variant="none" className="btn-search mr-2">17:00</Button>
                  <Button variant="none" className="btn-search">22:00</Button>
                </Col>

                <Col lg={2} className="px-3 pb-2 d-flex flex-row">

                  <Button variant="none" className="btn-search">Reservar</Button>

                </Col>
            </Row>
        </Container>
    )
}

export default DetallePelicula;
