// import React, {useState} from 'react';
import React from 'react'

import './global.css';

import Routes from './routes';


function App() {
  return (
      <Routes />
  );
}

export default App;

/*
  Components => uma função que retorna HTML e pode haver css e js

  JSX (JavaScript XML) html integrado dentro do javascript

  Propriedade => conceitos de atributos do html porém esses serão passados para o componente e não para o elemento no html

  Estado => Uma informação que vai ser mantida pelo componente / 

  imutabilidade => sobrepor a variável do estado


  function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1);
  }

  return (
    // <Header title="Semana OmniStack 11.0" />
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}
*/

