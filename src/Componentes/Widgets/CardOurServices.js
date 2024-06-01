import React from "react";


function CardOurService({ service }) {

    return (

        <div className="col-lg-4 col-md-6 zoomIn" data-wow-delay="0.1s">
        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
                <i className={service.icono}></i>
            </div>
            <h4 className="mb-3">{service.titulo}</h4>
            <p className="m-0">{service.descripcion}</p>
            <a className="btn btn-lg btn-success rounded" href="">
                <i className="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>

    )
}



export default CardOurService;