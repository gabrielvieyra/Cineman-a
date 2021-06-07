import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Peliculas from "../Peliculas/Peliculas";
import Swal from "sweetalert2";

const ListadoPeliculas = (props) => {
    const { type, searchPub, user } = props;

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
                    text: data.message,
                    icon: "success"
                });
            });
    };

    const cargarListadoPeliculas = () => {
        let endpoint = "peliculas";

        if (type === "peliculas" && searchPub) {
            endpoint += "/search/" + searchPub;
        } else {
            if (user) {
                switch (type) {
                    case "favoritos":
                        endpoint = "favoritos/" + user.id;
                        break;
                }
            }
        }

        if (user) {
            //Obtengo los favoritos

            fetch(`http://localhost:8888/favoritos/${user.id}`)
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

    useEffect(cargarListadoPeliculas, [user, searchPub]);

    const isUserFav = (idPel) => {
        return favoritos.filter((favorito) => idPel === favorito.pel_id).length;
    };

    return (
        <Row>
            {peliculas.map((pelicula, key) => {
                return (
                    <Peliculas
                        imagen={pelicula.pel_imagen}
                        titulo={pelicula.pel_titulo}
                        puntuacion={pelicula.pel_puntuacion}
                        id={pelicula.pel_id}
                        type={type}
                        user={user}
                        isFav={isUserFav(pelicula.pel_id)}
                        onChangeFavStatus={handleChangeFavStatus}
                        key={pelicula.pel_id ? pelicula.pel_id : key}
                    />
                );
            })}
        </Row>
    );
};

export default ListadoPeliculas;
