import React from "react";
import {Section, Esquerda, Meio, Direita} from './StyleMain'

export function Main () {
    return (
        <Section>
         <Esquerda>
             
         </Esquerda>
         <Meio>
             <label>Remetente:
             <input type="text" id="user" name="Ola" size={20}/></label>
             <label>Msg:
             <input type="text" id="user" name="Mensagem" size={30}/></label>
             <button>Enviar Mensagem</button>
         </Meio>
         < Direita>
             
         </ Direita>
        </Section>
    );
  }

