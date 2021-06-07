import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Proximamente from "../Proximamente/Proximamente";
import Swal from "sweetalert2";

const ProximosEstrenos = (props) => {
    const { type, searchPub, user } = props;

    const [proximamente, setProximamente] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const handleChangeFavStatus = (isFav, proId, userId) => {
        let url = "http://localhost:8888/favproximamente";

        const formData = new FormData();

        formData.append("userId", userId);
        formData.append("proId", proId);

        let method = isFav ? "DELETE" : "POST";

        fetch(url, {
            method,
            body: formData,
            credentials: "include"
        })
            .then((response) => response.json())
            .then((data) => {
                cargarListadoProximamente();

                Swal.fire({
                    text: data.message,
                    icon: "success"
                });
            });
    };

    const cargarListadoProximamente = () => {
        let endpoint = "proximamente";

        if (type === "proximamente" && searchPub) {
            endpoint += "/search/" + searchPub;
        } else {
            if (user) {
                switch (type) {
                    case "favoritos":
                        endpoint = "favproximamente/" + user.id;
                        break;
                }
            }
        }

        if (user) {
            //Obtengo los favoritos

            fetch(`http://localhost:8888/favproximamente/${user.id}`)
                .then((response) => response.json())
                .then((data) => {
                    setFavoritos(data);

                    fetch(`http://localhost:8888/${endpoint}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setProximamente(data);
                        });
                });
        } else {
            fetch(`http://localhost:8888/${endpoint}`)
                .then((response) => response.json())
                .then((data) => {
                    setProximamente(data);
                });
        }
    };

    useEffect(cargarListadoProximamente, [user, searchPub]);

    const isUserFav = (idPro) => {
        return favoritos.filter((favorito) => idPro === favorito.pro_id).length;
    };

    return (
        <article>
            <Row>
                {proximamente.map((proximamente, key) => {
                    return (
                        <Proximamente
                            imagen={proximamente.pro_imagen}
                            nombre={proximamente.pro_titulo}
                            fecha={proximamente.pro_fecha}
                            id={proximamente.pro_id}
                            type={type}
                            isFav={isUserFav(proximamente.pro_id)}
                            user={user}
                            onChangeFavStatus={handleChangeFavStatus}
                            key={
                                proximamente.pro_id ? proximamente.pro_id : key
                            }
                        />
                    );
                })}
            </Row>
        </article>
    );
};

export default ProximosEstrenos;
