import React, { useEffect, useState } from 'react'
import { Curtidas } from '../Curtidas/Curtidas'
import axios from 'axios'
import { CardPai, Informacoes } from './styled'


export function Carde () {

    const [usuarios, setUsuarios] = useState({})

    const urlUsuarios = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-azevedo-jemison/person'
    const urldandoMatch = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-azevedo-jemison/choose-person'
    const body = {
        id: usuarios.id,
        choice: true
    }

    useEffect(() => {
        getUsuario()
    }, [])

    
    // mostra usuarios não vistos!
    const getUsuario = () =>{
        axios.get(urlUsuarios)
            .then((response)=>{setUsuarios(response.data.profile)})
            .catch((erro) => {console.log(erro)})
    }
  
    // botões do match
    const postMatch = () =>{
        axios.post(urldandoMatch, body)
            .then((response)=>{getUsuario(response.data.profile)})
            .catch((erro) => {console.log(erro)})
    }

  const curtiu = () =>{
    postMatch(true)
  }

  const naoCurtiu = () =>{
    postMatch(false)
  }

  const trocaPagina = () =>{
  if('curtidas'){
    <Curtidas />
  }
}

    return(
        <CardPai>
          <nav>
            <h1>AstroMatch</h1>
            <button onClick={trocaPagina()}>Curtidas</button>
            <Curtidas/>
          </nav>
          <img src={usuarios.photo}/>
          <Informacoes>
            {usuarios.name}
            {usuarios.age} <br/>
            {usuarios.bio}
          </Informacoes>

            <button onClick={naoCurtiu}>X</button>
            <button onClick={curtiu}>s2</button>
          </CardPai>
    )
}