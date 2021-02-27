import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {HeaderContainer, LogoContainer, BtnLogin, HeaderItems } from './Style'
import {goToLogin, goToPosts} from '../../Router/Coordinator'
import { Button } from '@material-ui/core';


function Header({valueBtnLogin, setValueBtnLogin}) {

  const token = localStorage.getItem('token')
  const history = useHistory()
  
  const logout = () =>{
    localStorage.removeItem('token')
  }

  const rigthBtnAction = () =>{
    if(token){
      logout()
      setValueBtnLogin('Login')
      goToLogin(history)
    } else{
      goToLogin(history)
    }
  }

  return (
   <HeaderContainer>
     <HeaderItems>
     <LogoContainer>
         <h1 
         onClick={() => goToPosts(history)}
         className='title'
         >Labeddit</h1>
       </LogoContainer>
       <Button onClick={rigthBtnAction}>{valueBtnLogin}</Button>
     </HeaderItems>
       
   </HeaderContainer>
  );
}

export default Header;