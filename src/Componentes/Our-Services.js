import React from "react";
import CardOurService from "./Widgets/CardOurServices";
import { Services } from "../data";

function OurServices() {

    return (
        <div className="container-fluid py-5 fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                    <h5 className="fw-bold text-success text-uppercase">Nuestros Servicios</h5>
                    <h1 className="mb-0">Reparacion de aires acondicionados, instalacion de gas.</h1>
                </div>
                <div className="row g-5">
                    {Services.map((service, index) => (
                        <CardOurService key={index} service={service} />
                    ))}
                    <div className="col-lg-4 col-md-6 zoomIn" data-wow-delay="0.9s">
                        <div className="position-relative bg-success rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                            <h3 className="text-white mb-3">Contactenos para una cotización</h3>
                            <p className="text-white mb-3">Le atenderemos lo mas rapido posible</p>
                            <h2 className="text-white mb-0">+506 345 6789</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default OurServices;