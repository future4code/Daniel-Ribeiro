import React from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from '../../Routes/Coordinator';
import { Header, ContainerNav, ContainerLogo, Logo } from '../Navegation/Style'

const HomePage = () => {

  const history = useHistory()

  return (
    <Header>
      <ContainerLogo>
        <Logo onClick={() => goToPage(history, '/')}>LabeX</Logo>
      </ContainerLogo>
      <ContainerNav>
        <button onClick={() => goToPage(history, '/login')}>Login</button>
        <button onClick={() => goToPage(history, '/application-form')}>Inscrever-se</button>
      </ContainerNav>
    </Header>
  )
};

export default HomePage;
