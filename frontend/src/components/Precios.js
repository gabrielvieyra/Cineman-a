import React from 'react';

const Precios = (props) => {

    return (
        <div className="d-flex justify-content-between px-2">
            <span>{props.categoria}</span>
            <span>{props.precio}</span>
        </div>           
    )
}

export default Precios;
           
