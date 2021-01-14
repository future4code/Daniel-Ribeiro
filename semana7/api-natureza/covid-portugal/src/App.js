import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

const BoxApp = styled.div`
  background-color: aqua;
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  margin: 0 auto;
`

class App extends React.Component {

  state = {
    dadosConfirmados: [],
    dateUser: ''
  }

  componentDidMount(){
    this.getDadosCovid()
  }

  getDadosCovid = async () =>{

    try {
      const response = await axios.get(`https://covid19-api.vost.pt/Requests/get_entry/10-01-2021`)
      this.setState({dadosConfirmados: response.data.confirmados})
      
    } catch(error) {
      console.log(error)
    }
    
  } 

  render(){
    console.log('dados confirmados', this.state.dadosConfirmados)
    return (
      <BoxApp>
        <h1>Infos sobre Covid-19 em Portugal</h1>

        <div>
          {this.state.dadosConfirmados[319]}
        </div>
      </BoxApp>
    );
  }
  
}

export default App;
