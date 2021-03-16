import styled from 'styled-components'

export const TextContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    position: relative;
    top: 10vh;
    background-color: #dae0e6;

    .form-create-post{
        position: relative;
        top: 10vh;
        display: flex;
        flex-direction: column;
        width: 70%;
        height: 70vh;
        align-items: center;

        .input-title{
            padding: 10px 25px;
            font-size: 1.2em;
            margin-bottom: 30px;
            width: 90%;
            border-radius: 5px;
            border: none;

            &:focus{
                outline: none
            }
        }
    }

    textarea{
        resize: none;
        padding: 25px;
        height: 150px;
        font-size: 1.2em;
        width: 90%;
        margin-bottom: 30px;
        border-radius: 5px;
        border: none;

        &:focus{
            outline: none
        }
    }
`