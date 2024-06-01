import React, { useState } from "react";
import { Services } from "../data";
import { Marcas } from "../data";
import { Modelo } from "../data";
import { CotizacionAprox } from "../data";


function QuoteService() {

    const [marcaSeleccionada, setMarcaSeleccionada] = useState('');
    const [modeloSeleccionado, setModeloSeleccionado] = useState('');
    const [servicioSeleccionado, setServicioSeleccionado] = useState('')
    const [respuesta, setRespuesta] = useState([])
    const [key, setKey] = useState(0);

    function handleMarcaSeleccionada(e) {
        setMarcaSeleccionada(e.target.value);
        setModeloSeleccionado('');
        setKey(key + 1);
    }
    function showModal() {
        // Mostrar el modal
        var modal = document.getElementById("modal");
        modal.style.display = "block";

        // Esperar 5 segundos
        setTimeout(function () {
            // Ocultar el modal
            modal.style.display = "none";

            // Cargar la información
            consultarPrecios();
        }, 1000);
    }




    function consultarPrecios() {
        switch (true) {
            // filtra cuando existe un modelo y servicio seleccionado
            case modeloSeleccionado !== "" && servicioSeleccionado !== "":
                setRespuesta(CotizacionAprox.filter(cotizacion => cotizacion.idModelo === modeloSeleccionado && cotizacion.idServicio === servicioSeleccionado));
                break;

            // filtra cuando existe una marca seleccionada
            case modeloSeleccionado === "" && servicioSeleccionado === "" && marcaSeleccionada !== "":
                const modelosFiltrados = Modelo.filter(modelo => modelo.idMarca === marcaSeleccionada);
                setRespuesta(CotizacionAprox.filter(cotizacion =>
                    modelosFiltrados.some(modelo => modelo.id === cotizacion.idModelo)
                ));
                break;

            // filtra cuando existe un modelo
            case modeloSeleccionado !== "" && servicioSeleccionado === "":
                setRespuesta(CotizacionAprox.filter(cotizacion => cotizacion.idModelo === modeloSeleccionado));
                break;

            // filtra cuando existe un servicio seleccionado
            case modeloSeleccionado === "" && servicioSeleccionado !== "" && marcaSeleccionada === "":
                setRespuesta(CotizacionAprox.filter(cotizacion => cotizacion.idServicio === servicioSeleccionado));
                break;

            case modeloSeleccionado === "" && servicioSeleccionado !== "" && marcaSeleccionada !== "":

                const modelosFiltrados2 = Modelo.filter(modelo => modelo.idMarca === marcaSeleccionada);
                setRespuesta(CotizacionAprox.filter(cotizacion =>
                    modelosFiltrados2.some(modelo => modelo.id === cotizacion.idModelo && cotizacion.idServicio === servicioSeleccionado)
                ));
                break;

            // filtra cuando no existe ningun filtro seleccionado
            default:
                setRespuesta(CotizacionAprox);
        }
    }

    return (
        
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-12">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-success text-uppercase">Solicitar presupuesto</h5>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <select className="form-select" onChange={handleMarcaSeleccionada}>
                            <option key={"000"} value="">Selecciona una opcion</option>
                            {Marcas.map((opcion) => (
                                <option key={opcion.id} value={opcion.id}>{opcion.descripcion}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-lg-3">
                        <select className="form-select" value={modeloSeleccionado} onChange={(e) => setModeloSeleccionado(e.target.value)} key={key}>
                            <option key={"000"} value="">Selecciona una opcion</option>
                            {Modelo.map((opcion) =>
                                opcion.idMarca === marcaSeleccionada ? (
                                    <option key={opcion.id} value={opcion.id}>
                                        {opcion.descripcion}
                                    </option>) : null
                            )}
                        </select>
                    </div>
                    <div className="col-lg-3">
                        <select className="form-select" onChange={(e) => setServicioSeleccionado(e.target.value)}>
                            <option key={"000"} value="">Selecciona una opcion</option>
                            {Services.map((opcion) => (
                                <option key={opcion.id} value={opcion.id}>{opcion.titulo}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-lg-3">
                        <button onClick={showModal} type="button" className="btn btn-outline-secondary text-dark ">
                            Consultar Precios
                        </button>
                    </div>

                    <div className="col-lg-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Modelo</th>
                                    <th scope="col">Servicio</th>
                                    <th scope="col">Precio Aprox Colones (₡)</th>
                                    <th scope="col">Precio Aprox Dolares ($)</th>
                                </tr>
                            </thead>
                            <tbody>

                                {respuesta.map((row, id) => (
                                    <tr key={id}>
                                        <th scope="row">{row.id}</th>
                                        <td>
                                            {Marcas.find(opcion => opcion.id === Modelo.find(modelo => modelo.id === row.idModelo)?.idMarca)?.descripcion}
                                        </td>
                                        <td>{Modelo.find(opcion => opcion.id === row.idModelo)?.descripcion}</td>
                                        <td>{Services.find(opcion => opcion.id === row.idServicio)?.titulo}</td>
                                        <td>{row.precioAproxCol}</td>
                                        <td>{row.precioAproxDol}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>



            <div id="modal" className="modal">
                <p>Cargando...</p>
                <div className="spinner"></div>

            </div>
        </div>
    )
}

export default QuoteService;
