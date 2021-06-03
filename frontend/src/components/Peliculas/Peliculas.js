import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import iconoNoFavorito from "../../assets/no_favorito.png";
import iconoFavorito from "../../assets/favorito.png";

const Peliculas = (props) => {
    const { titulo, imagen, puntuacion, id, type, user, isFav } = props;

    const handleFavClick = () => {
        props.onChangeFavStatus(isFav, id, user.id);
    };

    return (
        <Col lg={2} md={4} xs={6} className="d-flex align-items-stretch mb-2">
            <Card>
                <Link to={"/peliculas/" + id}>
                    <img
                        className="card-img-top"
                        src={imagen}
                        alt={`imagen de la pelicula ${titulo}`}
                    ></img>
                </Link>
                <Card.Body className="card-block bg-light p-2">
                    <h5
                        style={{ fontWeight: "bold" }}
                        className="card-title mb-0"
                    >
                        {titulo}
                    </h5>
                    <hr className="my-1"></hr>
                    <div className="d-flex justify-content-between">
                        <span>{puntuacion}</span>
                        {(type === "peliculas" || type === "favoritos") &&
                            user && (
                                <div className="d-flex align-items-center">
                                    <img
                                        style={{ cursor: "pointer" }}
                                        src={
                                            isFav
                                                ? iconoFavorito
                                                : iconoNoFavorito
                                        }
                                        alt="icono de favoritos"
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

export default Peliculas;
