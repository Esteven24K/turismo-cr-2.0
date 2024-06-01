import React from "react"
import { CarouselData } from "../../data";
import CardCarousel from "../Widgets/CardCarousel";
import { AppContext } from '../../AppContext';
import { useContext } from "react";

function Carousel({ setValue, tamano }) {
	const {datos } = useContext(AppContext);

	return (
		<div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
			<div className="carousel-inner">
				{CarouselData.map((card, index) => (
					<CardCarousel key={index} setValue={setValue} card={card} tamano={tamano} />
				))}
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">{datos.btn1CorouseAnt}</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">{datos.btn1CorouseSigu}</span>
			</button>
		</div>
	)
}

export default Carousel;