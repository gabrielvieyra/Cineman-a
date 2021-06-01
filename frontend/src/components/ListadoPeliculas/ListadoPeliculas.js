import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Peliculas from "../Peliculas/Peliculas";
import Swal from "sweetalert2";

const ListadoPeliculas = (props) => {
    const [peliculas, setPeliculas] = useState([]);

    const [favoritos, setFavoritos] = useState([]);

    const handleChangeFavStatus = (isFav, pelId, userId) => {
        let url = "http://localhost:8888/favoritos";

        const formData = new FormData();

        formData.append("userId", userId);
        formData.append("pelId", pelId);

        let method = isFav ? "DELETE" : "POST";

        fetch(url, {
            method,
            body: formData,
            credentials: "include"
        })
            .then((response) => response.json())
            .then((data) => {
                cargarListadoPeliculas();

                Swal.fire({
                    title: data.message,
                    icon: "success"
                });
            });
    };

    const cargarListadoPeliculas = () => {
        let endpoint = "peliculas";

        if (props.type === "peliculas" && props.searchPub) {
            endpoint += "/search/" + props.searchPub;
        } else {
            if (props.user) {
                switch (props.type) {
                    case "favoritos":
                        endpoint = "favoritos/" + props.user.id;
                        break;
                }
            }
        }

        if (props.user) {
            //Obtengo los favoritos

            fetch(`http://localhost:8888/favoritos/${props.user.id}`)
                .then((response) => response.json())
                .then((data) => {
                    setFavoritos(data);

                    fetch(`http://localhost:8888/${endpoint}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setPeliculas(data);
                        });
                });
        } else {
            fetch(`http://localhost:8888/${endpoint}`)
                .then((response) => response.json())
                .then((data) => {
                    setPeliculas(data);
                });
        }
    };

    useEffect(cargarListadoPeliculas, [props.user, props.searchPub]);

    const isUserFav = (idPel) => {
        return favoritos.filter((favorito) => idPel === favorito.pel_id).length;
    };

    return (
        <article>
            <Row>
                {peliculas.map((pelicula) => {
                    return (
                        <Peliculas
                            imagen={pelicula.pel_imagen}
                            nombre={pelicula.pel_titulo}
                            puntuación={pelicula.pel_puntuacion}
                            id={pelicula.pel_id}
                            type={props.type}
                            user={props.user}
                            isFav={isUserFav(pelicula.pel_id)}
                            onChangeFavStatus={handleChangeFavStatus}
                        />
                    );
                })}
            </Row>
        </article>
    );
};

export default ListadoPeliculas;
