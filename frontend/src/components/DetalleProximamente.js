import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useParams} from 'react-router-dom';
import './styles/Detalle.css';

const DetalleProximamente = (props) => {

    let { id } = useParams();

    let [proximamente, setProximamente] = useState(null);

    useEffect(
        ()=>{

            fetch('http://localhost:8888/proximamente/' + id).then(
                response => response.json()
            ).then( data => {
                setProximamente(data);
                console.log(data);
            })
        }, []
    )

    return (

        proximamente && 
        <Container className="mb-2">
            <Row className="bg-white">
                <Col lg={6} className="p-3 video-heigh">
                    <iframe className="w-100 h-100" src={proximamente.pro_trailer} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>

                <Col lg={6} className="p-3">
                    <h2 className="title-detalle mb-2 p-2 font-weight-normal">Sinopsis</h2>

                    <p className="p-2 m-0">
                        {proximamente.pro_sinopsis}
                    </p>

                    <h2 className="title-detalle mb-2 p-2 font-weight-normal">Datos Técnicos</h2>

                    <div className="d-flex justify-content-between px-2">
                        <span>Origen</span>
                        <span>{proximamente.ori_pais}</span>
                    </div>

                    <div className="d-flex justify-content-between px-2">
                        <span>Género</span>
                        <span>{proximamente.gen_genero}</span>
                    </div>

                    <div className="d-flex justify-content-between px-2">
                        <span>Director</span>
                        <span>{proximamente.pro_director}</span>
                    </div>

                    <div className="d-flex justify-content-between px-2">
                        <span>Clasificación</span>
                        <span>{proximamente.cla_clasificación}</span>
                    </div>
                </Col>
                
            </Row>
        </Container>
    )
}

export default DetalleProximamente;
