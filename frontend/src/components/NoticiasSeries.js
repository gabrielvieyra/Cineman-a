import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Noticias from './Noticias';

const NoticiasSeries = () => {

    const [ series, setSeries ] = useState([])

    useEffect( ()=>{
            fetch('http://localhost:8888/noticias/series').then(
                    response => response.json()
            ).then(
                data => {
                    setSeries(data);
                }
            )
    },[]

    )

    return (
        <article>
            <Row>

                {
                    series.map( serie =>{
                                        return(
                                            <Noticias imagen={serie.not_imagen}
                                                      titulo={serie.not_titulo}
                                                      texto={serie.not_texto}
                                                      publicacion={serie.not_publicacion}
                                                      id={serie.not_id}
                                            />
                                        )
                                    }
                    )
                }
            
            </Row>
        </article>
    )
} 

export default NoticiasSeries;