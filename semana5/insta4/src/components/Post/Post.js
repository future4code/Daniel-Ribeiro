import React from 'react'
import './Post.css'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCompartilhar from '../../img/compartilhar.svg'
import iconeSaveBranco from '../../img/saveBranco.svg'
import iconeSavePreto from '../../img/savePreto.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'
import { ComentarioCompartilhar } from '../SecaoCompartilhar/ComentarioCompartilhar'

const BoxPosts = styled.div`
  border: ${props => props.borda};
  width: ${props => props.largura};
  margin-bottom: 10px;
`

const BoxHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const BoxFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  cursor: ${props => props.cursor};
`
const ImgUsuario = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
  
`

const ImgPost = styled.img`
  width: 100%;
  
`

const Icones = styled.img`
  cursor: pointer;
`


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false, 
    compartilhar: false,
    compartilharFace: false,
    compartilharInsta: false,
    compartilharTwitter: false,
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
    if(!this.state.compartilharFace){
      this.setState({
        compartilharFace: !this.state.compartilharFace,
        numeroCompartilhados: this.state.numeroCompartilhados +1,
      })
    } else if(this.state.compartilharFace){
      this.setState({
        compartilharFace: !this.state.compartilharFace,
      })
      
    }
    
  }

  compartilhadoInsta = () => {
    console.log('Post compartilhado no instagram')
    if(!this.state.compartilharInsta){
      this.setState({
        compartilharInsta: !this.state.compartilharInsta,
        numeroCompartilhados: this.state.numeroCompartilhados +1,
      })
    } else if(this.state.compartilharInsta){
      this.setState({
        compartilharInsta: !this.state.compartilharInsta,
      })
    }
    
  }

  compartilhadoTwitter = () => {
    console.log('Post compartilhado no twitter')
    if(!this.state.compartilharTwitter){
      this.setState({
        compartilharTwitter: !this.state.compartilharTwitter,
        numeroCompartilhados: this.state.numeroCompartilhados +1,
      })
    } else if(this.state.compartilharTwitter){
      this.setState({
        compartilharTwitter: !this.state.compartilharTwitter,
      })
    }
    
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

    let componenteComentarioCompartilhar 

    if(this.state.compartilharFace){
      componenteComentarioCompartilhar = <ComentarioCompartilhar aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilharInsta){
      componenteComentarioCompartilhar = <ComentarioCompartilhar aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilharTwitter){
      componenteComentarioCompartilhar = <ComentarioCompartilhar aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar 

    if(this.state.compartilhar){
      componenteCompartilhar =  <SecaoCompartilhar 
                                  onClickFace={this.compartilhadoFace}
                                  onClickInsta={this.compartilhadoInsta}
                                  onClickTwitter={this.compartilhadoTwitter}
                                />
    }

    return (
      <BoxPosts borda="1px solid gray" largura="300px">
        <BoxHeader >
          <ImgUsuario cursor="pointer" src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </BoxHeader>

        <ImgPost  src={this.props.fotoPost} alt={'Imagem do post'}/>

        <div className="post-footer" >
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
        {componenteComentarioCompartilhar}
      </BoxPosts>
    )
    
  }
}

export default Post