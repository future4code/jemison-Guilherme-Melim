import axios from "axios";
import React  from "react";
import { useProtectedPage } from "../../Hook/useProtectedPage";
import { URL_BASE } from "../../Constants/Url";
import { useNavigate, useParams } from "react-router-dom";
import { Botoes, ContainerPai, Titulo } from "./styled";
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
            <p>Nome: {item.name}</p> 
            <p>Idade: {item.age}</p>
            <p>País: {item.country}</p>
            <p>Profissão: {item.profession}</p>
            <p>Motivo: {item.applicationText}</p>
            
        <Botoes>
            <button onClick={() =>decideCandidate(item.id, true)}>Aprovado</button>
            <button onClick={() =>decideCandidate(item.id, false)}>Reprovado</button>
        </Botoes>
    
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

        axios.put(`${URL_BASE}trips/${params.id}/candidates/${id}/decide`, body, headers)
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

            <Titulo>
                {data ? (
                        <h1>{data.trip.name}</h1>
                    ): <h1>Algo deu errado, tente novamente</h1>}
            </Titulo>

            <Botoes>
                <button onClick={pathVoltar}>Voltar</button>
            </Botoes>
            
            {loading && <p> Carregando  Usuários</p>}
            {!loading && erro&&<p>Ocorreu um erro com o usuario</p>}
            {!loading && data && data.trip && data.trip.candidates.length ? listCandidates: <p> Sem candidatos</p> }
            {!loading && data && data.trip && data.trip.candidates === 0 && (<p> Não há viagens</p>)}

            <Titulo>
                <h1>Lista de aprovados</h1>
                {listApproved}
            </Titulo>

        </div>
    )
}