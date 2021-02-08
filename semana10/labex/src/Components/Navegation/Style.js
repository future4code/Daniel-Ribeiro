import styled from 'styled-components'

export const Header = styled.header`
    height: 15vh;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
    z-index: 1;

    @media(max-width: 768px){
        height: 10vh;
    }

    @media(max-width: 425px){
        height: 25vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 375px){
        height: 7vh;
    }
`

export const ContainerNav = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 768px){
        width: 60%;
    }

    @media(max-width: 425px){
        width: 100%;
    }

    @media(max-width: 375px){
        width: 100%;
    }
`

export const BtnNav = styled.button`
    border: none;
    background-color: #1652bfcf;
    color: white;
    font-size: 1.4em;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;

    &:focus{
        outline: none;
        
    }

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }

    @media(max-width: 768px){
        font-size: 1.4em;
        /* background: #000000b5; */
        border-radius: 5px;
    }
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 50px; 
    font-size: 1.2em;
    color: white;
    transition: 1s;

    &:hover{
        font-size: 1.5em;
    }

    @media(max-width: 425px){
        margin: 0;
    }
`
export const Logo = styled.h1`
    margin: 0;
    padding: 10px;
    cursor: pointer;
`