import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

const BoxApp = styled.div`
  background-color: aqua;
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 70vw;
  margin: 0 auto;
  text-align: center;
`

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`

const BoxDate = styled.div`
  text-align: center;
`

const BtnDate = styled.button`

`

const BoxData = styled.div`
  text-align: start;
  width: 70%;
  margin: 0 auto;
`

class App extends React.Component {

  state = {
    dados: [],
    dadosConfirmados: [],
    dadosObitos: [],
    dadosAtivos: [],
    dadosRecuperadsos: [],
    dadosInternados: [],
    inputDate: '',
    datas: [],
    indice: ''
  }

  componentDidMount() {
    this.getDadosCovid()

  }

  onChangeDate = (e) => {
    this.setState({ inputDate: e.target.value })
  }

  onClickDate = () => {
    this.getDadosCovid()
    const indice1 = this.state.dados.indexOf(this.state.inputDate)
    this.setState({ indice: indice1 })
  }



  getDadosCovid = async () => {

    try {
      const response = await axios.get(`https://covid19-api.vost.pt/Requests/get_full_dataset`)
      this.setState({
        dados: response.data,
        datas: Object.values(response.data.data),
        dadosConfirmados: Object.values(response.data.confirmados),
        dadosObitos: Object.values(response.data.obitos),
        dadosAtivos: Object.values(response.data.ativos),
        dadosInternados: Object.values(response.data.internados),
        dadosRecuperadsos: Object.values(response.data.recuperados)
      })

    } catch (error) {
      console.log(error)
    }

  }

  render() {

    console.log(this.state.dados)

    return (
      <BoxApp>
        <h1>Infos sobre Covid-19 em Portugal</h1>

        <BoxContent>
          <BoxDate>
            <input onChange={this.onChangeDate} placeholder='dd-mm-yyyy' />
            <BtnDate onClick={this.onClickDate}>Pesquisar</BtnDate>
          </BoxDate>


          <BoxData>
            <p>Casos Confirmados: {this.state.dadosConfirmados[this.state.indice]}</p>
            <p>Casos Ativos: {this.state.dadosAtivos[this.state.indice]}</p>
            <p>Pessoas internadas: {this.state.dadosInternados[this.state.indice]}</p>
            <p>Óbitos: {this.state.dadosObitos[this.state.indice]}</p>
            <p>Casos Recuperados: {this.state.dadosRecuperadsos[this.state.indice]}</p>
          </BoxData>
        </BoxContent>

      </BoxApp>
    )
  }

}

export default App;
