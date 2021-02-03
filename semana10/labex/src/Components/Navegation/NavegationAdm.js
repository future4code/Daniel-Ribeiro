import React from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from '../../Routes/Coordinator';
import { Header, ContainerNav, ContainerLogo, Logo } from '../Navegation/Style'

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
                {/* <button onClick={() => goToPage(history, '/login')}>Login</button>
        <button onClick={() => goToPage(history, '/register')}>Inscrever-se</button> */}
                <button onClick={() => goToPage(history, '/trips/list')}>Viagens</button>
                <button onClick={() => goToPage(history, '/trips/details')}>Detalhes</button>
                <button onClick={() => goToPage(history, '/trips/create')}>Criar Viagem</button>
                <button onClick={() => logout()}>Logout</button>
            </ContainerNav>
        </Header>
    )
};

export default HomePage;