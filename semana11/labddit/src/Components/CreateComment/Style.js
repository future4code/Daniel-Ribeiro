import styled from 'styled-components';

export const CommentContainer = styled.div`
    width: calc(60% + 50px);
    margin-top: 30px;
    background-color: white;
    border-radius: 5px;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .btnActive{
        margin: 30px;
    }
`

export const InputComment = styled.textarea`
    width: 80%;
    resize: none;
    height: 100px;
    padding: 10px 25px;
    margin-top: 30px;
    border-radius: 5px;
    font-size: 1.2em;
    line-height: 1.5;
    background-color: #f2f2f2;
    /* box-shadow: 0 0 10px 1px; */

    &:focus{
        outline: none;
    }
`