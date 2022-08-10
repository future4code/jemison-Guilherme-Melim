import React from "react";
import { useNavigate } from "react-router-dom";


export function Home () {

    const navigate = useNavigate();

    const goToLista = () =>{
        navigate('trips/list')
    }

    const goToPainelAdm = () =>{
        navigate('admin/trips/list')
    }

    return(
        <section>
            <p>LABEXX</p>
            <button onClick={goToLista}>Ver Lista</button>
            <button onClick={goToPainelAdm}>Inscrever</button>
        </section>
    )
}