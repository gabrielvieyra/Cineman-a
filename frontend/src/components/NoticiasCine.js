import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Noticias from './Noticias';
import Swal from 'sweetalert2';

const NoticiasCine = (props) => {

    const [ cine, setCine ] = useState([])

    const [favoritos, setFavoritos] = useState([]);

    const handleChangeFavStatus = (isFav, notId, userId)=>{

        let url = 'http://localhost:8888/favoritos/cine';

        const formData = new FormData();

        formData.append('userId', userId);
        formData.append('notId', notId);
        
        let method = isFav ? 'DELETE' : 'POST';

        fetch(url, {
            method,
            body: formData,
            credentials : 'include'
        }).then( response => response.json() )
        .then( data =>{
            cargarNoticiasCine();

            Swal.fire(
                {
                    title: data.message,
                    icon: "success"
                }
            )

        })
    }

    const cargarNoticiasCine = ()=>{

        let endpoint = 'noticias/cine';

        if ( props.type ==='noticias' && props.searchPub ){
            endpoint += '/search/' + props.searchPub;
        }
        else{
            if (props.user ){

                switch (props.type){

                    case 'favoritos':

                        endpoint = 'favoritos/cine/' + props.user.id;
                        break;

                }
            }
        }

        if ( props.user ){

            fetch(`http://localhost:8888/favoritos/cine/${props.user.id}`).then(
                response => response.json()
            ).then(
                data =>{
                    setFavoritos(data);

                    fetch( `http://localhost:8888/${endpoint}`).then(
                        response => response.json()
                    ).then(
                        data => {
                            setCine( data );
                        }
                    )
                }
            )
        }else{
            fetch( `http://localhost:8888/${endpoint}`).then(
                    response => response.json()
            ).then(
                data => {
                // este data son las noticias de cine
                    setCine(data);
                }
            )
        }
    }

    useEffect( cargarNoticiasCine, [props.user, props.searchPub] );

    const isUserFav = idNot =>{
        return ( favoritos.filter( favorito => idNot === favorito.not_id ).length );
    }

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
                                                      type={props.type}
                                                      user={props.user}
                                                      isFav={ isUserFav(cine.not_id) }
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

export default NoticiasCine;