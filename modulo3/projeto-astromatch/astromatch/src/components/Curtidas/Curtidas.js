import axios from "axios";
import React, { useState } from "react";
import { Carde } from "../Card/Card";


export function Curtidas () {

    const [match, setMatch] = useState([])

    const urlListaDeMatch = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-azevedo-jemison/matches'

    const getMatch = () =>{
        axios.get(urlListaDeMatch)
            .then((response)=>{setMatch(response.data.matches)})
            .catch((erro)=>{console.log(erro)})
    }

    if('match'){
        <Carde/>
      }

console.log(match)
    return(
        <>
        <button onClick={'match'}>Match</button>
        </>
    )
}