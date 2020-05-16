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
                
            </Row>
        </article>
    )
}

export default ListadoPeliculas;