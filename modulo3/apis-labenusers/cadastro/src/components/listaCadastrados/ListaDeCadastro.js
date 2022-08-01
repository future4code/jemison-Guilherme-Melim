import React, { useEffect, useState } from 'react';
import axios from "axios";
import { DisplayLista, ItemUsuario } from './styled';

export function ListaDeCadastros (props) {
    const [listaUsuarios, setListaUsuarios] = useState([]);


    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const autorizacao = {
        headers: 
        {Authorization: 'guilherme-azevedo-jemison'}
    }

    const getDados = () =>{
        axios.get(url, autorizacao)
            .then((response)=> {setListaUsuarios(response.data)})
            .catch((error)=> {console.log(error.response)})
    }

    useEffect(()=> {
        getDados()
    }, [])

    // const vai=('')
    // listaUsuarios.map((item) => {
    //    return (vai = (item.id))
    // })

    const deletarUsuario = (id) =>{
        axios.delete( `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, autorizacao)
            .then((response)=>{
                setListaUsuarios(response)
                alert("Usuario deletado com sucesso!")
            }).catch((error)=>{
                alert("Algo deu errado, tente novamente!")
            })
            props.onChange('inicio')
    }
    
    const allListas = listaUsuarios.map((lista) => {
        return(
            <ItemUsuario key={lista.id}>
              {lista.name}
              <button onClick={ () => deletarUsuario(lista.id) }>Deletar</button>
            </ItemUsuario>
        )
    })


    return (
        <DisplayLista>
            {allListas} 
            <button onClick={ () => props.onChange('inicio') }>Voltar</button>
        </DisplayLista>
    )
}