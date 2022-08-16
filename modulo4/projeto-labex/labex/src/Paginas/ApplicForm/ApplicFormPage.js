import React from "react";
import { useNavigate } from "react-router-dom";


export function ApplicFormes () {

    // Muda pagina
    const navigate = useNavigate()
    const pathVoltar = () =>{
        navigate(-1)
    }
    return(
        <>
            <h1>Formulário de Viagem</h1>
            <button onClick={pathVoltar}>Voltar</button>
            <button>Enviar</button>
        </>
    )
}