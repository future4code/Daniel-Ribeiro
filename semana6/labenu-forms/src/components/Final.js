import React from 'react'
import styled from 'styled-components'

const BoxFinal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`

export default class Final extends React.Component {
    render() {
      return (
        <BoxFinal>
          <h1>O fomulário acabou!</h1>

          <BoxFinal>
              <h3>Muito obrigado por participar! Entraremos em contato!</h3>
          </BoxFinal>
        </BoxFinal>
      );
    }
    
  }