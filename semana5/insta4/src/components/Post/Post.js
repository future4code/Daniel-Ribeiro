import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCompartilhar from '../../img/compartilhar.svg'
import iconeSaveBranco from '../../img/saveBranco.svg'
import iconeSavePreto from '../../img/savePreto.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false, 
    compartilhar: false,
    numeroCompartilhados: 0,
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if(!this.state.curtido && this.state.numeroCurtidas === 0){
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas +1,
      })
    } else if(this.state.curtido && this.state.numeroCurtidas === 1){
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas -1,
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios +1
    })
  }

  compartilhadoFace = () => {
    console.log('Post compartilhado no facebook')
    this.setState({
      numeroCompartilhados: this.state.numeroCompartilhados +1,
    })
  }

  compartilhadoInsta = () => {
    console.log('Post compartilhado no instagram')
    this.setState({
      numeroCompartilhados: this.state.numeroCompartilhados +1,
    })
  }

  compartilhadoTwitter = () => {
    console.log('Post compartilhado no twitter')
    this.setState({
      numeroCompartilhados: this.state.numeroCompartilhados +1,
    })
  }

  onClickCompartilhar = () => {
    console.log('enviouuuuu')
    this.setState({
      compartilhar: !this.state.compartilhar,
    })
    console.log(this.state.numeroCompartilhados)
  }

  onClickSave = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let postSalvo

    if(this.state.salvo){
      postSalvo = iconeSavePreto
    } else {
      postSalvo = iconeSaveBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar 

    if(this.state.compartilhar){
      componenteCompartilhar =  <SecaoCompartilhar 
                                  onClickFace={this.compartilhadoFace}
                                  onClickInsta={this.compartilhadoInsta}
                                  onClickTwitter={this.compartilhadoTwitter}
                                />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={postSalvo}
          onClickIcone={this.onClickSave}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
          valorContador={this.state.numeroCompartilhados}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post