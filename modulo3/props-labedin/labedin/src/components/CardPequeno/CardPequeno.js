import React from "react";
import './CardPequeno.css'

function CardPequeno(porps){
    return(
        <div className= 'pequeno-container'>
            <img src={porps.imagem} />
            <h3>{porps.tipoDeContato}</h3>
            <p>{porps.contato}</p>
        </div>

    )
}

export default CardPequeno;