import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Botoes, CardPai, Informacoes, NomeIdade, Imagem } from './styled'
// import { Curtidas } from './Curtidas/Curtidas';



export function Carde (props) {

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


    return(
        <CardPai>
          <Imagem src={usuarios.photo}/>
          <Informacoes>
            <NomeIdade>
            <b>{usuarios.name}</b> ,
            {usuarios.age}
            </NomeIdade>
            {usuarios.bio}
          </Informacoes>
          <Botoes>
            <button onClick={naoCurtiu}>×</button> 
            <button onClick={curtiu}>♥</button>
          </Botoes>
          </CardPai>
    )
}