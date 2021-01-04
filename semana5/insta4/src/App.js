import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

//Estilos

const Boxform = styled.div`
  margin: ${props => props.marginTopDown} ${props => props.marginLeftRigth};
`

const InputPadrao = styled.input`
  margin: ${props => props.marginTopDown} ${props => props.marginLeftRigth};
`

const ButtonPadrao = styled.button`
  color: white;
  background-color: #000;
` 

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

    const novaPostagem = [novoPost, ...this.state.listaPost]
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
        <Boxform marginTopDown="10px" marginLeftRigth="0">
            <InputPadrao marginTopDown="0px" marginLeftRigth="10px" value={this.state.inputNome} placeholder="Nome" onChange={this.onChengeInputNome}/>
            <InputPadrao marginTopDown="0px" marginLeftRigth="10px" value={this.state.inputFotoPerfil} placeholder="Foto Perfil" onChange={this.onChengeInputFotoPerfil}/>
            <InputPadrao marginTopDown="0px" marginLeftRigth="10px" value={this.state.inputFotoPostagem} placeholder="Foto Postagem" onChange={this.onChengeInputFotoPostagem}/>
            <ButtonPadrao onClick={this.adicionarPost}>Adicionar</ButtonPadrao>
        </Boxform>
        <div className={'app-container'}>{listaPostagem}</div>
          
      </div>
    );
  }
}

export default App;
