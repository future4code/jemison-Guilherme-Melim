import React from 'react'
import DiagramaUm from '../fotos/diagrama.png'
import DiagramaDois from '../fotos/diagrama-com-estados.png'

export function Imagens () { 
    return(
        <>
        <p>Foto 1</p>
        <img src= {DiagramaUm} alt="IMAGEM"/>
        <p>Foto 2</p>
        <img src= {DiagramaDois} alt="IMAGEM"/>
        </>
    )
}