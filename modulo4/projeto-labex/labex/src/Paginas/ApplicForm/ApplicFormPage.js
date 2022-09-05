import React, { useState } from "react";
import axios from 'axios'
import { URL_BASE } from "../../Constants/Url";
import { useForm } from "../../Hook/useForm";
import { Botoes, ContainerPai, Inputs, Titulo } from "./styled";
import { Contry } from "../../Constants/contry";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../Hook/useRequestData";


export function ApplicFormes () {

  // Volta a pagina
  const navigate = useNavigate ()
  const pathVoltar = () =>{
    navigate(-1)
}

    const [idTrip, setIdTrip] = useState('')// estado inicial para controle dos inputs das viagens. Resolve o seu problemas do inputs não controlados

    const {form, onChange, clear} = useForm({ name: "", age: "",applicationText: "",profession: "",country: ""})

    // Aqui é chamado a requisição para envio do formulario
    const ApplytoTrip = () => {

      const body = {
        ... form
      }

      axios.post(`${URL_BASE}trips/${idTrip}/apply`,body)
        .then((response) => {
          console.log(response)
          alert('Formulario enviado com sucesso')
          clear()
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const upDate = (e) =>{
      setIdTrip(e.target.value)
    }
   
    // Aqui é chamado a requisição das listas de viagen disponiveis

    const [data] = useRequestData(`${URL_BASE}trips`)

    const listaDeViagens = data && data.trips.map((item) => {
      return <option key={item.id} value={item.id}> {item.name}</option>;
  })


 
    // Mapa dos Paises
    const getContry = Contry.map((list) =>{
        return (
            <option  key={list} > {list} </option>
        )
    })


    console.log(idTrip)
    return(
        <>
            <Titulo>Formulário de Viagem</Titulo>
            <ContainerPai>

              <Inputs>
                <select 
                    placeholder='Escolha sua viagem'
                    name="id"
                    onChange={upDate}
                    value={idTrip}
                    >
                    <option value="" hidden >Escolha sua viagem</option>
                    {listaDeViagens}
                </select>

                <input
                    type={"text"}
                    placeholder="Nome"
                    name="name"
                    onChange={onChange}
                    required
                    pattern={"^.{3,}$"}
                    title="name: mínimo 3 letras e menos de 15"
                    value={form.name }
                />

                <input
                    type={"number"}
                    placeholder="Idade"
                    name="age"
                    onChange={onChange}
                    required
                    min="18"
                    title="Apenas maiores de 18 anos"
                    value={form.age}
                />

                <select
                    name="country"
                    onChange={onChange}
                    value={form.country}
                > 
                <option> Escolha seu país</option>
                    {getContry}
                </select>

                <input
                    type={"text"}
                    placeholder="Profissão"
                    name="profession"
                    onChange={onChange}
                    required
                    pattern="[a-zA-Z ]{10,30}"
                    title="mínimo de 10 caracteres"
                    value={form.profession}
                />

                <input
                    type={"text"}
                    placeholder="Candidatura"
                    name="applicationText"
                    onChange={onChange}
                    required
                    pattern="[a-zA-Z ]{30,100}"
                    title="mínimo de 30 caracteres"
                    value={form.applicationText}
                />
              </Inputs>
              
            <Botoes>
              <button onClick={ApplytoTrip}>Enviar</button>
              <button onClick={pathVoltar}>Voltar</button>
            </Botoes>

            </ContainerPai>

            
        </>
  )
}