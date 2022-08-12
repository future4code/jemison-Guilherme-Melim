import React from "react";
import { useNavigate } from "react-router-dom";


export function Login () {
    const navigate = useNavigate()

    const pathVoltar = () =>{
        navigate(-1)
    }
    return(
        <>
            <p>Para fazermos login como administrador</p>
            <button onClick={pathVoltar}>Voltar</button>
            <button>Entrar</button>
        </>
    )
}