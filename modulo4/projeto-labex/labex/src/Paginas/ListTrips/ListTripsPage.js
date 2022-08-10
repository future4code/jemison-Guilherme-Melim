import React from "react";
import { useNavigate } from "react-router-dom";



export function ListTrips () {

    const navigate = useNavigate();

    const goToVoltar = () =>{
        navigate(-1)
    }


    return(
        <>
            <p> Para vermos todas as viagens</p>
            <button onClick={goToVoltar}>Voltar</button>
        </>
    )
}