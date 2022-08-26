import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../../Constants/Url";
import { useProtectedPage } from "../../Hook/useProtectedPage";
import { useRequestData } from "../../Hook/useRequestData";
import { ContainerPai, Nome } from "./styled";


export function AdmHome () {
    useProtectedPage()
    const navigate = useNavigate()

    const pathVoltar = () =>{
        navigate(-1)
    }

    const pathCriarViagem = () =>{
        navigate('/admin/trips/creat')
    }

    // extrair id
    const detalhes = (id) =>{
        navigate(`admin/trips/${id}`)
    }
    console.log(detalhes)
    
    // lista de viagem
    const [viagem, loading, erro] = useRequestData(`${URL_BASE}trips`)
    
    const tripDetail = viagem && viagem.trips.map((item) => {
      return( 
      <ContainerPai>
        <button onClick={() =>detalhes(item.id)} > {item.name} </button> 
      </ContainerPai>
  )})



    

    return(
        <>
            <button onClick={pathVoltar}>Sair</button>
            <button onClick={pathCriarViagem}>Criar Viagem</button>
            
            {loading && <p> Carregando  Usuários</p>}
            {!loading&& erro&&<p>Ocorreu um erro com o usuario</p>}
            {!loading&&viagem&&viagem.trips.length >0 &&tripDetail}
            {!loading&&viagem&&viagem.trips.length === 0 &&(<p> Não há viagens</p>)}
        </>
    )
}