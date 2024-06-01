import React from "react";



function AboutUs({setValue}) {

    return (
        <div className="container-fluid py-5 fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-success text-uppercase">SOBRE NOSOTROS</h5>
                            <h1 className="mb-0">La mejor solución en aires acondicionados con 10 años de experiencia</h1>
                        </div>
                        <p className="mb-4">Somos una empresa especializada en soluciones de climatización. Ofrecemos servicios de instalación, mantenimiento y reparación de sistemas de aire acondicionado para hogares, oficinas, locales comerciales y más. Contamos con un equipo de profesionales altamente capacitados y comprometidos en brindar un servicio de calidad y personalizado a cada uno de nuestros clientes. Nuestro objetivo principal es asegurarnos de que nuestros clientes tengan un ambiente agradable y cómodo en todo momento. ¡Gracias por su atención y esperamos trabajar con ustedes!</p>
                        <div className="row g-0 mb-3">
                            <div className="col-sm-6 zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-3"><i className="fa fa-check text-success me-3"></i>Ganador de premios</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-success me-3"></i>Personal profesional</h5>
                            </div>
                            <div className="col-sm-6 zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-3"><i className="fa fa-check text-success me-3"></i>Soporte 24/7</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-success me-3"></i>Precios accesibles</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4 fadeIn" data-wow-delay="0.6s">
                            <div className="bg-success d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Llamanos y pregunta</h5>
                                <h4 className="text-success mb-0">+012 345 6789</h4>
                            </div>
                        </div>
                        <button
                            className="btn btn-success py-3 px-5 mt-3 zoomIn"
                            data-wow-delay="0.1s"
                            onClick={() => setValue("PRESUPUESTO")}
                        >
                            Solicitar presupuesto
                        </button>
                    </div>
                    <div className="col-lg-5" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                            <img className="position-center w-100 h-100 rounded zoomIn" data-wow-delay="0.9s" src={process.env.PUBLIC_URL +"/img/about.jpg" } style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AboutUs;