import styled from 'styled-components'
import { primaryColor } from '../../Constants/Colors'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${primaryColor};

    display: flex;
    justify-content: center;
`

export const HeaderItems = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

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

export const BtnLogin = styled.button`
    border: none;
    background-color: transparent;

    &:focus{
        outline: none;
    }
`