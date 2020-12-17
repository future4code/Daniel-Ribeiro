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
    ],

    inputNome: '',
    inputFotoPerfil: '',
    inputFotoPostagem: '',

  }


  adicionarPost = () => {
    console.log('cliquei')
    const novoPost = {
      nome: this.state.inputNome,
      fotoPerfil: this.state.inputFotoPerfil,
      fotoPostagem: this.state.inputFotoPostagem,
    }

    const novaPostagem = [...this.state.listaPost, novoPost]
    this.setState({listaPost: novaPostagem})
  }

  onChengeInputNome = (event) => {
    console.log('Input nome', event.target.value)
    this.setState({inputNome: event.target.value})
  }

  onChengeInputFotoPerfil = (event) => {
    console.log('input Foto perfl', event.target.value)
    this.setState({inputFotoPerfil: event.target.value})
  }

  onChengeInputFotoPostagem = (event) => {
    console.log('input Foto postagem', event.target.value)
    this.setState({inputFotoPostagem: event.target.value})
  }


  
  render() {

    const listaPostagem = this.state.listaPost.map((post) => {
      return (
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={post.fotoPerfil}
          fotoPost={post.fotoPostagem}
        />
      ) 
    })
  
    return (
      <div className={'app-container'}>
        <div>
            <input value={this.state.inputNome} onChange={this.onChengeInputNome}/>
            <input value={this.state.inputFotoPerfil} onChange={this.onChengeInputFotoPerfil}/>
            <input value={this.state.inputFotoPostagem} onChange={this.onChengeInputFotoPostagem}/>
            <button onClick={this.adicionarPost}>Adicionar</button>
        </div>
        <div className={'app-container'}>{listaPostagem}</div>
          
      </div>
    );
  }
}

export default App;
