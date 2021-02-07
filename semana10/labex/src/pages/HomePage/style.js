import styled, { keyframes } from 'styled-components';
import Galaxy from '../../img/galaxy.png'

export const ContainerHome = styled.div`
    background-image: url(${Galaxy});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100vh;
    color: white;
`

export const ContainerAstronauta = styled.div`
    height: 25vh;
    background-color: rgb(0 0 0 / 63%);
    border-radius: 10px;
    box-shadow: 0 0 10px;
    position: relative;
    top: 150px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

export const ProgressAstronauta = keyframes`
    0%      {left:0px; top:0px;}
    20%     {left:200px; top:50px;}
    40%     {top: -50px; left: 400px}
    60%     {left: 600px; top: 50px}
    80%     {top: -50px; left: 800px;}
    100%    {left: 1000px; top: 50px}
`

export const ImgAstronauta = styled.img`
    height: 150px;
    
    animation: ${ProgressAstronauta} 15s infinite;
    position: relative;
`
export const ContainerContent = styled.div`
    height: 35vh;
    position: relative;
    top: 200px;
    background-color: rgb(0 0 0 / 68%);
    border-radius: 10px;
    box-shadow: 0 0 10px;
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const H2 = styled.h2`
    margin-top: 0;
`

export const ContainerBtnViagens = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255 255 255 / 75%);
    border-radius: 10px;
    height: 40px;
    width: 300px;
    margin: 20px auto;
`

export const BtnViagens = styled.button`
    border: none;
    background-color: transparent;
    color: black;
    font-size: 1.2em;
    padding: 10px;
    cursor: pointer;
    transition: 1s;

    &:hover{
        font-size: 1.5em;
    }

    &:focus{
        outline: none;
    }
`