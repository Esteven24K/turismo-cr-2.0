import React from "react";
import CardPerson from "./Widgets/CardPerson";
import { AppContext } from '../AppContext';
import { useContext } from 'react';

function Team() {
    const { datos } = useContext(AppContext);

    return (
        <div className="container-fluid py-5 fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
                    <h5 className="fw-bold text-success text-uppercase">{datos.teamSubtitulo}</h5>
                    <h1 className="mb-0">{datos.teamTitulo}</h1>
                </div>
                <div className="row g-5">
                    {datos.persons.map((person, index) => (
                        <CardPerson key={index} person={person} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Team;