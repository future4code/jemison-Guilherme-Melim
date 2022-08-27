import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../Hook/useRequestData";
import {URL_BASE} from '../../Constants/Url'
import { Botoes, ContainerPai, Data, Descricao, Duração, Nome, Titulo } from "./styled";



export function ListTrips () {

    const [viagem, loading, erro] = useRequestData(`${URL_BASE}trips`)

    const listInTrip = viagem && viagem.trips.map((item) => {
        return( 
        <ContainerPai>
          <p>{item.name}</p> 
          <p>{item.description}</p>
          <p>{item.durationInDays}</p>
          <p>{item.date}</p>
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
            <Titulo> Viagens</Titulo>
            <Botoes>
                <button onClick={pathVoltar}>Voltar</button>
                <button onClick={pathApplicaForm}>Inscreva-se</button>
            </Botoes>

            {loading && <p> Carregando  Usuários</p>}
            {!loading&& erro&&<p>Ocorreu um erro com o usuario</p>}
            {!loading&&viagem&&viagem.trips.length >0 &&listInTrip}
            {!loading&&viagem&&viagem.trips.length === 0 &&(<p> Não há viagens</p>)}
        </>
    )
}