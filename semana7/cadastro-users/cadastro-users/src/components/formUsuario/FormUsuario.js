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

    state = {
        inputValueName: '',
        inputValueEmail: ''
    }

    pegarInputName = (event) =>{
        this.setState({inputValueName: event.target.value})
    }

    pegarInputEmail = (event) =>{
        this.setState({inputValueEmail: event.target.value})
    }

    createUser = () => {
        const body = {
            name: this.state.inputValueName,
            email: this.state.inputValueEmail
        }

        console.log('body', body)

        const request = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,
        {
            headers: {
                Authorization: 'daniel-ribeiro-epps'
            }
        })
        request.then((response) => {
            alert('Usuário criado com sucesso')
        })
        .catch((error) => {
            alert('Não foi possível concluir o cadastro, tente novamente!')
        })
    }

    render() {
        return (
            <BoxUsuario>

                <h1>Cadastro</h1>

                <form>
                    <div>
                        <label >Nome: </label>
                        <InputForm
                            onChange={this.pegarInputName}
                        />
                    </div>


                    <div>
                        <label>E-mail: </label>
                        <InputForm
                            onChange={this.pegarInputEmail}
                        />
                    </div>
                </form>
                <button onClick={this.createUser}>Salvar</button>
            </BoxUsuario>
        )
    }

}
