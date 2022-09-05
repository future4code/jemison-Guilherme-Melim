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
    margin: 5% 30%;
    

:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    color: #F0FFFF;
}`

export const Inputs = styled.div`
display: flex;
flex-direction: column;
margin-top: 5%;

input{
    margin: 10px;
}

select{
    margin: 10px;
}`

export const Titulo = styled.div`
width: 30%;
font-size: 200%;
font-family: 'Rubik Marker Hatch', cursive;
margin-bottom: 5%;
margin: 5% 5% 5% 35% ;
:hover{
    color: #F0FFFF;
}`


export const Botoes = styled.h1`

button{
    font-weight: bold;
    padding: 1%;
    border: none;
    background: rgba( 255, 255, 255, 0.1 );
    border-radius: 10px;
    margin: 2% 5%;
    padding: 8%;
    
:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    color: #F0FFFF;
    cursor: pointer;
}
}`