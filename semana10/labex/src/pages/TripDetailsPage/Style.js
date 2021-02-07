import styled from 'styled-components';
import Img from '../../img/galaxy.png'

export const ContainerTrips = styled.div`
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
`

export const ContainerMainTrips = styled.div`
    width: 80%;
    /* height: 70vh; */
    margin: 0 auto;
    position: relative;
    top: 150px;
    background: #000000a3;
    color: white;
    border-radius: 10px;
    padding: 15px;

    h1{
        margin: 0;
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
    flex: 1;
    margin: 10px;
    border-radius: 10px;
    background: #0708082b;
    box-shadow: 0 0 8px;
    justify-content: space-between;
    backdrop-filter: blur(5px);
`