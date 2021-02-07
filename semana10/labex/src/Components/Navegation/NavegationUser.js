import React from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from '../../Routes/Coordinator';
import { Header, ContainerNav, BtnNav, ContainerLogo, Logo } from '../Navegation/Style'

const HomePage = () => {

  const history = useHistory()

  return (
    <Header>
      <ContainerLogo>
        <Logo onClick={() => goToPage(history, '/')}>LabeX</Logo>
      </ContainerLogo>
      <ContainerNav>
        <BtnNav onClick={() => goToPage(history, '/login')}>Login</BtnNav>
        <BtnNav onClick={() => goToPage(history, '/trips/details')}>Viagens</BtnNav>
      </ContainerNav>
    </Header>
  )
};

export default HomePage;
