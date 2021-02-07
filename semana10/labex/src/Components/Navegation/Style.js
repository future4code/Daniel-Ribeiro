import styled from 'styled-components'

export const Header = styled.header`
    height: 15vh;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
    z-index: 1;
`

export const ContainerNav = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const BtnNav = styled.button`
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1.7em;
    padding: 10px;
    cursor: pointer;

    &:focus{
        outline: none;
        
    }

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
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
`
export const Logo = styled.h1`
    margin: 0;
    padding: 10px;
    cursor: pointer;
`