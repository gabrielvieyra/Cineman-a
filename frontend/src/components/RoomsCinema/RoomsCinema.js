import React from "react";
import "../../App.css";
import { Col } from "react-bootstrap";
import Room from "../Room/Room";

const RoomsCinema = () => {
    return (
        <>
            <Col md={4} className="p-3">
                <Room title="Classic" type="room" />
                <Room title="Gold class" type="room" />
            </Col>

            <Col md={4} className="p-3">
                <Room title="4D" type="room" />
                <Room title="Monster screen" type="room" />
            </Col>
        </>
    );
};

export default RoomsCinema;
