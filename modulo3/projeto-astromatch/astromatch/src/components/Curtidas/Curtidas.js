import axios from "axios";
import React, { useState } from "react";
import { Botoes, ContainerMatchs, ContainerPai, Imagem } from "./styled";


export function Curtidas (props) {

    const [match, setMatch] = useState([])

    const urlListaDeMatch = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-azevedo-jemison/matches'
    const urlLimpar = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-azevedo-jemison/clear'

    const getMatch = () =>{
        axios.get(urlListaDeMatch)
            .then((response)=>{setMatch(response.data.matches)})
            .catch((erro)=>{console.log(erro)})
    }

    const putMatch = () =>{
        axios.put(urlLimpar)
            .then((response)=>{getMatch(response.data)
                alert('Lista apagada com sucesso!')})
            .catch((erro)=>{console.log(erro)})
    }

    return(
     <ContainerPai>
        <Botoes>
            <button onClick={()=> getMatch()}>Ver Meus Match</button>
            <button onClick={()=> putMatch()}>Limpar lista</button>
        </Botoes>
         {match.map((item) => {
         return (
            <ContainerMatchs>
             <Imagem  src={item.photo}  key={match.id} />
             {item.name}
            </ContainerMatchs>
            )
        })}
     </ContainerPai>
    )
}