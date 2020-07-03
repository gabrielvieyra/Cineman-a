import React from 'react';
import {Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import iconoNoFavorito from '../no_favorito.png';
import iconoFavorito from '../favorito.png';

const Proximamente = (props) => {

    const handleFavClick = ()=>{
        /*alert('favorito')*/
        props.onChangeFavStatus(props.isFav, props.id, props.user.id);
    }

    return (
        <Col lg={2} md={4} xs={6} className="d-flex align-items-stretch mb-2">
            <Card>
                <Link to={"/proximamente/" + props.id}>
                    <img className="card-img-top" src={props.imagen}></img>
                </Link>
            <Card.Body className="card-block bg-light p-2">
                <Card.Title style={ { fontWeight : "bold" } } className="mb-0">{props.nombre}</Card.Title>

                <hr className="my-1"></hr>
                <div className="d-flex justify-content-between">
                    <span>{props.fecha}</span>
                    
                    { ( props.type === 'proximamente' || props.type === 'favoritos' ) && props.user &&
                        <div className="d-flex align-items-center">
                            <img style={ {cursor: "pointer"} } 
                                 src={props.isFav ? iconoFavorito : iconoNoFavorito}
                                 onClick={handleFavClick}

                            />
                        </div>
                    }

                </div>
            </Card.Body>
            </Card>
        </Col> 
    )
}

export default Proximamente;
