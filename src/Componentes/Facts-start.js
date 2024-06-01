import React from "react";
import CardFactsStart from "./Widgets/CardFactsStart";
import { Facts } from "../data";
import { AppContext } from '../AppContext';
import { useContext } from 'react';


function FactStart() {
    const { datos } = useContext(AppContext);

    return (
        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    {datos.Facts.map((fact, index) => (
                        <CardFactsStart key={index} Fact={fact} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default FactStart;

