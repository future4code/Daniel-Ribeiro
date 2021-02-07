import styled from 'styled-components';

export const BoxDetailsTrip = styled.div`
    /* position: absolute; */
    top: 200px;
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    color: black;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    top: 100px;
`

export const ContainerCard = styled.div`
    width: 300px;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px white;
    background-image: linear-gradient(45deg, white, transparent);

    p{
        font-size: 1.2em;
        font-weight: 500;
    }
`

export const ContainerBtn = styled.div`

`

export const Btn = styled.button`
    border: none;
    background: transparent;
    margin: 5px;

    &:focus{
        outline: none;
    }
`

export const Img = styled.img`
    height: 30px;
    cursor: pointer;
    padding: 10px;
    transition: .5s;

    &:hover{
        height: 35px;
    }

`

export const BtnBack = styled.button`
    border: none;
    border-radius: 5px;
    background: #ffffffc9;
    margin: 5px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    box-shadow: 0 0 10px white;
    height: 25px;
    width: 70px;
    cursor: pointer;

    &:focus{
        outline: none;
    }
`