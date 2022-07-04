import React from "react";
import {Cabecalho} from "./style"
import foto from "../foto/Labenu-principal.png"



export function Header () {
    return(
        <Cabecalho>
            <img src={foto}/>
        </Cabecalho>
    )

}