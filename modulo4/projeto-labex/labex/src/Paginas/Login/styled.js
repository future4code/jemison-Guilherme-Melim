import styled from 'styled-components'

export const ContainerPai = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: rgba( 255, 255, 255, 0.1 );
    border-radius: 20px;
    border: solid 1.5px black;
    box-shadow: 3px 3px 3px;
    margin: 12% 30%;
    

:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    color: #F0FFFF;
    font-weight: bold
}`

export const Titulo = styled.div`
width: 30%;
font-size: 300%;
font-family: 'Rubik Marker Hatch', cursive;
margin-bottom: 5%;

:hover{
    color: #F0FFFF;
}`


export const Botoes = styled.div`
button{
    font-weight: bold;
    padding: 1%;
    border: none;
    background: rgba( 255, 255, 255, 0.1 );
    border-radius: 10px;
    margin: 10% 5%;
    font-size: 20px;
    
:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    color: #F0FFFF;
    cursor: pointer;
}
}`

export const Inputs = styled.div`

display: flex;
flex-direction: column;

input{
    font-weight: bold;
    padding: 1%;
    
:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    cursor: pointer;
}
}
 label{
    font-weight: bold;
    padding: 1%;
 }`