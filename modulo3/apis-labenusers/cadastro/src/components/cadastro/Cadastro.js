import React, { useState } from 'react';
import axios from "axios";
import { Display, FormPlay } from './styed';

export function Cadastro (props) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const handelNome = (e) => {
        setNome(e.target.value)
    }

    const handelEmail = (e) =>{
        setEmail(e.target.value)
    }

    const post = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const autorizacao = {headers: {Authorization: 'guilherme-azevedo-jemison'}}

    const body = {
        name: nome,
        email: email
    }

    const criandoUsuario = (e) =>{
        e.preventDefault();
        
            axios.post(post, body, autorizacao)
            .then((response)=> {
                setNome(response.data)
                setEmail(response.data)
                alert('Usuario adicionado com sucesso!')
            })
                .catch((error)=>{
                    alert('Tente novamente!')
                })
            
    }
  
    return (
        <Display>
        
            <input
                type='text'
                placeholder= 'Insira seu nome'
                value={nome}
                onChange={handelNome}
            />
             <input
                type='text'
                placeholder= 'Insira seu e-mail'
                value={email}
                onChange={handelEmail}
            />
            <button onClick={ criandoUsuario }>Adicionar</button> 
            <button onClick={ () => props.onChange('listaDeCadastro') }>Voltar</button>
        
        </Display>
    )
}