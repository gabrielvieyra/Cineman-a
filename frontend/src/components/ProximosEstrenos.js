import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Proximamente from './Proximamente';

const ProximosEstrenos = () => {

    const [ proximamente, setProximamente ] =useState([])

    useEffect( ()=>{
            fetch('http://localhost:8888/proximamente').then(
                response => response.json()
            ).then(
                data => {
                    setProximamente(data)
                }
            )
    }, []

    )

    return(
        <article>
            <Row>

                {
                    proximamente.map( proximamente =>{
                                        return(
                                            <Proximamente imagen={proximamente.pro_imagen}
                                                          nombre={proximamente.pro_titulo}
                                                          fecha={proximamente.pro_fecha}
                                                          id={proximamente.pro_id}
                                                       
                />
                                        )
                    }

                    )
                }
                
            </Row>
        </article>
    )

}

export default ProximosEstrenos;
