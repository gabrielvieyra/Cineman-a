import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import iconoNoFavorito from "../../assets/no_favorito.png";
import iconoFavorito from "../../assets/favorito.png";

const Proximamente = (props) => {
    const { onChangeFavStatus, isFav, id, user, imagen, nombre, fecha, type } =
        props;

    const handleFavClick = () => {
        onChangeFavStatus(isFav, id, user.id);
    };

    return (
        <Col lg={2} md={4} xs={6} className="d-flex align-items-stretch mb-2">
            <Card>
                <Link to={"/proximamente/" + id}>
                    <img
                        className="card-img-top"
                        src={imagen}
                        alt={`imagen de la pelicula ${nombre}`}
                    ></img>
                </Link>
                <Card.Body className="card-block bg-light p-2">
                    <Card.Title style={{ fontWeight: "bold" }} className="mb-0">
                        {nombre}
                    </Card.Title>

                    <hr className="my-1"></hr>
                    <div className="d-flex justify-content-between">
                        <span>{fecha}</span>

                        {(type === "proximamente" || type === "favoritos") &&
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

export default Proximamente;
