import styled from "styled-components";

export const Section = styled.section`
display: flex;
justify-content: space-between;
`

export const Esquerda = styled.nav`
background-color: orange;
padding-right: 19vw;
`
export const Meio = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-around;
padding-bottom: 1vw;

p{
    margin:  10px 10px 5px 10px;
}

input, button{
    margin:  5px 10px 4px 0px;

}

`


export const Direita = styled.nav`
background-color: orange;
padding-left: 19vw;
padding-bottom: 38vw;
`