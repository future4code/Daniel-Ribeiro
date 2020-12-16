import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state ={
    listaPost: [
      {
        nome: 'Daniel',
        fotoPerfil: 'https://picsum.photos/50/50?ramdon=1',
        fotoPostagem: 'https://picsum.photos/200/150?ramdon=1'
      },
      {
        nome: 'Juliana',
        fotoPerfil: 'https://picsum.photos/50/50?ramdon=2',
        fotoPostagem: 'https://picsum.photos/200/150?ramdon=2'
      },
      {
        nome: 'Valter',
        fotoPerfil: 'https://picsum.photos/50/50?ramdon=3',
        fotoPostagem: 'https://picsum.photos/200/150?ramdon=3'
      },
    ]
  }

  listaPostagem = this.state.listaPost.map((post) => {
    return (
      <Post
        nomeUsuario={post.nome}
        fotoUsuario={post.fotoPerfil}
        fotoPost={post.fotoPostagem}
      />
    ) 
  })

  render() {
    return (
      <div className={'app-container'}>
          {this.listaPostagem}
      </div>
    );
  }
}

export default App;
