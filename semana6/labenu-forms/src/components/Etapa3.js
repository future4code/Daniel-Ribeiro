import React from 'react'
import styled from 'styled-components'

const BoxEtapa3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`

const InputEtapa3 = styled.input`
    margin: 15px 0;
`

const SelectEtapa3 = styled.select`
    margin: 15px 0;
`


export default class Etapa3 extends React.Component {
    render() {
        return (
            <BoxEtapa3>
                <h1>Informações Gerais de Ensino</h1>

                <form>
                    <BoxEtapa3>
                        <label>5. Por que você não terminou um curso de graduação?</label>
                        <InputEtapa3 type="text" />
                    </BoxEtapa3>

                    <BoxEtapa3>
                        <label>6. Você fez algum curso complementar?</label>
                        <SelectEtapa3>
                            <option selected disabled value="">Selecione</option>
                            <option>Curso técnico</option>
                            <option>Curso de inglês</option>
                            <option>Não fiz curso complementar</option>
                        </SelectEtapa3>
                    </BoxEtapa3>
                </form>

            </BoxEtapa3>
        );
    }

}