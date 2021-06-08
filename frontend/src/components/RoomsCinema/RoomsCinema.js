import React from "react";
import "../../App.css";
import { Col } from "react-bootstrap";
import Room from "../Room/Room";

const RoomsCinema = () => {
    return (
        <>
            <Col md={4} className="p-3">
                <Room title="Classic" />
                <Room title="Gold class" />
            </Col>

            <Col md={4} className="p-3">
                <Room title="4D" />
                <Room title="Monster screen" />
            </Col>
        </>
    );
};

export default RoomsCinema;
