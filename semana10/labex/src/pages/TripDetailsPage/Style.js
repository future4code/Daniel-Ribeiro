import styled from 'styled-components';
import Img from '../../img/galaxy.png'

export const ContainerTrips = styled.div`
    background-image: url(${Img});
    background-repeat: repeat;
    background-size: 100%; 
    position: absolute;
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    justify-content: center;

    @media(max-width: 768px){
        background-repeat: repeat-y;
        width: 100vw;
    }

    @media(max-width: 425px){
        width: 100vw;
    }
`

export const ContainerMainTrips = styled.div`
    width: 80%;
    margin-top: 100px;
    margin-bottom: 50px;
    top: 150px;
    background: #000000a3;
    color: white;
    border-radius: 10px;
    padding: 15px;
    min-height: 100vh;

    h1{
        margin: 0;
    }

    @media(max-width: 768px){
        backdrop-filter: blur(5px)
    }

    @media(max-width: 425px){
        margin-top: 150px;
    }
`

export const ContainerInfoTrip = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 40px;

    
`

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 15px;
    border-radius: 10px;
    background: #0708082b;
    box-shadow: 0 0 8px;
    justify-content: space-between;
    backdrop-filter: blur(5px);
    text-align: initial;
    padding-left: 10px;

    @media(max-width: 425px){
        backdrop-filter: none;
    }

    @media(max-width: 375px){
        font-size: 1.2em;
        text-align: left;
        padding-left: 10px;
        backdrop-filter: none;
    }
`