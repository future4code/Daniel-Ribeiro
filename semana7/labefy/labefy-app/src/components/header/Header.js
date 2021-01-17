import React from 'react'
import styled from 'styled-components'

const BoxHeader = styled.div`
    text-align: center;
    padding-top: 30px;
`

const TitleHeader = styled.h1`
    font-size: 3.5em;
    font-style: oblique;
`

class Header extends React.Component {
    render(){
        return (
            <BoxHeader>
                <TitleHeader>labefy</TitleHeader>
                <p>O lugar ideal para os amantes da música.</p>
            </BoxHeader>
        )
    }
}
export default Header;