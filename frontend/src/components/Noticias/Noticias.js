import React from "react";
import { Col, Card } from "react-bootstrap";
import iconoNoFavorito from "../../assets/no_favorito.png";
import iconoFavorito from "../../assets/favorito.png";

const Noticias = (props) => {
    const handleFavClick = () => {
        /* cambio el estado de favoritos */
        props.onChangeFavStatus(props.isFav, props.id, props.user.id);
    };

    return (
        <Col lg={4} md={6} className="d-flex align-items-stretch mb-2">
            <Card>
                <img className="card-img-top" src={props.imagen}></img>
                <Card.Body className="card-block bg-light p-2">
                    <Card.Title style={{ fontWeight: "bold" }} className="mb-2">
                        {props.titulo}
                    </Card.Title>

                    <Card.Text className="mb-0">{props.texto}</Card.Text>

                    <hr className="my-2"></hr>

                    <div className="d-flex justify-content-between">
                        <span>{props.publicacion}</span>

                        {(props.type === "noticias" ||
                            props.type === "favoritos") &&
                            props.user && (
                                <div className="d-flex align-items-center">
                                    <img
                                        style={{ cursor: "pointer" }}
                                        src={
                                            props.isFav
                                                ? iconoFavorito
                                                : iconoNoFavorito
                                        }
                                        onClick={handleFavClick}
                                    />
                                </div>
                            )}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Noticias;
