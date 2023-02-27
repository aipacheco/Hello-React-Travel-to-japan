import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

let cards = [{
    titulo: "Monte Fuji",
    texto: "Pasa un día explorando la zona del Monte Fuji y visita lugares como el Complejo del Santuario Sengen, el Lago Kawaguchiko y Oshino Hakkai.",
    imagen: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
{
    titulo: "Región de Tohoku",
    texto: "Este es un recorrido de 10 días por la región Tohoku, al noreste de Japón. Experimente los caminos poco conocidos, la cocina regional, los lugares históricos y quédese en hospederías tradicionales.",
    imagen: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
},
{
    titulo:"Templo Tenryū-ji",
    texto:"Visite el templo más importante del distrito de Arashiyama.Su atracción principal es el jardín Zen, un jardín con estanque donde se capta el reflejo de los arces y las rocas en la periferia.",
    imagen:"https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
},
{
    titulo:"Fushimi Inari",
    texto:"Descubre los secretos de su historia y arqutiectura de manera amena y entretenida. Si reservas esta excursión también visitarás el parque de Nara, famoso por sus ciervos Sika.",
    imagen:"https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
},
]

const Home = () => {
	return (
		<div>
		<Navbar />
		<div className="container">	
		<Jumbotron/>
		<div className = "card-group justify-content-between p-3">
			{ cards.map ((data)=> {
				return <Card  imagen = {data.imagen} titulo ={data.titulo} texto = {data.texto} />
			 })} </div></div>
	
		<Footer/>
		</div>
	);
};

export default Home;
