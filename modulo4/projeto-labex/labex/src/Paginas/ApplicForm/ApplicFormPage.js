import React, { useEffect, useState } from "react";
import axios from 'axios'
import { URL_BASE } from "../../Constants/Url";
import { useForm } from "../../Hook/useForm";
import { Formulario } from "./styled";
import { Contry } from "../../Constants/contry";
import { useNavigate } from "react-router-dom";


export function ApplicFormes () {

  // Volta a pagina
  const navigate = useNavigate ()
  const pathVoltar = () =>{
    navigate(-1)
}

    const [tripsList, setTripsList] = useState([])// estado inicial das viagens
    const [idTrip, setIdTrip] = useState({id: ""})// estado inicial para controle dos inputs das viagens. Resolve o seu problemas do inputs não controlados

    const {form, onChange, clear} = useForm({ name: "", age: "",applicationText: "",profession: "",country: ""})

    // Aqui é chamado a requisição para envio do formulario
    const ApplytoTrip = (body, id) => {

      axios.post(`${URL_BASE}trips/${id}/apply`,body)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }

   
    // Aqui é chamado a requisição das listas de viagen disponiveis
    useEffect(() => {
      axios.get(`${URL_BASE}trips`)
        .then((response) => {
          setTripsList(response.data.trips)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])
    
      // função faz o mesmo processo de desestruturação do seu Hook useForm
      const onChangeIdViagem = (e) => {
        const {name, value} = e.target
        setIdTrip({ ...idTrip ,[name]: value })
      }

      // função que envia os form para a requição
      const onClickFormulario = (e) => {
        e.preventDefault();
    
        ApplytoTrip(form, idTrip)
        clear()
        alert("Formulario Enviado")
      }


 
    // Mapa dos Paises
    const getContry = Contry.map((list) =>{
        return (
            <option  key={list} > {list} </option>
        )
    })

    const listaDeViagens = tripsList.map((item) => {
        return <option key={item.id} value={item.id}> {item.name}</option>;
    })

    console.log(idTrip)
    return(
        <>
            <h1>Formulário de Viagem</h1>
            <Formulario onSubmit={onClickFormulario}  >

                <select 
                    placeholder='Escolha sua viagem'
                    name="id"
                    onChange={onChangeIdViagem}
                    value={idTrip.id}
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
                
            <button type="submit">Enviar</button>
            </Formulario>
            <button onClick={pathVoltar}>Voltar</button>

            
        </>
  )
}