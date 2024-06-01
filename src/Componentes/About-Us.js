import React from "react";
import { AppContext } from '../AppContext';
import { useContext } from 'react';


function AboutUs({ setValue }) {
    const { datos } = useContext(AppContext);


    return (
        <div className="container-fluid py-5 fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-success text-uppercase">{datos.about_us.titulo}</h5>
                            <h1 className="mb-0">{datos.about_us.subTitulo}</h1>
                        </div>
                        <p className="mb-4">{datos.about_us.descripcion}</p>
                        <div className="row g-0 mb-3">
                            <div className="col-sm-6 zoomIn" data-wow-delay="0.2s">
                                {datos.about_us.meritos.slice(0, 2).map((merito, index) => (
                                    <h5 key={index} className="mb-3">
                                        <i className="fa fa-check text-success me-3"></i>
                                        {merito.titulo}
                                    </h5>
                                ))}
                            </div>
                            <div className="col-sm-6 zoomIn" data-wow-delay="0.4s">
                            {datos.about_us.meritos.slice(2, 4).map((merito, index) => (
                                    <h5 key={index} className="mb-3">
                                        <i className="fa fa-check text-success me-3"></i>
                                        {merito.titulo}
                                    </h5>
                                ))}
                            </div>
                        </div>

                        <button
                            className="btn btn-success py-3 px-5 mt-3 zoomIn"
                            data-wow-delay="0.1s"
                            onClick={() => setValue("PRESUPUESTO")}
                        >
                            {datos.about_us.btnTitulo}
                        </button>
                    </div>
                    <div className="col-lg-5" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                            <img className="position-center w-100 h-100 rounded zoomIn" data-wow-delay="0.9s" src={process.env.PUBLIC_URL + "/img/about.jpg"} style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutUs;