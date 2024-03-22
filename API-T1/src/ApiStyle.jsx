import styled from "styled-components"

export const Filmes = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`

export const Poster = styled.div`
border: solid black 5px;
width: 30vw;
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-around;
margin: 0,5rem;
background-color: #9500FF;
border-radius: 50px;
background-image: url("https://yata-apix-cbb6b702-ef1a-4258-908c-6cfa93768a5c.s3-object.locaweb.com.br/13ccb0ed6a4c4b8b8d6e06bab0378823.png");
background-repeat: no-repeat;
background-position: center;
background-size: 50%;
background-image: linear-gradient(to right, #ff0062,orange,yellow,green,blue,indigo,violet);

h2{
    text-align: center;
}
;
`
