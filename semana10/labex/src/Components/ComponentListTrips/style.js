import styled from 'styled-components';

export const BoxListTrip = styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const ContainerItem = styled.div`
    flex-grow: 1;
    width: 300px;
    height: 150px;
    margin: 15px;
    background: #000000b5;
    border-radius: 5px;
    color: white;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 10px;
`

export const Item = styled.div`
    p{
        margin: 5px 0 ;
        font-size: 1.2em;
    }
`

export const ContainerBtn = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`

export const Btn = styled.button`
    margin: 0 10px;
    border: none;
    background: #3a54eff0;
    font-size: 1.2em;
    cursor: pointer;
    padding: 8px;
    color: white;
    border-radius: 5px;
    transition: 0.5s;

    &:hover{
        font-size: 1.4em;
    }

    &:focus{
        outline: none;
    }
`

