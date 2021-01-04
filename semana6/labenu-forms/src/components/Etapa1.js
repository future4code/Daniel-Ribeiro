import React from 'react'
import styled from 'styled-components'

const BoxEtapa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`

const InputDadosGerais = styled.input`
    margin: 15px 0;
`

const SelectEscolaridade = styled.select`
    margin: 15px 0;
`

export default class Etapa1 extends React.Component {
    render() {
        return (
            <BoxEtapa>
                <h1>Etapa1 - Dados Gerais</h1>

                <form>
                    <BoxEtapa>
                        <label>1. Qual o seu nome?</label>
                        <InputDadosGerais type="text" />
                    </BoxEtapa>
                    <BoxEtapa>
                        <label>2. Qual a sua idade?</label>
                        <InputDadosGerais type="text" />
                    </BoxEtapa>

                    <BoxEtapa>
                        <label>3. Qual o e-amil?</label>
                        <InputDadosGerais type="text" />
                    </BoxEtapa>
                    
                    <BoxEtapa>
                        <label>4. Qual a sua escolaridade?</label>
                        <SelectEscolaridade>
                            <option selected disabled value="">Selecione</option>
                            <option>Ensino Médio Incompleto</option>
                            <option>Ensino Médio Completo</option>
                            <option>Ensino Superior Incompleto</option>
                            <option>Ensino Superior Completo</option>
                        </SelectEscolaridade>
                    </BoxEtapa>
                    
                </form>
            </BoxEtapa>
        );
    }

}