import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row';
import Peliculas from './Peliculas';

const ListadoPeliculas = (props) => {

    const [ peliculas, setPeliculas ] =useState([])

    const handleChangeFavStatus = (isFav, pelId, userId)=>{

        let url = 'http://localhost:8888/favoritos';

        const formData = new FormData();

        formData.append('userId', userId);
        formData.append('pelId', pelId);
        
        let method = isFav ? 'DELETE' : 'POST';

        fetch(url, {
            method,
            body: formData,
            credentials : 'include'
        }).then( response => response.json() )
        .then( data =>{
            cargarListadoPeliculas();

            Swal.fire(
                {
                    title: data.message,
                    icon: "success"
                }
            )

        })
    }

    const cargarListadoPeliculas = ()=>{

        let endpoint = 'peliculas';
        
        if ( props.user && props.type === 'favoritos' ){
            endpoint = 'favoritos/' + props.user.id;
        }
    
        fetch( `http://localhost:8888/${endpoint}`).then(
                response => response.json()
            ).then(
                data => {
                    setPeliculas( data );
                }
            )
    }

    useEffect( cargarListadoPeliculas, [props.user] );

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
                                                       type={props.type}
                                                       isFav={false}
                                                       user={props.user}
                                                       onChangeFavStatus={handleChangeFavStatus}
                                                       
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