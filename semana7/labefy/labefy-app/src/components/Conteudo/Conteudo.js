import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import '../Conteudo/ConteudoFont.css'

const BoxConteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 95vh;
  width: 80%;
  flex-wrap: wrap;
`
const CardGeral = styled.div`
  border-color: #f2f2f2;
  flex: 1;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4em;
  height: 100%;
  width: 50%;
`

const ContainerPlaylists = styled.div`
  text-align: center;
  font-size: 1.4em;
  width: 100%;
`

const BoxDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`

const BoxChildDetails = styled.div`
  /* flex: 1; */
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 450px;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin: 15px;
`

const CardPlaylistsMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`

const CardPlaylists = styled.div`
  color: black;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
`

const InputGeral = styled.input`
  width: 100%;
  border-radius: 5px;
  margin: 10px 0;
  height: 20px;
`

const BtnGeral = styled.button`
  width: 250px;
  border-radius: 5px;
  margin: 2px 0;
  height: 25px;
  cursor: pointer;
`

const BtnDetails = styled.button`
  margin: 10px 0;
  cursor: pointer;
`

const Select = styled.select`
  border-radius: 5px;
  font-size: 1.1em;
`

const TagP = styled.p`
  display: inline-block;
`

class Conteudo extends React.Component {

  state = {
    changePage: true,
    inputValuePlaylist: '',
    listaPLaylist: [],
    detalhesPlaylist: [],
    nameTrack: '',
    artistTrack: '',
    urlTrack: '',
    select: '',
    visibilidadeDetails: false,
    nomePlaylist: '',
    idPlaylist: ''
  }

  goToPlaylists = () => {
    this.setState({ changePage: !this.state.changePage })
  }

  getIdPlaylist = (playlists, namePLaylist) => {
    playlists.map((playlist) => {
      return (playlist.name === namePLaylist) ? playlist.id : ''
    })
  }

  componentDidMount() {
    if (this.state.listaPLaylist) {
      this.getAllPlaylist()
    }
  }

  componentDidUpdate() {
    this.getDetails()
  }

  pegarNamePlaylist = (e) => {
    this.setState({ inputValuePlaylist: e.target.value })
  }

  createPlaylist = () => {
    const bady = {
      name: this.state.inputValuePlaylist
    }

    const request = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', bady, {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) => {
      alert('Playlist criada com sucesso.')
      this.getAllPlaylist()
      this.setState({ inputValuePlaylist: '' })
    })
      .catch((error) => {
        alert('Playlist não foi criada.')
      })
  }

  getAllPlaylist = () => {
    const request = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) => {
      this.setState({ listaPLaylist: response.data.result.list })
      console.log('infos', response.data.result.list)
    })
      .catch((error) => {
        alert('Playlist não foi renderizada.')
      })
  }

  deletePlaylist = (id) => {
    const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) => {
      alert('Sua playlist foi deletada.')

      this.getAllPlaylist()
    })
      .catch((error) => {
        alert('Não foi possível deletar playlist.')
      })

  }

  deleteTrack = (idPlaylist, idTrack) => {
    /*  if (idPlaylist !== undefined || idPlaylist !== ''){ */
    const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${idTrack}`, {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) => {
      alert('Música deletada com sucesso.')
      this.getAllPlaylist()
      this.getDetails(idPlaylist)
    })
      .catch((error) => {
      })
    /* } */ /* else {
      alert('Não foi possível deletar música fora do if.')
    } */

  }

  getDetails = (id, playlistName) => {
    const arrayNomePlaylist = playlistName
    console.log('nomes playlist', arrayNomePlaylist)
    const request = axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks
    `, {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) => {
      /* alert('Acesso ao detalhes liberado') */
      this.setState({
        detalhesPlaylist: response.data.result.tracks,
        visibilidadeDetails: !this.state.visibilidadeDetails,
        /* changePage: !this.state.changePage, */
        nomePlaylist: playlistName,
        idPlaylist: id,
      })
      console.log('Detalhes', response)
      this.getAllPlaylist()
    })
      .catch((error) => {
      })
  }

  onChangeNameTrack = (e) => {
    this.setState({ nameTrack: e.target.value })
  }

  onChangeArtistTrack = (e) => {
    this.setState({ artistTrack: e.target.value })
  }

  onChangeUrlTrack = (e) => {
    this.setState({ urlTrack: e.target.value })
  }

  addTrack = (event) => {
    const id = event.target.value
    const body = {
      name: this.state.nameTrack,
      artist: this.state.artistTrack,
      url: this.state.urlTrack
    }
    const request = axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
      headers: {
        Authorization: 'daniel-ribeiro-epps'
      }
    })
    request.then((response) => {
      alert('Track adicionada com sucesso')
      this.setState({
        nameTrack: '',
        artistTrack: '',
        urlTrack: '',
      })
    })
      .catch((error) => {
        alert('Não foi possível adicionar track.')
      })
  }

  render() {
    /*  const listaCompleta = [...this.state.listaPLaylist, ...this.state.detalhesPlaylist] */
    console.log('Lista detalhes', this.state.detalhesPlaylist)


    const detalhesRenderizados = this.state.detalhesPlaylist.map((detalhe) => {
      /* const idPlaylist = this.getIdPlaylist(this.state.listaPLaylist, this.state.nomePlaylist) */
      return (
        <BoxChildDetails>
          <p>Nome: {detalhe.name}</p>
          <p>Artista: {detalhe.artist}</p>
          <audio controls>
            <source src={detalhe.url} type="audio/mpeg" />
          </audio>
          <BtnDetails onClick={() => this.deleteTrack(this.state.idPlaylist, detalhe.id)}>Deletar música</BtnDetails>
        </BoxChildDetails>
      )
    })
    const listaRenderizada = this.state.listaPLaylist.map((playlist) => {
      return (
        <CardPlaylists>
          <TagP >{playlist.name}</TagP>
          <BtnGeral onClick={() => { this.deletePlaylist(playlist.id) }}>Deletar Playlist</BtnGeral>
          <BtnGeral onClick={() => { this.getDetails(playlist.id, playlist.name) }}>Ver Detalhes</BtnGeral>
        </CardPlaylists>
      )
    })

    const addTrackRenderizar =
      <CardGeral>

        <h2>Adicionar track</h2>

        <label>Nome: </label>
        <InputGeral
          onChange={this.onChangeNameTrack}
          value={this.state.nameTrack}
          placeholder='Nome da música'
        />

        <label>Artista: </label>
        <InputGeral
          onChange={this.onChangeArtistTrack}
          value={this.state.artistTrack}
          placeholder='Nome da(o) artista'
        />

        <label>Link: </label>
        <InputGeral
          onChange={this.onChangeUrlTrack}
          value={this.state.urlTrack}
          placeholder='Link da música .mp3'
        />

        <Select onChange={this.addTrack}>
          <option>Playlist</option>
          {this.state.listaPLaylist.map((playlist) => {
            return <option value={playlist.id}>{playlist.name}</option>
          })}
        </Select>
      </CardGeral>

    return (

      <BoxConteudo>
        <BoxConteudo>
          <CardGeral>
            <h2>Adicionar playlist</h2>
            <label>Insira o nome da playlist: </label>
            <InputGeral onChange={this.pegarNamePlaylist} value={this.state.inputValuePlaylist} />
            <BtnGeral onClick={this.createPlaylist}>Criar Playlist</BtnGeral>
          </CardGeral>

          {addTrackRenderizar}
        </BoxConteudo>
        {/* <button onClick={this.goToPlaylists}>Playlists</button> */}

        <ContainerPlaylists>
          <h2>Playlists</h2>
          <CardPlaylistsMain>
            {listaRenderizada}
          </CardPlaylistsMain>


          {this.state.detalhesPlaylist &&
            <div>
              <div>
                <h2>Músicas</h2>
                <h3>{this.state.nomePlaylist}</h3>
              </div>

              <BoxDetails>
                {detalhesRenderizados}
              </BoxDetails>
            </div>
          }

        </ContainerPlaylists>


      </BoxConteudo>
    );
  }

}

export default Conteudo;
