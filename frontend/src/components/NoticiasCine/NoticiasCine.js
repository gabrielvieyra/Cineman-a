import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Noticias from "../Noticias/Noticias";
import Swal from "sweetalert2";

const NoticiasCine = (props) => {
    const { type, searchPub, user } = props;

    const [cine, setCine] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const handleChangeFavStatus = (isFav, notId, userId) => {
        let url = "http://localhost:8888/favoritos/cine";

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
                cargarNoticiasCine();

                Swal.fire({
                    text: data.message,
                    icon: "success"
                });
            });
    };

    const cargarNoticiasCine = () => {
        let endpoint = "noticias/cine";

        if (type === "noticias" && searchPub) {
            endpoint += "/search/" + searchPub;
        } else {
            if (user) {
                switch (type) {
                    case "favoritos":
                        endpoint = "favoritos/cine/" + user.id;
                        break;
                }
            }
        }

        if (user) {
            fetch(`http://localhost:8888/favoritos/cine/${user.id}`)
                .then((response) => response.json())
                .then((data) => {
                    setFavoritos(data);

                    fetch(`http://localhost:8888/${endpoint}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setCine(data);
                        });
                });
        } else {
            fetch(`http://localhost:8888/${endpoint}`)
                .then((response) => response.json())
                .then((data) => {
                    // este data son las noticias de cine
                    setCine(data);
                });
        }
    };

    useEffect(cargarNoticiasCine, [user, searchPub]);

    const isUserFav = (idNot) => {
        return favoritos.filter((favorito) => idNot === favorito.not_id).length;
    };

    return (
        <article>
            <Row>
                {cine.map((cine, key) => {
                    return (
                        <Noticias
                            imagen={cine.not_imagen}
                            titulo={cine.not_titulo}
                            texto={cine.not_texto}
                            publicacion={cine.not_publicacion}
                            id={cine.not_id}
                            type={type}
                            user={user}
                            isFav={isUserFav(cine.not_id)}
                            onChangeFavStatus={handleChangeFavStatus}
                            key={cine.not_id ? cine.not_id : key}
                        />
                    );
                })}
            </Row>
        </article>
    );
};

export default NoticiasCine;
