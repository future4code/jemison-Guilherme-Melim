import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../Hook/useRequestData";
import {URL_BASE} from '../../Constants/Url'
import { ContainerPai, Data, Descricao, Duração, Nome } from "./styled";



export function ListTrips () {

    const [viagem, loading, erro] = useRequestData(`${URL_BASE}trips`)

    const listInTrip = viagem && viagem.trips.map((item) => {
        return( 
        <ContainerPai>
          <Nome>{item.name}</Nome> 
          <Descricao>{item.description}</Descricao>
          <Duração>{item.durationInDays}</Duração>
          <Data>{item.date}</Data>
        </ContainerPai>
    )})



// Mudança de pagina.
    const navigate = useNavigate();

    const pathVoltar = () =>{
        navigate(-1)
    }

    const pathApplicaForm = () =>{
        navigate('trips/application')
    }


    return(
        <>
            <p> Para vermos todas as viagens</p>
            <button onClick={pathVoltar}>Voltar</button>
            <button onClick={pathApplicaForm}>Inscreva-se</button>

            {loading && <p> Carregando  Usuários</p>}
            {!loading&& erro&&<p>Ocorreu um erro com o usuario</p>}
            {!loading&&viagem&&viagem.trips.length >0 &&listInTrip}
            {!loading&&viagem&&viagem.trips.length === 0 &&(<p> Não há viagens</p>)}
        </>
    )
}