import React from "react";
import { Card } from "react-bootstrap";
import cinemaDetail from "../../data/cinema-detail";

const Room = (props) => {
    const { title } = props;

    return (
        <>
            <Card.Title className="titulos bg-light mb-2 p-2 font-weight-normal">
                {title}
            </Card.Title>
            {cinemaDetail.rooms.map((val, key) => {
                return (
                    <div className="d-flex justify-content-between" key={key}>
                        <p className="mb-0">{val.category}</p>
                        <p className="mb-0">{val.price}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Room;
