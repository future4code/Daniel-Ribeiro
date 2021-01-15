import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BoxApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

class App extends React.Component {

  state = {
    inputValuePlaylist: '',
    listaPLaylist: []
  }

  componentDidMount(){
    if(this.state.listaPLaylist){
      this.getAllPlaylist()
    }
    
  }

  pegarNamePlaylist = (e) =>{
    this.setState({inputValuePlaylist: e.target.value})
  }

  createPlaylist = () =>{
    const bady = {
      name: this.state.inputValuePlaylist
    }

    const request = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', bady, {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) =>{
      alert('Playlist criada com sucesso.')
      this.getAllPlaylist()
      this.setState({inputValuePlaylist: ''})
    })
    .catch((error) =>{
      alert('Playlist não foi criada.')
    })
  }

  getAllPlaylist = () =>{
    const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) =>{
      this.setState({listaPLaylist: response.data.result.list})
      console.log('infos',response.data.result.list)
    })
    .catch((error) =>{
      alert('Playlist não foi renderizada.')
    })
  }

  render() {
      const listaRenderizada = this.state.listaPLaylist.map((playlist) =>{
      return (
        <p>{playlist.name}</p>
      )
    }) 

    return (
      <BoxApp>
        <div>
          <label>Insira o nome da playlist: </label>
          <input onChange={this.pegarNamePlaylist} value={this.state.inputValuePlaylist}/>
          <button onClick={this.createPlaylist}>Criar</button>
        </div>

        <div>
          {listaRenderizada}
        </div>
      </BoxApp>
    );
  }

}

export default App;
