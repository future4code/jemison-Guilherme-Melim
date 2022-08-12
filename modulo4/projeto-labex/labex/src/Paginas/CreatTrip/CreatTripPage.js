import React from "react";
import { useNavigate } from "react-router-dom";


export function CreatTrip () {
    const navigate = useNavigate()

    const pathVoltar = () =>{
        navigate(-1)
    }
    return(
        <>
            <p>Formulário para o administrador criar uma nova viagem</p>
            <button onClick={pathVoltar}>Voltar</button>
            <button>Criar</button>
        </>
    )
}