import styled from 'styled-components'
import BackgroundApplication from '../../img/backgroundApplication.png'

export const ContainerApplicationForm = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    background-color: #0c1626;
    background-image: url(${BackgroundApplication});
    background-size: 45%;
    background-position: right bottom;
    background-repeat: no-repeat;
`

export const ContainerForm = styled.div`
    background-color: #807ca53b;
    border-radius: 10px;
    height: 75vh;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-left: 50px;

    h2{
        margin: 0 0 40px 0; 
        color: white;
        font-size: 2em;

        @media(max-width: 375px){
        margin-bottom: 15px;
        font-size: 1.6em;
    }
    }

    @media(max-width: 425px){
        width: 90%;
        margin: 25px auto;
        margin-top: 150px;
    }

    @media(max-width: 375px){
        height: 75vh;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70%;

    @media(max-width: 375px){
        width: 100%;
        height: 100%;
    }
`

export const ContainerItemForm = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media(max-width: 375px){
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 270px;
        height: 25px;
        border-radius: 5px;
        border: 1px solid aqua;
        box-shadow: none;
        margin-left: 15px;

        &:hover{
            border: 1px solid black;
        }

        &:focus{
            outline: none;
        }

        @media(max-width: 375px){
            margin-left: 0;
            margin: 5px 0;
        }   
    }

    select{
        width: 277px;
        height: 28px;
        border-radius: 5px;
        border: 1px solid aqua;
        box-shadow: none;
        margin-left: 15px;

        @media(max-width: 375px){
        margin-left: 0;
        margin: 5px 0;
        } 
    }

    label{
        color: white;
    }
`

export const ContainerBtn = styled.div`
    background-color: #3a54eff0;
    height: 40px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    @media(max-width: 375px){
        margin: 15px 0;
    } 
`

export const BtnApplication = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    background-color: transparent;
    border:  none;
    transition: 0.5s;
    color: white;
    font-size: 1.2em;

    &:focus{
        outline: none;
    }

    &:hover{
        font-size: 1.5em;
    }
`