import React from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from '../../Routes/Coordinator';
import { Header, ContainerNav, BtnNav, ContainerLogo, Logo } from '../Navegation/Style'

const HomePage = () => {

    /* const removeToken = localStorage.getItem('token')
    console.log(removeToken) */
    const history = useHistory()

    const logout = () =>{
        localStorage.removeItem('token')
        goToPage(history, '/')
    }

    return (
        <Header>
            <ContainerLogo>
                <Logo onClick={() => goToPage(history, '/')}>LabeX</Logo>
            </ContainerLogo>
            <ContainerNav>
                <BtnNav onClick={() => goToPage(history, '/trips/list')}>Viagens</BtnNav>
                <BtnNav onClick={() => goToPage(history, '/trips/create')}>Criar Viagem</BtnNav>
                <BtnNav onClick={() => logout()}>Logout</BtnNav>
            </ContainerNav>
        </Header>
    )
};

export default HomePage;