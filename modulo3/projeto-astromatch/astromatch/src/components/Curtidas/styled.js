import styled from 'styled-components'

export const ContainerPai = styled.div`
font-family: 'Jost', sans-serif;
`

export const Botoes = styled.div`
display: flex;

button{
   background-color:#E6E6FA ;
    padding: 12px;
    width: 300px;
    border-radius: 25px;
    border:solid 1px #8A2BE2 ;
    margin: 10px 5px 10px 5px;
    cursor: pointer;
}

button:hover{
   background-color:#8A2BE2 ;
    border-radius: 25px;
    border:solid 1px #E6E6FA ;
}
`
export const ContainerMatchs = styled.div`
display:flex ;
margin: 3px;

:hover{
color: #8A2BE2;
cursor: pointer;
}
`
export const Imagem = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px;
`