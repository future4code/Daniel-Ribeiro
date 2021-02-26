import styled from 'styled-components'
import { primaryColor } from '../../Constants/Colors'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${primaryColor};

    display: flex;
`

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 30px;

    .title{
        margin: 0;
        color: white;
        cursor: pointer;
        padding: 10px;
    }
`

export const SearchContainer = styled.div`
    width: 400px;
    max-width: 300px;

    .search-input{
        width: 100%;
    }
`