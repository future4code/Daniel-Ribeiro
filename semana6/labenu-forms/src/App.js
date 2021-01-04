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

  state = {
    etapa: 1,
    btn: true,
  } 

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Etapa1 />  
    }
  }

  irParaProximaEtapa = () => {
    let contadorEtapa = this.state.etapa + 1
    this.setState({etapa: contadorEtapa})

    if(contadorEtapa === 4){
      this.setState({btn: false})
    }
  }

  render() {
    return (
      <BoxApp>

        {this.renderizaEtapa()}

        <div>
          {this.state.btn ? <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button> : <div></div>}
        </div>
      </BoxApp>
    );
  }
  
}


