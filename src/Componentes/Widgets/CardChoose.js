import React from "react";


function CardChoose({ choose }) {

    return (

        <div className="col-12 zoomIn" data-wow-delay="0.1s">
            <div className="bg-success rounded d-flex align-items-center justify-content-center mb-3" style={{ width: "60px", height: "60px" }}>
                <i className={choose.icono}></i>
            </div>
            <h4>{choose.titulo}</h4>
            <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
        </div>

    )
}



export default CardChoose;



