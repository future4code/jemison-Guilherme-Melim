import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../Hook/useForm";
import axios from 'axios';
import { URL_BASE } from "../../Constants/Url";
import {Planet} from "../../Constants/planets"
import { useProtectedPage } from "../../Hook/useProtectedPage";


export function CreatTrip () {

    // Area privada
    useProtectedPage()

    // Troca de tela
    const navigate = useNavigate()

    const pathVoltar = () =>{
        navigate(-1)
    }
    

    const {form, onChange, clear} = useForm({
        name: '', planet: '', date: '', description: '', duratioInDays: ''
    })

    // Formulário de criação de viagem
    const tripCreat = (e)=> {
        e.preventDefault()

        const body = {
            ... form
        }

        const headers ={
            headers:{
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('token')
            }
        }

        axios.post(`${URL_BASE}trips`, body, headers)
            .then((response) =>{
                alert('Viagem criada com sucesso.')
                clear()
            })
            .catch((error) => {
                console.log(error)
                alert('Algo deu errado, tente novamente.')
            })
    }

    // Lista de Planetas
    const getPlanet = Planet.map((planet) => {
        return <option key={planet} value={planet}> {planet} </option> 
    })

    return(
        <div>
            <form onSubmit={tripCreat}>
                <h1>Crie uma viagem</h1>

                <input
                    name='name'
                    value={form.name}
                    placeholder= 'Nome'
                    onChange={onChange}
                    required
                />

                <select
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                    placeholder='Escolha um planeta'
                    required
                >
                <option value='disabled' >Escolha um planeta</option>
                {getPlanet}
                </select>

                <input
                    name = 'date'
                    placeholder="Data"
                    value={form.date}
                    onChange={onChange}
                    required
                />

                <input
                    name="description"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={onChange}
                    required
                />

                <input
                    name="durationInDays"
                    placeholder="Duração em dias"
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                />

                <button type="submit">Criar</button>

            </form>

            <button onClick={pathVoltar}>Voltar</button>

        </div>
    )
}