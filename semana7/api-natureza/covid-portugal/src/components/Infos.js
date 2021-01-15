import React from 'react'
import styled from 'styled-components';

const BoxDados = styled.div`
  text-align: start;
  width: 70%;
  margin: 0 auto;
`

const BoxCaseData = styled.div`
  display: flex;
  justify-content: center;
`

const TagP = styled.p`
  display: inline-block;
  margin: 5px 0;
  font-size: 1.2em;
`

class Infos extends React.Component {
    render() {

        console.log(this.props.inputDate)
        return (

            <BoxDados>
                <BoxCaseData>
                    {/* <TagP>Casos Confirmados:</TagP> */}
                    <TagP>{this.props.dadosConfirmados[this.props.indice]} Casos Confirmados até a data inserida.</TagP>
                </BoxCaseData>

                <BoxCaseData>
                    {/* <TagP>Casos Ativos:</TagP> */}
                    <TagP>{this.props.dadosAtivos[this.props.indice]} Casos Ativos até a data inserida.</TagP>
                </BoxCaseData>

                <BoxCaseData>
                    {/* <TagP>Pessoas internadas:</TagP> */}
                    <TagP>{this.props.dadosInternados[this.props.indice]} Pessoas internadas até a data inserida.</TagP>
                </BoxCaseData>

                <BoxCaseData>
                    {/* <TagP>Óbitos:</TagP> */}
                    <TagP>{this.props.dadosObitos[this.props.indice]} Óbitos até a data inserida.</TagP>
                </BoxCaseData>

                <BoxCaseData>
                    {/* <TagP>Casos Recuperados:</TagP> */}
                    <TagP>{this.props.dadosRecuperadsos[this.props.indice]} Casos Recuperados até a data inserida.</TagP>
                </BoxCaseData>
            </BoxDados>
        )
    }
} export default Infos;