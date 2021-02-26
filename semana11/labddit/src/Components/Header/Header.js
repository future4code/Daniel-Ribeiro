import React from 'react';
import { useHistory } from 'react-router-dom';
import {HeaderContainer, LogoContainer} from './Style'
import {goToPosts} from '../../Router/Coordinator'


function Header() {

  const history = useHistory()
  return (
   <HeaderContainer>
       <LogoContainer>
         <h1 
         onClick={() => goToPosts(history)}
         className='title'
         >Labeddit</h1>
       </LogoContainer>
   </HeaderContainer>
  );
}

export default Header;