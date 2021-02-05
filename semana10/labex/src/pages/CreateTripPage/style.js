import styled from 'styled-components'

export const ContainerApplicationForm = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
`

export const ContainerForm = styled.div`
    background-color: #f5f5f5;
    border-radius: 10px;
    height: 70vh;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        margin: 0 0 40px 0 ; 
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70%;
    width: 300px;
`

export const ContainerItemForm = styled.div`
    display: flex;
    justify-content: space-between;
    /* width: 100%; */

    input{
        width: 270px;
        height: 25px;
        border-radius: 5px;
        border: 1px solid aqua;
        box-shadow: none;

        &:hover{
            border: 1px solid black;
        }

        &:focus{
            outline: none;
        }
    }
`