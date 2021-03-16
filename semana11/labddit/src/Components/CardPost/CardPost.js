import React from 'react'
import {
    CardPostBox,
    BtnsVoteContainer,
    FooterCardPostContainer,
    TopCardPostContainer,
    ItemPostContainer,
    BtnVoteUp,
    BtnVoteDown,
    Title,
    Content,
    TimeAndUsernameContainer
} from './Style'
import btnVoteUp from '../../Imgs/btnVoteUp.png'
import btnVoteDown from '../../Imgs/btnVoteDown.png'
import { Button } from '@material-ui/core'
import { goToPost } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../Constants/Urls'

function CardPost(props) {
    const history = useHistory()

    const goToComments = (id) => {
        goToPost(history, id)
    }

    const date = new Date(props.createdAt)


    const votePost = (vote) => {
        const body = {
            direction: vote
        }
        axios.put(`${BASE_URL}/posts/${props.id}/vote`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                alert('voto realizado com sucesso.')
            })
            .catch((err) => {
                alert('Não foi possível votar.')
            })
    }

    return (
        <CardPostBox>
            <TimeAndUsernameContainer>
                <p>{props.username[0].toUpperCase() + props.username.substr(1)}</p>
                <p>{date.toLocaleDateString('pt-BR')} - {date.toLocaleTimeString()}</p>
            </TimeAndUsernameContainer>
            <TopCardPostContainer>
                <Title>{props.title}</Title>
                <ItemPostContainer>
                    <Content>{props.post}</Content>
                </ItemPostContainer>
            </TopCardPostContainer>
            <FooterCardPostContainer>
                <BtnsVoteContainer>
                    <BtnVoteUp src={btnVoteUp} alt='botão para votar a favor' onClick={() => votePost(1)} />
                    <p>{props.votesCount} votes</p>
                    <BtnVoteDown src={btnVoteDown} alt='botão para votar a contra' onClick={() => votePost(-1)} />
                </BtnsVoteContainer>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => goToComments(props.id)}
                    >{props.commentsCount} Comentários</Button>
                </div>
            </FooterCardPostContainer>
        </CardPostBox>
    )
}
export default CardPost;