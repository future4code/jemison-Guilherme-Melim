import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../../Constants/Url";
import { useProtectedPage } from "../../Hook/useProtectedPage";
import { useRequestData } from "../../Hook/useRequestData";
import { BotoesPage, ContainerPai, Nome, NomeBotão, Title } from "./styled";


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
    
    // lista de viagem
    const [viagem, loading, erro] = useRequestData(`${URL_BASE}trips`)
    
    const tripDetail = viagem && viagem.trips.map((item) => {
      return( 
      <ContainerPai>
        <button onClick={() =>detalhes(item.id)} > <NomeBotão> {item.name} </NomeBotão> </button> 
        <button onClick={() =>deletTrip(item.id)}> <NomeBotão> Deletar </NomeBotão> </button>
      </ContainerPai>
  )})

  const deletTrip = (id) =>{

    const headers = {
        headers:{
            auth:localStorage.getItem('token'),
        }
    }

    axios.delete(`${URL_BASE}trips/${id}`, headers)
        .then((response)=>{
                alert('Viagem deletada')
        })
        .catch((error) =>{
            console.log(error)
        })
}


    

    return(
        <>
            <BotoesPage>
                <button onClick={pathVoltar}>Sair</button>
                <button onClick={pathCriarViagem}>Criar Viagem</button>
            </BotoesPage>

            <Title >VIAGENS</Title>
            
            {loading && <p> Carregando  Usuários</p>}
            {!loading&& erro&&<p>Ocorreu um erro com o usuario</p>}
            {!loading&&viagem&&viagem.trips.length >0 &&tripDetail}
            {!loading&&viagem&&viagem.trips.length === 0 &&(<p> Não há viagens</p>)}
        </>
    )
}