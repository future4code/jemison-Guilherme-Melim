import styled from 'styled-components'

export const ContainerPai = styled.button`

    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: space-around;
    background: rgba( 255, 255, 255, 0.1 );
    width: 40vw;
    height: 8vw;
    border-radius: 20px;
    border: solid 1.5px black;
    box-shadow: 3px 3px 3px;
    margin: 3% 30%;
    

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

:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
}
}
`

export const NomeBotão = styled.div`
display: flex;
font-size: 20px;

:hover{
    color: #F0FFFF;
    cursor: pointer;
}

`
export const BotoesPage = styled.div`

button{
    font-weight: bold;
    padding: 1%;
    border: none;
    background: rgba( 255, 255, 255, 0.1 );
    border-radius: 10px;
    margin: 2% 5%;
    font-size: 20px;
    
:hover{
    box-shadow: 3px 3px 3px #F0FFFF;
    color: #F0FFFF;
    cursor: pointer;
}
}`

export const Title = styled.h1`
    margin: 5% 0% 0% 40%;
    width: 20%;
    font-size: 300%;
    font-family: 'Rubik Marker Hatch', cursive;
    
:hover{
    color: #F0FFFF;
}`