import React from "react";


function CardFactsStart({Fact}) {


    return (
        <div className="col-lg-4 zoomIn" data-wow-delay="0.1s">
            <div className={Fact.colorFond} style={{ height: "150px" }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ height: "60px", width: "60px" }}>
                    <i className={Fact.colorIcon}></i>
                </div>
                <div className="ps-4">
                    <h5 className="text-white mb-0">{Fact.titulo}</h5>
                    <h1 className="text-white mb-0" data-toggle="counter-up">{Fact.total}</h1>
                </div>
            </div>
        </div>
    )
}


export default CardFactsStart;