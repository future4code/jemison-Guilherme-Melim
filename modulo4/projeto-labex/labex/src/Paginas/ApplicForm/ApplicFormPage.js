import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { URL_BASE } from "../../Router/Url";
import { useForm } from "../../Hook/useForm";
import { Formulario } from "./styled";


export function ApplicFormes () {

    const [body, onChange] = useForm()

    const fazerLogin = (e) =>{
        e.preventDefault()
        axios.post(`${URL_BASE}guilherme-azevedo-jemison/login`)
            .then((response)=>{
                console.log(response.data)
                alert('Formulario enviado!')
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    // Muda pagina
    const navigate = useNavigate()
    const pathVoltar = () =>{
        navigate(-1)
    }
    return(
        <>
            <h1>Formulário de Viagem</h1>
            <Formulario onSubmit={fazerLogin}>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    name="nome"
                    placeholder="Escreva seu nome"
                    value={body.name}
                    onChange={onChange}
                    required
                    pattern='[A-Za-z]{3,30}' title="Digite seu nome"
                />
                <label htmlFor="idade">Idade</label>
                <input
                    id="idade"
                    name="idade"
                    placeholder="Escreva sua idade"
                    value={body.age}
                    onChange={onChange}
                    required
                    pattern='^./[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/' title="Maior que 18"
                />
                <label htmlFor="pais">País de origem</label>
                <input
                    id="pais"
                    name="pais"
                    placeholder="País"
                    value={body.country}
                    onChange={onChange}
                    required
                    pattern='[A-Za-z]{5}' title="Coloque seu pais"
                />
                <label htmlFor="profession">Profissão</label>
                <input
                    id="profession"
                    name="profession"
                    placeholder="profession"
                    value={body.profession}
                    onChange={onChange}
                    required
                    pattern='[A-Za-z]{10}' title="Minimo 10 caracteres"
                />
                <label htmlFor="explicacao">por que Você quer ir?</label>
                <input
                    id="explicacao"
                    name="explicacao"
                    placeholder="Explique"
                    value={body.applicationText}
                    onChange={onChange}
                    required
                    pattern='[A-Za-z]{30}'title="Minimo 30 caracteres"
                />

            <button onClick={pathVoltar}>Voltar</button>
            <button>Enviar</button>
            </Formulario>
        </>
    )
}