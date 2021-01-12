import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const BoxUsuario = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10vh;
    background-color: aqua;
    height: 40vh;
    width: 70vw;
    border-radius: 10px;
`

const InputForm = styled.input`
    border-radius: 5px;
`

export default class FormUsuario extends React.Component {

    render() {
        return (
            <BoxUsuario>

                <h1>Cadastro</h1>

                <form>
                    <div>
                        <label >Nome: </label>
                        <InputForm
                            onChange=''
                        />
                    </div>


                    <div>
                        <label>E-mail: </label>
                        <InputForm
                            onChange=''
                        />
                    </div>

                    <button>Salvar</button>
                </form>
            </BoxUsuario>
        )
    }

}
