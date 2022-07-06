import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  const arraryPoste = [
    {nomeUsuario:'paulinha', fotoUsuario:'https://picsum.photos/50/50', fotoPost:'https://picsum.photos/200/150'},
    { nomeUsuario:'vanessa', fotoUsuario:'https://picsum.photos/40/40', fotoPost:'https://picsum.photos/199/150'},
    {nomeUsuario:'guilherme', fotoUsuario:'https://picsum.photos/45/45', fotoPost:'https://picsum.photos/198/150'}
  ]

  const mapeado = arraryPoste.map((item, index) => {
    return (
      <Post key={index}
           nomeUsuario = {item.nomeUsuario}
           fotoUsuario = {item.fotoUsuario}
           fotoPost = {item.fotoPost}
      />
    )
  })

  console.log(mapeado)

return(

  <MainContainer>
       {mapeado}
    </MainContainer>
)

}


export default App;
