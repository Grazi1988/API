//API (INTERFACE DE APLICAÇÃO DE PROGRAMAÇÃO) É UM SERVIÇO QUE PERMITE CONSUMIR DADOS DE UM OUTRO LOCAL, COMO: IMAGENS, TÍTULOS, DESCRIÇÃO... 

//AXIOS: É UMA BIBLIOTECA QUE PERMITE FAZER A LIGAÇÃO ENTRE O CLIENTE (A GENTE) E O SERVIDOR (BANCO DE DADOS)

import React, { useState, useEffect } from "react"
import axios from "axios" //O axios é a biblioteca que vamos utilizar para consumir a API
import * as S from "./ApiStyle"

function App() {

  //Esse array [] vai guardar as informações que forem puxadas da API
  const [data, setData] = useState([])


  //( ASYNC)É uma função que não é sincronizada com a página, ou seja, não depende da página para ser ativada, depende somente dos dados vindo da API.
  const getData = async () => {

    const resp = await axios.get('https://api.sampleapis.com/movies/comedy')
    setData(resp.data)

    //setData é a forma de atualizar o estado(data), resp são as informações da API, então. Pegue os dados da API e coloque no meu estado.

    //await: espere , get: pegue/pegar => Espere o axios pegar os dados da API filmes e guarde dentro da variável const "resp"

    console.log(resp)

  }

  //O HOOK USEEFFECT PERMITE QUE EXECUTAMOS EFEITOS COLATERAIS EM COMPONENTES FUNCIONAIS. NESTE CASOM QUEREMOS CARREGAR OS DADOS ASSIM QUE O COMPONENTE FUNCIONAL FOR MONTADO. 
  //O ARRAY VAZIO [] SERVE COMO ARGUMENTO PARA GARANTIR QUE O EFEITO SEJA EXUTADO APENAS UMA VEZ.

  useEffect(() => {
    getData()
  }, [])


  return (
    <S.Filmes>

      {data.map((item) => (
        <S.Poster>
          <img src={item.posterURL} alt={item.title} />
          <h2>{item.title} </h2>
          {/* <h3>{item.id}</h3> */}
        </S.Poster>
      ))}

    </S.Filmes>
  )
}

export default App