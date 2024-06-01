
import React from 'react';
import NavBar from '../NavBar';
import Carousel from './carousel';
import FactStart from '../Facts-start';
import AboutUs from '../About-Us';
import ChooseUs from '../Choose-Us';
import OurServices from '../Our-Services';
import Team from '../Team';
import QuoteServices from '../Quote';
import Footer from '../Footer';
import { useState, useEffect } from 'react';
import QuoteService from '../QuoteService';
import { AppContext } from '../../AppContext';
import { useContext } from 'react';

function PrincipalPage(props) {

	const [page, setPage] = useState("PRINCIPAL")
	const [showSpinner, setShowSpinner] = useState(true);
	const [tamano, setTamano] = useState("cardCarrousel")
	const [zoomLevel, setZoomLevel] = useState(70); // Valor inicial del zoom

	const { idioma, datos, cambiarIdioma } = useContext(AppContext);
	const [selectedLanguage, setSelectedLanguage] = useState('');

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
		cambiarIdioma(language)
	};


	const handleZoomIn = () => {
		setZoomLevel(prevZoom => prevZoom + 1); // Aumentar el zoom en 10 unidades
	};

	const handleZoomOut = () => {
		setZoomLevel(prevZoom => prevZoom - 1); // Disminuir el zoom en 10 unidades
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowSpinner(false);
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, [showSpinner]);


	const setValue = (val) => {
		if (val !== page) {
			setShowSpinner(true);
			setPage(val);
		}
	};
	useEffect(() => {
		if (page !== "INICIO") {
			setTamano("cardCarrousel");
		} else {
			setTamano("");
		}
	}, [page]);
	

	return (
		<div style={{ zoom: `${zoomLevel}%` }}>

			{showSpinner && (
				<div
					id="spinner"
					className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
				>
					<div className="spinner"></div>
				</div>
			)}
			<NavBar datos ={datos} handleLanguageChange={handleLanguageChange} setPage={setValue} page={page} />
			<Carousel datos ={datos} setValue={setValue} tamano={tamano} />
			
			<div className="btn btn-success btn-zoom">
				<div>{zoomLevel + "%"}</div>
				<hr />
				<button onClick={handleZoomIn}>
					<i className="fas fa-search-plus btn-success " />
				</button>
				<hr />
				<button onClick={handleZoomOut}>
					<i className="fas fa-search-minus ml-3" />
				</button>

			</div>
			{!showSpinner &&
				(() => {
					switch (page) {
						case "INICIO":
							return (
								<div className="mb-5">


									<FactStart />
									<AboutUs setValue={setValue} />
									<ChooseUs />
									<OurServices />
									<Team />


								</div>
							);
						case "ACERCA":
							return (
								<div className="mb-5">


									<AboutUs setValue={setValue} />
									<ChooseUs />
									<OurServices />


								</div>
							);
						case "SERVICIOS":
							return (
								<div className="mb-5">


									<OurServices />


								</div>
							);
						case "CONTACTOS":
							return (
								<div className="mb-5">
									<Team />
								</div>
							);
						case "PRESUPUESTO":
							return (
								<div className="mb-5">

								</div>
							);
						case "COTIZAR":
							return (
								<div className="mb-5">


									<QuoteService />


								</div>
							);
						default:
							return (
								<div className="mb-5">


									<FactStart />
									<AboutUs setValue={setValue} />
									<ChooseUs />
									<OurServices />
									<Team />


								</div>
							);
					}
				})()}
			<Footer />
		</div>
	);
}

export default PrincipalPage;
