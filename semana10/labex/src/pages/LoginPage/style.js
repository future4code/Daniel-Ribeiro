import styled from 'styled-components';
import BackgroundLogin from '../../img/backgroundLogin.jpg'

export const ContainerLogin = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex; 
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${BackgroundLogin});
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
`

export const ContainerMainLogin = styled.div`
    position: relative;
    top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 450px;
    height: 45vh;
    backdrop-filter: blur(2px);
    border-radius: 10px;
    background-color: #100e0e54;
    box-shadow: 0 0 10px white;
`

export const ContainerInputLogin = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ContainerInputItem = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 40px;
    justify-content: space-between;
    margin: 5px 0;

    label{
        font-size: 1.2em;
        font-weight: bold;
    }
`

export const ContainerBtn = styled.div`
    margin-top: 30px;
    background-color: #333030c4;
    height: 40px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px; 
    box-shadow: 0 0 10px white;
`

export const BtnLogin = styled.div`
    cursor: pointer;
    padding: 8px 20px;
    color: white;
    font-size: 1.2em;
    transition: 0.5s;

    &:hover{
        font-size: 1.5em;
    }
`

export const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: none;

    &:focus{
        outline: none;
    }

    &:hover{
        border: 1px solid black;
    }
`