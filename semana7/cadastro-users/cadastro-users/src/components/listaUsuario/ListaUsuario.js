import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BoxListaUsuario = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10vh;
    background-color: aqua;
    width: 70vw;
    border-radius: 10px;
`

export default class ListaUsuario extends React.Component {

    render() {
        return (
            <BoxListaUsuario>

                <h1>Lista de usuários</h1>

                <div>
                    <p>Lista Usuário</p>
                </div>

            </BoxListaUsuario>
        )
    }

}
