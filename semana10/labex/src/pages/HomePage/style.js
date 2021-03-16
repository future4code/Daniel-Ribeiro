import styled, { keyframes } from 'styled-components';
import Galaxy from '../../img/galaxy.png'

export const ContainerHome = styled.div`
    background-image: url(${Galaxy});
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    color: white;

    @media(max-width: 768px){
        height: 100vh;
        background-size: cover;
    }
`

export const ContainerMainHome = styled.div`
    min-height: 100%;
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

    @media(max-width: 768px){
        height: 20vh;
    }

    @media(max-width: 425px){
        height: 15vh;
        top: 200px;
    }
`

export const ProgressAstronauta = keyframes`
    0%      {left:0px; top:0px;}
    20%     {left:200px; top:50px;}
    40%     {top: -50px; left: 400px}
    60%     {left: 600px; top: 50px}
    80%     {top: -50px; left: 800px;}
    100%    {left: 1000px; top: 50px};

`

export const ProgressAstronautaMedium = keyframes`
    0%      {left:0px; top:0px;}
    20%     {left:100px; top:50px;}
    40%     {top: -50px; left: 200px}
    60%     {left: 400px; top: 50px}
    80%     {top: -50px; left: 600px;}
    100%    {left: 750px; top: 50px};
`

export const ProgressAstronautaSmall = keyframes`
    0%      {left:0px; top:0px;}
    20%     {left:50px; top:50px;}
    40%     {top: -50px; left: 100px}
    60%     {left: 200px; top: 50px}
    80%     {top: -50px; left: 300px;}
    100%    {left: 450px; top: 50px};
`

export const ProgressAstronautaExtraSmall = keyframes`
    0%      {left:0px; top:0px;}
    20%     {left:25px; top:40px;}
    40%     {top: -40px; left: 75px}
    60%     {left: 125px; top: 40px}
    80%     {top: -40px; left: 175px;}
    100%    {left: 225px; top: 40px};
`


export const ImgAstronauta = styled.img`
    height: 150px;
    
    animation: ${ProgressAstronauta} 15s infinite;
    position: relative;

    @media(max-width: 1024px){
        height: 100px;
        animation: ${ProgressAstronautaMedium} 15s infinite;
    }

    @media(max-width: 768px){
        height: 100px;
        animation: ${ProgressAstronautaSmall} 10s infinite;
    }

    @media(max-width: 425px){
        height: 100px;
        animation: ${ProgressAstronautaExtraSmall} 10s infinite;
    }
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

    @media(max-width: 768px){
        H1{
            font-size: 1.4em;
        }
    }

    @media(max-width: 425px){
        H1{
            font-size: 1.4em;
        }

        width: 80%;
        top: 250px;
    }
`

export const H1 = styled.h1`
    
`

export const H2 = styled.h2`
    margin-top: 0;

    @media(max-width: 768px){
        font-size: 1em;
    }

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

    @media(max-width: 425px){
       width: 250px;
    }
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

    @media(max-width: 425px){
       &:hover{
           font-size: 1.2em;
       }
    }
`