import { useState } from 'react';
import './App.css';
import {EtapaUm} from "./Components/Etapa1"
import {EtapaDois} from "./Components/Etapa2"
import {EtapaTres} from "./Components/Etapa3"
import {EtapaFinal} from "./Components/EtapaFinal"

function App() {

  const [etapa, setEtapa] = useState ('1')

    const rendenizaEtapa = () => {
    switch (etapa){
    case '1':
      return <EtapaUm mudaPagina= {mudaPagina}/>
      break
    case '2':
      return <EtapaDois mudaPagina= {mudaPagina}/>
      break
    case '3':
      return <EtapaTres mudaPagina= {mudaPagina}/>
      break
    case '4':
      return <EtapaFinal mudaPagina= {mudaPagina}/>
      break
    default:
      return <EtapaUm mudaPagina= {mudaPagina}/>

    }
  }

  function mudaPagina (props) {
    setEtapa(props)
  }

  return (
    <>
     {rendenizaEtapa()}
     </>
  );
}

export default App;
