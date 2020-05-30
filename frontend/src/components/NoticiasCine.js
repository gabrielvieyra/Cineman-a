import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Noticias from './Noticias';

const NoticiasCine = () => {

    const [ cine, setCine ] = useState([])

    useEffect( ()=>{
            fetch('http://localhost:8888/noticias/cine').then(
                    response => response.json()
            ).then(
                data => {
                // este data son las noticias de cine
                    setCine(data);
                }
            )
    },[]

    )

    return (
        <article>
            <Row>

                {
                    cine.map( cine =>{
                                        return(
                                            <Noticias imagen={cine.not_imagen}
                                                      titulo={cine.not_titulo}
                                                      texto={cine.not_texto}
                                                      publicacion={cine.not_publicacion}
                                                      id={cine.not_id}

                                            />
                                        )
                                    }

                    )
                }
            
            </Row>
        </article>
    )
} 

export default NoticiasCine;