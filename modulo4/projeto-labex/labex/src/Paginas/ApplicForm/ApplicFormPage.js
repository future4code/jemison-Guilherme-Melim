import React from "react";
import { useNavigate } from "react-router-dom";


export function ApplicFormes () {
    const navigate = useNavigate()

    const pathVoltar = () =>{
        navigate(-1)
    }
    return(
        <>
            <p> Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <button onClick={pathVoltar}>Voltar</button>
            <button>Enviar</button>
        </>
    )
}