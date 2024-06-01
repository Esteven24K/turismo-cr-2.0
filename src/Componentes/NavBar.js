import React from 'react';
import { style } from '../data'
import { useState } from 'react';
import { AppContext } from '../AppContext';
import { useContext } from 'react';


function NavBar({ setPage, page, handleLanguageChange, datos }) {

	

	return (

		<div>
			<div className="container-fluid position-relative p-0">
				<nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 fixed-top">
					<a href="index.html" className="navbar-brand p-0">
						<h1 className="m-0"><i className="fa fa-user-tie me-2"></i>{datos.nombre}</h1>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
						<span className="fa fa-bars"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<div className="navbar-nav ms-auto py-0">

							<button
								className={`btn nav-item ${page === "INICIO" ? "active" : ""}`}
								onClick={() => setPage("INICIO")}
							>
								{datos.btnNavInicio}
							</button>
							<button
								className={`btn nav-item ${page === "ACERCA" ? "active" : ""}`}
								onClick={() => setPage("ACERCA")}
							>
								{datos.btnNavAcercaDe}
							</button>
							<button
								className={`btn nav-item ${page === "SERVICIOS" ? "active" : ""}`}
								onClick={() => setPage("SERVICIOS")}
							>
								{datos.btnNavTurismos}
							</button>
							<button
								className={`btn nav-item ${page === "COTIZAR" ? "active" : ""}`}
								onClick={() => setPage("COTIZAR")}
							>
								{datos.btnNavCotizarServicio}
							</button>


							<button
								className={`btn nav-item ${page === "CONTACTOS" ? "active" : ""}`}
								onClick={() => setPage("CONTACTOS")}
							>
								{datos.btnNavContactos}
							</button>


							<div className="nav-item dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{datos.btnNavIdioma}</a>
								<div className="dropdown-menu m-0">
									<a href="#" className="dropdown-item" onClick={() => handleLanguageChange('es')}>
										<img src={process.env.PUBLIC_URL + "/img/SPAIN.png"} alt="Spanish Flag" width="20" height="15" /> {datos.es}
									</a>
									<a href="#" className="dropdown-item" onClick={() => handleLanguageChange('en')}>
										<img src={process.env.PUBLIC_URL + "/img/USA.png"} alt="USA Flag" width="20" height="15" /> {datos.en}
									</a>
								</div>
							</div>


						</div>


					</div>
				</nav>



			</div>

		</div>


	);
}

export default NavBar;