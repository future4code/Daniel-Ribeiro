import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BoxApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const BoxListaRenderizada = styled.div`
  width: 100%;
  text-align: center;
`

const TagP = styled.p`
  display: inline-block;
`

class App extends React.Component {

  state = {
    inputValuePlaylist: '',
    listaPLaylist: [],
    detalhesPlaylist: []
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

  deletePlaylist = (id) =>{
    const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) =>{
      alert('Sua playlist foi deletada.')
      
      this.getAllPlaylist()
    })
    .catch((error) =>{
      alert('Não foi possível deletar playlist.')
    })

  }

  getDetails = (id) =>{
    const request = axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks
    `, {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) =>{
      alert('Acesso ao detalhes liberado')
      this.setState({detalhesPlaylist: response.data.result.tracks})
      console.log('Detalhes', response)
      this.getAllPlaylist()
    })
    .catch((error) =>{
      alert('Não foi possível ver detalhes da playlist.')
    }) 
  }

  render() {
      const detalhesRenderizados = this.state.detalhesPlaylist.map((detalhe) =>{
        return (
          <div>
            <div>
              <p>Nome: {detalhe.name}</p>
              <p>Artista: {detalhe.artist}</p>
              <p>Url: {detalhe.url}</p>
            </div>
          </div>
        )
      })
      const listaRenderizada = this.state.listaPLaylist.map((playlist) =>{
      return (
        <BoxListaRenderizada>
          <TagP>{playlist.name}</TagP>
          <button onClick={()=> {this.deletePlaylist(playlist.id)}}>Del Playlist</button>
          <button onClick={()=> {this.getDetails(playlist.id)}}>Detalhes Playlist</button>
        </BoxListaRenderizada>
      )
    }) 

    return (
      <BoxApp>
        <div>
          <label>Insira o nome da playlist: </label>
          <input onChange={this.pegarNamePlaylist} value={this.state.inputValuePlaylist}/>
          <button onClick={this.createPlaylist}>Criar</button>
        </div>

        <BoxListaRenderizada>
          {listaRenderizada}
        </BoxListaRenderizada>
        <di>
        {detalhesRenderizados}
        </di>
      </BoxApp>
    );
  }

}

export default App;
