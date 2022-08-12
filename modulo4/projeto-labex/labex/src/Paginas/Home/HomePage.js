import React from "react";
import { useNavigate } from "react-router-dom";


export function Home () {

    const navigate = useNavigate();

    const pathLista = () =>{
        navigate('trips/list')
    }

    const pathPainelAdm = () =>{
        navigate('admin/trips/list')
    }

    return(
        <section>
            <p>LABEXX</p>
            <button onClick={pathLista}>Ver Lista</button>
            <button onClick={pathPainelAdm}>Inscrever</button>
        </section>
    )
}