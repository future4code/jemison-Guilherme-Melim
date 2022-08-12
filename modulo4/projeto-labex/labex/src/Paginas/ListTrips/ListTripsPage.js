import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../Hook/useRequestData";
import {URL_BASE} from '../Url'



export function ListTrips () {

    const [viagem, loading, erro] = useRequestData(`${URL_BASE}trips`)

    const listaDeViagem = viagem && viagem.map((nome) => {
        return nome.name
    })



// ------Aqui tem a logica de mudança de paginas!
    const navigate = useNavigate();

    const pathVoltar = () =>{
        navigate(-1)
    }

    const pathApplicaForm = () =>{
        navigate('trips/application')
    }

    console.log(listaDeViagem)

    return(
        <>
            <p> Para vermos todas as viagens</p>
            <button onClick={pathVoltar}>Voltar</button>
            <button onClick={pathApplicaForm}>Inscreva-se</button>

      {loading && <p> Carregando  Usuários</p>}
      {!loading&& erro&&<p>Ocorreu um erro com o usuario</p>}
      {!loading&&viagem&&viagem.length >0 &&listaDeViagem}
      {!loading&&viagem&&viagem.length === 0 &&(<p> Não há usuários</p>)}
        </>
    )
}