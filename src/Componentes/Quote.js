import { Services } from "../data";
import React, { useState } from 'react';

function QuoteServices() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');





    return (
        <div className="container-fluid py-5 fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-success text-uppercase">Solicitar presupuesto</h5>
                            <h1 className="mb-0">¿Necesita una cotización gratis? Siéntete libre de contactarnos</h1>
                        </div>
                        <div className="row gx-3">
                            <div className="col-sm-6 zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-4"><i className="fa fa-reply text-success me-3"></i>Responderemos dentro de las 24 horas</h5>
                            </div>
                            <div className="col-sm-6 zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-4"><i className="fa fa-phone-alt text-success me-3"></i>Asistencia telefónica las 24 horas</h5>
                            </div>
                        </div>
                        <p className="mb-4"></p>
                        <div className="d-flex align-items-center mt-2 zoomIn" data-wow-delay="0.6s">
                            <div className="bg-success d-flex align-items-center justify-content-center rounded" style={{ height: "60px", width: "60px" }}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Llamanos y realiza tus preguntas ..</h5>
                                <h4 className="text-success mb-0">+012 345 6789</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-success rounded h-100 d-flex align-items-center p-5 zoomIn" data-wow-delay="0.9s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Ingresa tu nombre" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Ingresa tu correo electronico" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12">
                                        <select defaultValue={"0"} className="form-select bg-light border-0" style={{ height: "55px" }}>
                                            <option key='000' value="">Selecciona un servicio</option>
                                            {Services.map((opcion) => (
                                                <option key={opcion.id} value={opcion.id}>{opcion.titulo}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-light border-0" rows="3" placeholder="Mensaje"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 py-3 text-white" style={{ background: "#18241d" }} type="submit">Solicitar presupuesto</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default QuoteServices;