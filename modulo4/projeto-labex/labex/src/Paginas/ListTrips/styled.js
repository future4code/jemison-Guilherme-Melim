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
    margin: 3% 30%;
    

:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    color: #F0FFFF;
    font-weight: bold
} `

export const Titulo = styled.div`
margin: 5% 0% 0% 40%;
width: 15%;
font-size: 300%;
font-family: 'Rubik Marker Hatch', cursive;

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
    margin: 2% 5%;
    
:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    color: #F0FFFF;
    cursor: pointer;
}
}`
