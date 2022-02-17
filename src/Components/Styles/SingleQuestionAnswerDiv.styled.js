import styled from 'styled-components';

export const SingleQuestionAnswerDiv = styled.div`
    background-color: #F2F3F4 ;
    margin: 10px;
    padding: 15px;
    border-radius:20px;
    font-height: 1.5em;

`

export const optionStyle = styled.div`
    background-color: ${({bgColor})=>bgColor};
`