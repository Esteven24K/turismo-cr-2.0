import React from "react";
import { useContext } from "react";
import { AppContext } from '../../AppContext';

function InfoCarousel({ setValue }) {
    const {datos } = useContext(AppContext);
    return (

        <div className="p-3" style={{ maxWidth: "900px" }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">{datos.subtitulo}</h5>
            <h1 className="display-1 text-white mb-md-4 animated zoomIn">{datos.titulo}</h1>
            <button className="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft" onClick={()=>setValue("PRESUPUESTO")}>
            {datos.btn1Corousel}
            </button>

            <button className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight" onClick={()=>setValue("CONTACTOS")}>
            {datos.btn1Corouse2}
            </button>
        </div>

    )
}



export default InfoCarousel;