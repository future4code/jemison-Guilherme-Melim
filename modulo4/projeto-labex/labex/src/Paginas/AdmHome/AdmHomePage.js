import React from "react";
import { useNavigate } from "react-router-dom";


export function AdmHome () {
    const navigate = useNavigate()

    const pathVoltar = () =>{
        navigate(-1)
    }

    const pathCriarViagem = () =>{
        navigate('/admin/trips/creat')
    }

    const pathLogin = () =>{
        navigate('/login')
    }
    return(
        <>
            <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
            <button onClick={pathVoltar}>Voltar</button>
            <button onClick={pathCriarViagem}>Criar Viagem</button>
            <button onClick={pathLogin}>Login</button>
        </>
    )
}