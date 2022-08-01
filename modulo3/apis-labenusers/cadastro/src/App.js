import React, { useState } from 'react';
import './App.css';
import { Cadastro } from './components/cadastro/Cadastro';
import { ListaDeCadastros } from './components/listaCadastrados/ListaDeCadastro';

function App(props) {
  const [tela, setTela] = useState('inicio')

  const onChange = (tela) =>{
     setTela(tela)
  }

  const reendenizarTela = () => {
    switch (tela){
      case 'inicio':
        return <Cadastro onChange={onChange}/>
      case 'listaDeCadastro':
        return <ListaDeCadastros onChange={onChange}/>
      default:
        return null;
    }
    
  }

  return (
    <div>
      {reendenizarTela()}
    </div>
  );
}

export default App;
