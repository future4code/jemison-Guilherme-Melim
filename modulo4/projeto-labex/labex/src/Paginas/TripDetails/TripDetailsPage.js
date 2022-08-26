import axios from "axios";
import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../../Hook/useProtectedPage";
import { URL_BASE } from "../../Constants/Url";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerPai, Nome, Data, Descricao, Duração } from "./styled";
import { useRequestData } from "../../Hook/useRequestData";


export function TripDetails () {

    //Pagina privada
    useProtectedPage() 

    // Mudança de pagina.
    const navigate = useNavigate();

    const pathVoltar = () =>{
        navigate(-1)
    }

    // Id para entrar nas paginas privadas
    const params = useParams()

    // Lista de viagem que tem candidatos para serem aprovados
    const [data, loading, erro] = useRequestData(`${URL_BASE}trip/${params.id}`)
      
    // Mapea os candidatos
    const listCandidates = data && data.trip&&data.trip.candidates.map((item) => {
     return( 
     <ContainerPai key={item.id}>
        <Nome>Nome: {item.name}</Nome> 
        <p>{item.age}</p>
          <p>{item.country}</p>
          <p>{item.profession}</p>
          <p>{item.applicationText}</p>
        <button onClick={() =>decideCandidate(item.id, true)}>Aprovado</button>
        <button onClick={() =>decideCandidate(item.id, false)}>Reprovado</button>
    </ContainerPai>
    )})

    const listApproved = data && data.trip&&data.trip.approved.map((item) =>{
        return(
            <div>
                <p>{item.name}</p>
            </div>
        )
    })

    // função para decidir se o candidato é aprovado ou não.
    const decideCandidate = (id, decision) =>{
        const body ={
            approve : decision
        }

        const headers = {
            headers:{
                auth:localStorage.getItem('token'),
            }
        }

        axios.put(`${URL_BASE}trips/${params.id}/candidates/${id}/decide`, headers, body)
            .then((response)=>{
                if(decision === true){
                    alert('aceito')
                }else{alert('reprovado')}
            })
            .catch((error) =>{
                console.log(error)
            })
    }
 
    return(
        <div>

            <div>
                {data ? (
                        <h1>{data.trip.name}</h1>
                    ): <h1>Não deu certo hahahhaaha</h1>}
                     <button onClick={pathVoltar}>Voltar</button>
            </div>
            
            {loading && <p> Carregando  Usuários</p>}
            {!loading && erro&&<p>Ocorreu um erro com o usuario</p>}
            {!loading && data && data.trip && data.trip.candidates.length >0 &&listCandidates}
            {!loading && data && data.trip && data.trip.candidates === 0 && (<p> Não há viagens</p>)}

            <div>
                <h1>Lista de aprovados</h1>
                {listApproved}
            </div>

        </div>
    )
}