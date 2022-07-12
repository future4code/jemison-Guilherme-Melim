import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const DivPai = styled.nav`
display: flex;
flex-direction: column;
padding: 2vw;
border: solid 0.01vw;
border-radius: 10%;
margin: 1vw;

`
function App() {

  // Estados
  const [inputNome, setInputNome] = useState ("")
  const [inputFotoPerfil, setInptFotoPerfil] = useState ("")
  const [inputPublicacao, setInputPublicacao] = useState ("")
  const [post, setPost] = useState ([
    {nomeUsuario:'paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
    { nomeUsuario:'vanessa', fotoUsuario:'https://picsum.photos/40/40', fotoPost:'https://picsum.photos/199/150'},
    {nomeUsuario:'guilherme', fotoUsuario:'https://picsum.photos/45/45', fotoPost:'https://picsum.photos/198/150'}
  ])

  const mapeado = post.map((item, index) => {
    return (
      <Post key={index}
           nomeUsuario = {item.nomeUsuario}
           fotoUsuario = {item.fotoUsuario}
           fotoPost = {item.fotoPost}
      />
    )
  })

  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }
  const handleInputFotoPerfil = (e) => {
    setInptFotoPerfil(e.target.value)
  }
  const handleInputPublicacao = (e) =>{
    setInputPublicacao(e.target.value)
  }

  const addPost = (e) => {
    e.preventDefault()
    setPost([...post,  {nomeUsuario:inputNome, fotoUsuario:inputFotoPerfil, fotoPost:inputPublicacao}])
    setInputNome("")
    setInptFotoPerfil("")
    setInputPublicacao("")
  }
 
  console.log(mapeado)


return(

  <MainContainer>
      <DivPai>
       <label>Nome:</label>
        <input
          placeholder='Insira seu nome'
          value={inputNome}
          onChange= {handleInputNome}
        />
       <label>Foto de Perfil:</label>
          <input
           placeholder='Insira uma foto de perfil'
           value={inputFotoPerfil}
           onChange= {handleInputFotoPerfil}
          />
       <label>Publicação:</label>
          <input
           placeholder='Insira a foto para peblicação'
           value={inputPublicacao}
           onChange = {handleInputPublicacao}
          /> 

       <button onClick={addPost}>Adicionar</button>
      </DivPai>
        {mapeado}
    </MainContainer>
)

}


export default App;
