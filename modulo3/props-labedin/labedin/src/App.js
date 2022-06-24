import React from 'react';
import './App.css';
import guilherme from './imagens/guilherme.jpeg';
import labenu from './imagens/labenu.png'
import agm from './imagens/agm.jpeg'
import email from './imagens/email.png'
import whats from './imagens/whats.png'
import localizaçao from './imagens/localiza.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={guilherme}
          nome="Guilherme Azevedo Melim" 
          descricao="Oi, eu sou o Guilherme. Sou estudante da Labenu e Unip, estou em um processo de transição de carreira, futuramente quero me tornar um DEV. Nunca imaginei que poderia gostar de códigos, mas olha eu aqui, fazendo coisas que nunca imagiaria fazer."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem= {email}
          tipoDeContato= 'EMAIL:'
          contato= "Guilherme.bobina@gmail.com"
        />

        <CardPequeno
        imagem={whats}
        tipoDeContato= 'Whats:'
        contato= "(11) 94857-8105"
        />

        <CardPequeno
        imagem={localizaçao}
        tipoDeContato= 'Localização'/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={labenu} 
          nome="Labenu" 
          descricao="Fazendo projetos para melhorar minhas habilidades!" 
        />
        
        <CardGrande 
          imagem={agm}
          nome="AGM"
          descricao="CEO e faz tudo." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
