import styled from 'styled-components';

export const QuestionTopicContainer = styled.div`
    margin: 20px;
`

export const QuestionTopicsDiv = styled.div`
    margin: 80px 50px 50px 50px;
`
export const QuestionSingleTopicCard = styled.div`
    background: linear-gradient(90deg, #b9deed, #efefef);
    display: inline-block;
    height: 300px;
    width: 350px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 25px;
    padding: 20px;
    &:hover{
    
    }
`

export const IndividualCard = styled.div`
    h1{
        margin: 10px;
    }
    button{
        height: 50px;
        width: 200px;
        padding: 10px;
        margin: 100px 20px 20px 70px;
        border-radius: 10px;
        font-size: 15px;
        background-color: transparent;
    }
    button:hover{
        cursor: pointer;
        background-color: #dbe4f0;
        font-weight:900;
        font-size: 17px;
    }
`