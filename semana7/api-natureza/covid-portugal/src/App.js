import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Infos from './components/Infos'
import covidLogo from './img/covid1.png'

const BoxApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 100vh; */
  width: 90vw;
  margin: 30px auto;
  text-align: center;
`

const BoxContentMain = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;
  height: 90vh;
`

const Title = styled.h1`
  margin: 10px;
  padding: 10px;
`

const CovidImg = styled.img`
  width: 250px;
`

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`

const BoxDate = styled.div`
  text-align: center;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
`

const BtnDate = styled.button`
  margin-left: 15px;
`



const InputDate = styled.input`
  width: 75px;
  margin-left: 15px;
`


class App extends React.Component {

  state = {
    dadosConfirmados: [],
    dadosObitos: [],
    dadosAtivos: [],
    dadosRecuperadsos: [],
    dadosInternados: [],
    inputDate: '',
    datas: [],
    indice: '',
    renderizar: false
  }

    componentDidMount() {
    this.getDadosCovid()
  }

  onChangeDate = (e) => {
    this.setState({ inputDate: e.target.value })
  }

  onClickDate = () => {
    this.getDadosCovid()

    if(this.state.inputDate){
      const indice = this.state.datas.indexOf(this.state.inputDate)
    this.setState({ indice: indice })
    this.setState({ renderizar: !this.state.renderizar })
    } else {
      alert('Insira uma data!')
    }
    
  }

  getDadosCovid = async () => {

    try {
      const response = await axios.get(`https://covid19-api.vost.pt/Requests/get_full_dataset`)
      this.setState({
        /* dados: response.data, */
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
    const dia = this.state.inputDate
    console.log('data', this.state.inputDate)
    return (
      <BoxApp>
        <BoxContentMain>
          <Title>Infos sobre Covid-19 em Portugal</Title>

          <div>
            <CovidImg src={covidLogo} alt='covid-19'/>
          </div>

          <BoxContent>
            <BoxDate>
              <label>Insira uma data: </label>
              <InputDate  onChange={this.onChangeDate} placeholder='dd-mm-yyyy' required/>

              <BtnDate onClick={this.onClickDate}>Pesquisar</BtnDate>
            </BoxDate>

           {this.state.renderizar && this.state.inputDate && <Infos 
            dadosConfirmados={this.state.dadosConfirmados}
            dadosObitos={this.state.dadosObitos}
            dadosRecuperadsos={this.state.dadosRecuperadsos}
            dadosInternados={this.state.dadosInternados}
            dadosAtivos={this.state.dadosAtivos}
            inputdate={dia}
            indice={this.state.indice}
          />}
          </BoxContent>
        </BoxContentMain>

      </BoxApp>
    )
  }

}

export default App;
