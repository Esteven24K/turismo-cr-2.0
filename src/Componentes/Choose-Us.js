import React from "react";
import CardChoose from "./Widgets/CardChoose";
import { Chooses } from "../data";
import { AppContext } from '../AppContext';
import { useContext } from 'react';

function ChooseUs() {
    const { datos } = useContext(AppContext);

    return (
        <div className="container-fluid py-5 fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                    <h5 className="fw-bold text-success text-uppercase">{datos.ChoosePage.titulo}</h5>
                    <h1 className="mb-0">{datos.ChoosePage.subTitulo}</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="row g-5">
                            {datos.ChoosePage.Chooses.slice(0, 2).map((choose, index) => (
                                <CardChoose key={index} choose={choose} />
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-4 zoomIn" data-wow-delay="0.9s" style={{ minHeight: "350px" }}>
                        <div className="position-relative h-100">
                            <img className="position-center w-100 h-100 zoomIn" data-wow-delay="0.1s" src={process.env.PUBLIC_URL + "/img/feature.jpg"} style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row g-5">
                            {datos.ChoosePage.Chooses.slice(2, 4).map((choose, index) => (
                                <CardChoose key={index} choose={choose} />
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}



export default ChooseUs;