import React, {useState } from 'react'
import './App.css';
import { Carde } from './components/Card/Card';
import { Curtidas } from './components/Curtidas/Curtidas';
import { Cabecalho, ContainerPai } from './styled';

function App() {

    // troca de pagina!
  const [trocarTela, setTrocarTela] = useState('curtirPessoas')
  const [botao, setBotao] = useState('Ver Match')

  const paginaRenderizada = () =>{
    switch (trocarTela){
      case "pessoasCurtidas":
        return <Curtidas />
      case "curtirPessoas":
        return <Carde />
    }
  }

  const pagina = () =>{
    if(trocarTela === 'pessoasCurtidas'){
      setTrocarTela('curtirPessoas')
      setBotao('Ver Match')
    }else if (trocarTela === 'curtirPessoas'){
      setTrocarTela('pessoasCurtidas')
      setBotao('Dar Matchs')
    }
  } 


  return (
    <ContainerPai>
      <Cabecalho>
        <h1>Astro Match</h1>
        <button onClick={() => pagina()}>{botao}</button>
      </Cabecalho>
      {paginaRenderizada()}
    </ContainerPai>
  );
}

export default App;
