import React from 'react'
import styled from 'styled-components'
import ListaUsuario from './components/listaUsuario/ListaUsuario'
import FormUsuario from './components/formUsuario/FormUsuario'

const BoxApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

export default class App extends React.Component {

  state = {
    mostrarLista: false
  }

  mudarComponente = () => {
    this.setState({ mostrarLista: !this.state.mostrarLista })
  }

  render() {
    return (
      <BoxApp>

        {this.state.mostrarLista ? <ListaUsuario /> : <FormUsuario />}

        <button onClick={this.mudarComponente}>
          {this.state.mostrarLista ? 'Ir para Cadastro' : 'Ir para Lista Usuário'}
        </button>
      </BoxApp>
    )
  }

}


