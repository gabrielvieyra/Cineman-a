import React from 'react';
import Row from 'react-bootstrap/Row';
import Noticias from './Noticias';

export default () => 
        <article>
            <Row>

                <Noticias imagen="images/los-simuladores.jpg"
                          titulo="Los simuladores regresan para prevenirnos del coronavirus" 
                          texto="Todos estábamos a la expectativa de la vuelta de Los Simuladores: que se venía la película, o la 
                          continuación de la serie, y finalmente se unieron por motivos de fuerza mayor. Nuestro grupete favorito, que 
                          quedó en la memoria de todos los argentinos, dio un mensaje preventivo, a través de las redes sociales, por 
                          el coronavirus."
                          fecha="5 de Mayo del 2020 | 10:00"

                />

                <Noticias imagen="images/jesse.jpg"
                          titulo="¿Se viene otra secuela de 'Now You See Me'? Esto dijo Jesse Eisenberg"
                          texto="Jesse resaltó el cariño que le tiene a su personaje en la franquicia 'Now You See Me'.
                          Franquicia que nos regaló dos entregas dedicadas al equipo de ilusionistas y, 
                          aunque diversos reportes señalaban que una tercera entrega estaba siendo desarrollada, el público quedó con 
                          ganas de ver una nueva historia centrada en este grupo."
                          fecha="5 de Mayo del 2020 | 16:00"

                />

                <Noticias imagen="images/hercules.jpg"
                          titulo="Luego de muchos rumores, Disney confirma el live action de 'Hércules'" 
                          texto="Disney esta trabajando en una nueva versión de acción real de Hércules, que en 1997 tuvo 
                          una versión animada que narraba la historia del héroe mitológico como una loca aventura 
                          musical y con melodías memorables. El team de este live action, lo 
                          conforman Dave Callaham y producen los hermanos Anthony y Joe Russo."
                          fecha="5 de Mayo del 2020 | 19:00"

                />
                
            </Row>
        </article> 