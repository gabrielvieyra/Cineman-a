import React from "react";
import { Col } from "react-bootstrap";

function TrailerMovie(props) {
    const { trailer, title } = props;

    return (
        <Col lg={6} className="p-3 video-heigh">
            <iframe
                className="w-100 h-100"
                src={trailer}
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title={title}
            ></iframe>
        </Col>
    );
}

export default TrailerMovie;
