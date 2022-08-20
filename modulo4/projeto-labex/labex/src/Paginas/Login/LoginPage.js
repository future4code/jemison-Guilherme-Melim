import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { URL_BASE } from "../../Router/Url";
import { useForm } from "../../Hook/useForm";

export function Login () {
    const navigate = useNavigate()
    const [body, onChange] = useForm({email:'', password:''})

    const fazerLogin = (e) =>{
        e.preventDefault()
        axios.post(`${URL_BASE}login`, body)
            .then((response)=>{
                localStorage.setItem('token', response.data.token)
                navigate('/admin/trips/list')
                alert('Acesso Liberado')
            })
            .catch((error)=>{
                console.log(error)
                alert('Senha ou e-mail incorreto.')
            })
    }

    // Muda pagina
    const pathVoltar = () =>{
        navigate(-1)
    }
    return(
        <>
            <h1>Login</h1>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={body.email}
                    onChange={onChange}
                    required
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                />
                
                <label htmlFor="senha">Senha</label>
                <input
                    id="password"
                    name="password"
                    type='password'
                    placeholder="Senha"
                    value={body.password}
                    onChange={onChange}
                    required
                    pattern="^.{6,}"
                />
                <button onClick={pathVoltar}>Voltar</button>
                <button type="submit">Entrar</button>
            </form>
        </>
    )
}