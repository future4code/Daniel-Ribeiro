import styled from 'styled-components';
import BackgroundImg from '../../img/backgroundAdmin.png'


export const ContainerAdmin = styled.div`
    background-color: #0c1626;
    min-height: 100vh;
    width: 100vw;
    background-image: url(${BackgroundImg});
    background-size: 30%;
    background-position: right bottom;
    background-repeat: no-repeat;

    @media(max-width: 768px){
        background-image: none;
    }

    @media(max-width: 425px){
        background-image: none;
    }
`

export const ContainerMainAdmin = styled.div`
    position: relative;
    top: 150px;

    h1{
        margin: 0;
    }

    @media(max-width: 425px){
        background-color: #0c1626;
    }
`

export const ContainerCards = styled.div`
    display: flex;
    width: 60%;
    color: white;

    @media(max-width: 768px){
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media(max-width: 425px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Card = styled.div`
    height: 60vh;
    margin: 40px;
    background: #807ca53b;
    border-radius: 10px;
    width: 350px;
    padding: 10px;
    box-shadow: 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media(max-width: 768px){
        margin: 0 20px;
        width: 300px;
    }

    @media(max-width: 425px){
        margin: 15px 0;
    }
`

export const ContainerImg = styled.div`
    
`

export const Img = styled.img`
    height: 200px;
`

export const ContainerBtn = styled.div`
    width: 150px;
    height: 35px;
    background-color: #3a54eff0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    /* box-shadow: 0 0 10px; */
    transition: 0.5s;

    &:hover{
        font-size: 1.2em;
        width: 200px;
    }
`

export const BtnNav = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
    font-size: 1.2em;
    padding: 5px 10px;

    &:focus{
        outline: none;
    }
    
`
