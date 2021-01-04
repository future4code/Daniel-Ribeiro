import React from "react";
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components'

const BoxApp = styled.div`
  text-align: center;
`

export default class App extends React.Component {
  render() {
    return (
      <BoxApp>
        <Final />

        <div>
          <button>Próxima Etapa</button>
        </div>
      </BoxApp>
    );
  }
  
}


