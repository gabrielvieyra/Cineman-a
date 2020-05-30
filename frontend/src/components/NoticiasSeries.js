import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Noticias from './Noticias';
import Swal from 'sweetalert2';

const NoticiasSeries = (props) => {

    const [ series, setSeries ] = useState([])

    const [favoritos, setFavoritos] = useState([]);

    const handleChangeFavStatus = (isFav, notId, userId)=>{

        let url = 'http://localhost:8888/favoritos/series';

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
            cargarNoticiasSeries();

            Swal.fire(
                {
                    title: data.message,
                    icon: "success"
                }
            )

        })
    }

    const cargarNoticiasSeries = ()=>{

        let endpoint = 'noticias/series';

        if ( props.type ==='noticias' && props.searchPub ){
            endpoint += '/search/' + props.searchPub;
        }
        else{
            if (props.user ){

                switch (props.type){

                    case 'favoritos':

                        endpoint = 'favoritos/series/' + props.user.id;
                        break;

                }
            }
        }

        if ( props.user ){

            fetch(`http://localhost:8888/favoritos/series/${props.user.id}`).then(
                response => response.json()
            ).then(
                data =>{
                    setFavoritos(data);

                    fetch( `http://localhost:8888/${endpoint}`).then(
                        response => response.json()
                    ).then(
                        data => {
                            setSeries( data );
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
                    setSeries(data);
                }
            )
        }
    }

    useEffect( cargarNoticiasSeries, [props.user, props.searchPub] );

    const isUserFav = idNot =>{
        return ( favoritos.filter( favorito => idNot === favorito.not_id ).length );
    }

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
                                                      type={props.type}
                                                      user={props.user}
                                                      isFav={ isUserFav(serie.not_id) }
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

export default NoticiasSeries;