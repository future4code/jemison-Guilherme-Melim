import styled from 'styled-components'


export const ContainerPai = styled.button`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: rgba( 255, 255, 255, 0.1 );
    border-radius: 20px;
    border: solid 1.5px black;
    box-shadow: 3px 3px 3px;
    margin: 10% 35%;
    font-family: 'Rubik Marker Hatch', cursive;
    

:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    color: #F0FFFF;
    font-weight: bold
} 

button{ 
    padding: 2%;
    border: none;
    background: rgba( 255, 255, 255, 0.1 );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    font-size: 20px;

:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
}

h1{
    font-size: 500%;
    font-family: 'Rubik Marker Hatch', cursive;
}

}`

export const Botoes = styled.h1`

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

export const Inputs = styled.div`
display: flex;
flex-direction: column;
margin: 10px 70px;

input{
    margin: 10px;

}

select{
    margin: 10px;
}`