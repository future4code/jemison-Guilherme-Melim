import React, { useState } from "react";
import {ContainerPai2} from './styledET2'


export function EtapaDois ({mudaPagina}) {

  const [curso, setCurso] = useState ('')
  const [unidade, setUnidade] = useState ('')

  function handleCurso (e) {
    setCurso(e.target.value)
  }

  function handleUnidade (e) {
    setUnidade(e.target.value)
  }

  function handleSubmite (e) {
    e.preventDefault()
    mudaPagina('4')
  }


    return (
        <ContainerPai2 onSubmit={handleSubmite} >

            <h1>Informações de ensino superior</h1>
                <li>Qual curso você fez ou faz?</li>
                <input type='text' value={curso} onChange={handleCurso}/>
                <li>Qual unidade de ensino?</li>
                <input type='text' value={unidade} onChange={handleUnidade}/> <br/>
              
              <input type='submit' value='Proxima pagina'/>
        </ContainerPai2>
      
    )
}