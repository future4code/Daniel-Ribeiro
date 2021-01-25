import React from 'react'
import styled from 'styled-components'
import Conteudo from './components/Conteudo/Conteudo'
import Header from './components/header/Header'
import img from './imgs/img-home.jpg';

const BoxApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  /* height: 100vh; */
  background-image: url(${img});
  background-position: center;
`

class App extends React.Component {

  /* state = {
    changePage: false,
    inputValuePlaylist: '',
    listaPLaylist: [],
    detalhesPlaylist: [],
    nameTrack: '',
    artistTrack: '',
    urlTrack: '',
    select: '',
    visibilidadeDetails: false,
  }

  goToPlaylists = () => {
    this.setState({ changePage: !this.state.changePage })
  }
 */
  

  render() {
    return (

      <BoxApp>

        <Header />

        <Conteudo />

      </BoxApp>
    );
  }

}

export default App;
