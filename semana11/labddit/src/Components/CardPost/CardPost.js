import React from 'react'
import { CardPostBox, 
    BtnsVoteContainer, 
    FooterCardPostContainer, 
    TopCardPostContainer, 
    ItemPostContainer,
    BtnVoteUp,
    BtnVoteDown } from './Style'
import btnVoteUp from '../../Imgs/btnVoteUp.png'
import btnVoteDown from '../../Imgs/btnVoteDown.png'

function CardPost(props) {
    return (

        <CardPostBox>
            <TopCardPostContainer>
                <p>{props.title}</p>
                <ItemPostContainer>
                    <p>{props.post}</p>
                </ItemPostContainer>
            </TopCardPostContainer>
            <FooterCardPostContainer>
                <BtnsVoteContainer>
                    {/* <button>1</button> */}
                    <BtnVoteUp src={btnVoteUp} alt='botão para votar a favor'/>
                    <p>Votes</p>
                    <BtnVoteDown src={btnVoteDown} alt='botão para votar a contra'/>
                </BtnsVoteContainer>
                <div>
                    0 Comentários
                </div>
            </FooterCardPostContainer>
        </CardPostBox>

    )
}
export default CardPost;