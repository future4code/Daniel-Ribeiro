import styled from 'styled-components';

export const PostDetailContainer = styled.div`
    /* width: 80%; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 10vh;
    background-color: #dae0e6;
`

export const CardPostDetail = styled.div`
    width: 80%;
    max-width: 60%;
    min-height: 150px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    margin-top: 70px;
    border-radius: 5px;
    background-color: #fff;
    /* box-shadow: 0 0 10px 1px; */

    .time-and-username-container{
        display: flex;
        justify-content: space-between;
    }

    p{
        line-height: 1.5;
    }
`

export const Title = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
`

export const PostContent = styled.p`
    font-size: 1.2em;
    text-align: justify;
`

export const CardComment = styled.div`
    width: 60%;
    border: 2px solid white;
    margin-bottom: 20px;
    padding: 0 25px;
`

export const InfoComment = styled.div`
    display: flex;
    font-size: .9em;
`

export const TextComment = styled.p`
    font-size: 1.2em;
    line-height: 1.5;
`