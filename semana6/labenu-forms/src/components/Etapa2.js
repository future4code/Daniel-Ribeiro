import React from 'react'
import styled from 'styled-components'

const BoxEtapa2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`

const InputEnsino = styled.input`
    margin: 15px 0;
`

export default class Etapa2 extends React.Component {
    render() {
        return (
            <BoxEtapa2>

                <h1>Etapa 2 - Informações do ensino superior</h1>

                <form>
                    <BoxEtapa2>
                        <label>Qual o curso?</label>
                        <InputEnsino type="text" />
                    </BoxEtapa2>

                    <BoxEtapa2>
                        <label>Qual a unidade de ensino?</label>
                        <InputEnsino type="text" />
                    </BoxEtapa2>
                </form>


            </BoxEtapa2>
        );
    }

}