import React from 'react';
import Row from 'react-bootstrap/Row';
import Proximamente from './Proximamente';

const ProximosEstrenos = () => {

    return (
        <article>
            <Row>

                <Proximamente imagen="images/fantasy-island.jpg"
                              nombre="Fantasy Island" 
                              fecha="23/07/20"
                              id="1"

                />
                <Proximamente imagen="images/vida-oculta.jpg"
                              nombre="Una vida oculta" 
                              fecha="30/07/20"
                              id="2"
                />
                <Proximamente imagen="images/bob-esponja.jpg"
                              nombre="Bob Esponja 3" 
                              fecha="13/08/20"
                              id="3"
                />
                <Proximamente imagen="images/black-widow.png"
                              nombre="Black Widow" 
                              fecha="20/08/20"
                              id="4"
                />
                <Proximamente imagen="images/tenet.jpg"
                              nombre="Tenet" 
                              fecha="03/09/20"
                              id="5"
                />
                <Proximamente imagen="images/trolls.jpg"
                              nombre="Trolls 2" 
                              fecha="08/10/20"
                              id="6"
                />

            </Row>
        </article> 
    )
}

export default ProximosEstrenos;
