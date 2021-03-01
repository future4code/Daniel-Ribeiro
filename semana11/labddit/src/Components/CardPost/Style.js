import styled from 'styled-components'

export const CardPostBox = styled.div`
    width: calc(80% - 15px);
    max-width: 60%;
    min-height: 150px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 0 15px -5px;

    p{
        padding: 0 15px;
        line-height: 1.5;
    }

    div{
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
        background-color: #3d7dca;
      }
    }
`

export const TimeAndUsernameContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.p`
    font-size: 1.5em;
`

export const Content = styled.p`
    font-size: 1.2em;
`

export const ItemPostContainer = styled.div`
    min-height: auto;
    max-height: 150px;
    overflow-y: auto;
    width: 100%;
    text-align: justify;
    
`

export const FooterCardPostContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`

export const BtnsVoteContainer = styled.div`
    display: flex;
    align-items: center;

    img{
        cursor: pointer;
        height: 15px;
        margin: 0 5px;  
    }
`

export const BtnVoteUp = styled.img`
    transform: rotate(-45deg);
    transition: .3s;

    &:hover{
        transform: scale(1.2) rotate(-45deg);
    }
`

export const BtnVoteDown = styled.img`
    transform: rotate(135deg);
    transition: .3s;

    &:hover{
        transform: scale(1.2) rotate(135deg);
    }
`

export const TopCardPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`