import styled from 'styled-components';

export const ParentSingleQuestionAnswerDiv = styled.div`
    padding: 10px;
    margin-left: 5px;
`

export const SingleQuestionAnswerDiv = styled.div`
    background-color: #F2F3F4 ;
    background: linear-gradient(90deg, #b9deed, #efefef);
    border: 1px solid black;
    margin: 25px 10px 10px 10px;
    padding: 15px;
    border-radius:20px;
    font-height: 1.5em;

`
export const QuestionDivStyle = styled.div`
    display: flex;
    padding: 10px;
    margin: 8px;
    font-weight: 700;
    font-size: 20px;
    > * {
        &:first-child {
            flex:1;
        }
        &:last-child {
            color: ${({ color }) => color}
        }
    }
`
export const OptionStyle = styled.div`
    padding: 16px;
    margin: 8px;
    border-radius: 10px;
    font-weight: 600;
    background-color: ${({ bgColor }) => bgColor};
    border: 2px solid;
    border-color: ${({ borderColor }) => borderColor};
`
export const ButtonStyle = styled.div`
    margin: 18px;
    button{
        padding: 16px;
        font-weight: 600;
        font-size: 15px;
        border-radius: 10px;
        margin: 20px;
        background-color: transparent;
    }
    button:hover{
        cursor: pointer;
        background-color: #dbe4f0;
        font-weight:900;
        font-size: 17px;
    }
    > * {
        &:last-child{
            float: right;
        }
    }

`