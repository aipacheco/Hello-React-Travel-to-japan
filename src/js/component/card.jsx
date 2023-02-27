import React from "react";

const Card = (propiedades) => {
   return ( 
   <div className="card-exc">
   <div className="card m-1 " style={{width: "18rem"}}>
    <img src={propiedades.imagen} className="card-img-top"></img>
    <div className="card-body">
      <h5 className="card-title">{propiedades.titulo}</h5>
      <p className="card-text">{propiedades.texto}</p>
    </div>
    <div className="card-footer border-0">
      <a href="#" className="btn btn-dark">Reserva ahora</a>
      </div>
  </div>
  </div>
 
  )
}

export default Card