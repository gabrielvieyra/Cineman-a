import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Peliculas from './Peliculas';

const ListadoPeliculas = () => {

    const [ peliculas, setPeliculas ] =useState([])

    useEffect( ()=>{
            fetch('http://localhost:8888/peliculas').then(
                response => response.json()
            ).then(
                data => {
                    setPeliculas(data)
                }
            )
    }, []

    )

    return(
        <article>
            <Row>

                {
                    peliculas.map( pelicula =>{
                                        return(
                                            <Peliculas imagen={pelicula.pel_imagen}
                                                       nombre={pelicula.pel_titulo}
                                                       puntuación={pelicula.pel_puntuacion}
                                                       id={pelicula.pel_id}
                                                       
                />
                                        )
                    }

                    )
                }
                
                 {/*
                <Peliculas imagen="images/onward.webp"
                           nombre="Unidos" 
                           puntuación="9.0"
                           id="2"
                />
                <Peliculas imagen="images/aves-presa2.jpg"
                           nombre="Aves de presa" 
                           puntuación="6.5"
                           id="3"
                />
                <Peliculas imagen="images/bad-boys2.jpg"
                           nombre="Bad boys 2" 
                           puntuación="8.5"
                           id="4"
                />
                <Peliculas imagen="images/guns-akimbo.jpg"
                           nombre="Guns akimbo" 
                           puntuación="5.5"
                           id="5"
                />
                <Peliculas imagen="images/sonic-estrenos.jpg"
                           nombre="Sonic" 
                           puntuación="9.2"
                           id="6"
                />
                */}
            </Row>
        </article>
    )
}

export default ListadoPeliculas;