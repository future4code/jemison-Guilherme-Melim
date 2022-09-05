import styled from 'styled-components'

export const CardPai = styled.div`

display: flex;
flex-direction: column;
align-items: center;
text-align: center;
font-family: 'Jost', sans-serif;
`

export const Imagem = styled.img`
    width: 300px;
    height: 300px;
    margin: 5px;
`

export const Informacoes = styled.div`
display: block;
flex-direction: column;
width: 90%;
`
export const NomeIdade = styled.div`
display: flex;
padding: 5px;
`

export const Botoes = styled.nav`

padding: 10px;
display: flex;

button{
    background-color:#E6E6FA ;
    padding: 9px;
    width: 3vw;
    border-radius: 500px;
    border:solid 1px #8A2BE2 ;
    margin: 10px 50px 10px 50px;
    cursor: pointer;
}
button:hover{
   background-color:#8A2BE2 ;
    border:solid 1px #E6E6FA ;
}
`