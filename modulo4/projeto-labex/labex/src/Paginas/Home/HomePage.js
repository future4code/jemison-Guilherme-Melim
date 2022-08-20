import React from "react";
import { useNavigate } from "react-router-dom";


export function Home () {

    const navigate = useNavigate();

    const pathLista = () =>{
        navigate('trips/list')
    }

    const pathPainelLogin = () =>{
        navigate('login')
    }

    return(
        <section>
            <p>LABEXX</p>
            <button onClick={pathLista}>Ver Lista</button>
            <button onClick={pathPainelLogin}>Login</button>
        </section>
    )
}