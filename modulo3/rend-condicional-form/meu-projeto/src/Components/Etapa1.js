import React, { useState } from "react"
import {ContainerPai} from './styledET1'

export function EtapaUm ({mudaPagina}) {

  const [nome, setNome] = useState ('')
  const [idade, setIdade] = useState ('')
  const [email, setEmail] = useState ('')
  const [educacao, setEducacao] = useState ('3')

  const handleNome = (e) =>{
    setNome(e.target.value)
  }
  const handleIdade = (e) =>{
    setIdade(e.target.value)
  }
  const handleEmail = (e) =>{
    setEmail(e.target.valeu)
  }
  const handleEducacao = (e) =>{
    setEducacao(e.target.value)
  }

    function handleSubmite (e) {
      e.preventDefault()
      mudaPagina(educacao)
    }

     

  return(
    <ContainerPai>
      <h1>Dados de Cadastro</h1>
    
     <form onSubmit={handleSubmite}>
           <li>Qual o seu nome?</li>
           <input type="text" value={nome} onChange={handleNome} />
           <li>Qual sua idade? </li>
           <input type="text" value={idade} onChange={handleIdade}/>
           <li>Qual seu email</li>
           <input type="text" value={email} onChange={handleEmail}/>
           <li>Qual a sua escoaridade?</li>
            
          <select value={educacao} onChange={handleEducacao}>
             <option value='3'>Ensino médio incompleto</option>
             <option value='3'>Ensino completo</option>
             <option value='2'>Superior incompleto</option>
             <option value='2'>Superior completo</option>
          </select> <br/>
           
        <input type='submit' value='Proxima etapa'/>
     </form>
    
    </ContainerPai>
  )
}