import React from "react";
import { useNavigate } from "react-router-dom";
import { Botoes, ContainerPai, Titulo } from "./styled";


export function Home () {

    const navigate = useNavigate();

    const pathLista = () =>{
        navigate('trips/list')
    }

    const pathPainelLogin = () =>{
        navigate('login')
    }

    return(
        <ContainerPai>
            <Titulo>LABEX</Titulo>
            <Botoes>
                <button onClick={pathLista}>Ver Lista</button>
                <button onClick={pathPainelLogin}>Login</button>
            </Botoes>
        </ContainerPai>
    )
}