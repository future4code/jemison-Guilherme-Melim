import axios from "axios";
import React, { useEffect } from "react";
import { useProtectedPage } from "../../Hook/useProtectedPage";
import { URL_BASE } from "../../Router/Url";


export function TripDetails () {
    useProtectedPage()

    useEffect(() =>{
        const token = localStorage.getItem('token');
      
        axios.get(`${URL_BASE}trips/oDqeL1dMCdsPgF5uiRtH`,
        {
            headers:{auth: token}
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log('Deu erro', error.data)
            })
    }, [])

    return(
        <>
            <p> Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
        </>
    )
}