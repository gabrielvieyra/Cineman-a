import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Noticias from "../Noticias/Noticias";
import Swal from "sweetalert2";

const NoticiasSeries = (props) => {
    const { type, user, searchPub } = props;

    const [series, setSeries] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const handleChangeFavStatus = (isFav, notId, userId) => {
        let url = "http://localhost:8888/favoritos/series";

        const formData = new FormData();

        formData.append("userId", userId);
        formData.append("notId", notId);

        let method = isFav ? "DELETE" : "POST";

        fetch(url, {
            method,
            body: formData,
            credentials: "include"
        })
            .then((response) => response.json())
            .then((data) => {
                cargarNoticiasSeries();

                Swal.fire({
                    text: data.message,
                    icon: "success"
                });
            });
    };

    const cargarNoticiasSeries = () => {
        let endpoint = "noticias/series";

        if (type === "noticias" && searchPub) {
            endpoint += "/search/" + searchPub;
        } else {
            if (user) {
                switch (type) {
                    case "favoritos":
                        endpoint = "favoritos/series/" + user.id;
                        break;
                }
            }
        }

        if (user) {
            fetch(`http://localhost:8888/favoritos/series/${user.id}`)
                .then((response) => response.json())
                .then((data) => {
                    setFavoritos(data);

                    fetch(`http://localhost:8888/${endpoint}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setSeries(data);
                        });
                });
        } else {
            fetch(`http://localhost:8888/${endpoint}`)
                .then((response) => response.json())
                .then((data) => {
                    // este data son las noticias de cine
                    setSeries(data);
                });
        }
    };

    useEffect(cargarNoticiasSeries, [user, searchPub]);

    const isUserFav = (idNot) => {
        return favoritos.filter((favorito) => idNot === favorito.not_id).length;
    };

    return (
        <article>
            <Row>
                {series.map((serie, key) => {
                    return (
                        <Noticias
                            imagen={serie.not_imagen}
                            titulo={serie.not_titulo}
                            texto={serie.not_texto}
                            publicacion={serie.not_publicacion}
                            id={serie.not_id}
                            type={type}
                            user={user}
                            isFav={isUserFav(serie.not_id)}
                            onChangeFavStatus={handleChangeFavStatus}
                            key={serie.not_id ? serie.not_id : key}
                        />
                    );
                })}
            </Row>
        </article>
    );
};

export default NoticiasSeries;
