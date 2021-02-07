import styled from 'styled-components';
import BackgroundTrip from '../../img/galaxy.png'

export const ContainerTripsList = styled.div`
    background-image: url(${BackgroundTrip});
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BtnBack = styled.button`
    position: absolute;
    bottom: 0;
`