import styled from 'styled-components'
import { primaryColor } from '../../Constants/Colors'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${primaryColor};
    display: flex;
    justify-content: center;
    box-shadow: 0 0 10px 1px;
    position: fixed;
    z-index: 999;
`

export const HeaderItems = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btnsRigth{
        width: 300px;
        display: flex;
        justify-content: space-around;

        #btnCreatePost{
        color: white;
        font-size: 1.2em;
        display: ${(props) => props.url}
        }

        .btnLogin{
        color: white;
        font-size: 1.2em;
        }
    }
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



