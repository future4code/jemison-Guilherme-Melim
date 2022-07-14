import React, { useState } from "react";
import {ContainerPai3} from './styledET3'



export function EtapaTres ({mudaPagina}) {

    const [naoTerminou, setNaoTerminou] = useState ('')
    const [cursoComplementar, setCursoComplementar] = useState ('')

    function handleNaoTerminou (e){
      setNaoTerminou(e.target.value)
    }

    function handleCursoComplementar (e){
      setCursoComplementar(e.target.value)
    }

    function handleSubmite (e) {
      e.preventDefault()
      mudaPagina ('4')
    }

    return(
        <ContainerPai3 onSubmit={handleSubmite} >
            <h1>Informações gerais de ensino</h1>
            
                <li>Por que não terminou o curso de graduação?</li>
                <input type='texte' value={naoTerminou} onChange={handleNaoTerminou}/>
                <li>Você fez algum curso complementar?</li>
                <input type='text' value={cursoComplementar} onChange={handleCursoComplementar}/> <br/>
           
            <input type='submit' value='Proxima etapa'/> 
          
        </ContainerPai3>
    )
}