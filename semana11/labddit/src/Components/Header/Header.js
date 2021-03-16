import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { HeaderContainer, LogoContainer, HeaderItems } from './Style'
import { goToLogin, goToPosts, goToCreatePost } from '../../Router/Coordinator'
import { Button } from '@material-ui/core';


function Header({ valueBtnLogin, setValueBtnLogin/* , valueBtnCreatePost, setValueBtnCreatePost */ }) {

  const token = localStorage.getItem('token')
  const history = useHistory()
  let [urlAtual, setUrlAtual] = useState(false);
  let [valueBtnCreatePost, setValueBtnCreatePost] = useState('criar post')
  /* console.log(urlAtual) */


  const logout = () => {
    localStorage.removeItem('token')
  }

  const rigthBtnAction = () => {
    if (token) {
      logout()
      setValueBtnLogin('Login')
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  const goToCreatePostPage = () => {
    if (urlAtual === true) {
      console.log('entrei no if no topo', urlAtual)
      setValueBtnCreatePost('Criar Post')
      goToPosts(history)
      setUrlAtual(!urlAtual)
      console.log('entrei no if', urlAtual)
    } else {
      goToCreatePost(history)
      setValueBtnCreatePost('Posts')
      setUrlAtual(!urlAtual)
      console.log('entrei no else', urlAtual)
    }

    console.log(urlAtual)
  }

  const goToPostsPage = () => {
    goToPosts(history)
    setValueBtnCreatePost('Criar Post')
  }

  return (
    <HeaderContainer>
      <HeaderItems>
        <LogoContainer>
          <h1
            onClick={goToPostsPage}
            className='title'
          >Labeddit</h1>
        </LogoContainer>
        <div className='btnsRigth'>
          <Button
            id='btnCreatePost'
            onClick={goToCreatePostPage}
          >{valueBtnCreatePost}</Button>
          <Button
            className='btnLogin'
            onClick={rigthBtnAction}
          >{valueBtnLogin}</Button>
        </div>
      </HeaderItems>

    </HeaderContainer>
  );
}

export default Header;