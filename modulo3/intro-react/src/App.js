import foto from './imagens/fotoGui.jpeg';
import './App.css';

function App() {

  const botao =() =>{
    alert ('Olá. Boa noite!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Boas-vindas ao Site do Guilherme!</p>
        <img src={foto} className="App-logo" alt="Foto do autor do site" />
        <p>
         Meu primeiro site no REACT!
        </p>
          <button onClick={botao}>Clique aqui</button>
      </header>
    </div>
  );
}

export default App;
