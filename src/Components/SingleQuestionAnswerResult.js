import { getArchtype } from 'immer/dist/internal';
import React, {useState, useEffect} from 'react';
import {SingleQuestionAnswerDiv, optionStyle} from '../Components/Styles/SingleQuestionAnswerDiv.styled';

function SingleQuestionAnswerResult({ genreId, questionText, questionId, givenAnswerText, answerOptions, rightNess}) {
    const chooseBgColor = (option)=>{
        if((option === givenAnswerText) && rightNess){
            return "light-green";
        }else if((option === givenAnswerText) && !rightNess){
            return "light-red";
        }else if((option != givenAnswerText) && option.isCorrect){
            return "light-green";
        }else if((option != givenAnswerText) && !option.isCorrect){
            return "light-gray";
        }
    }
    return (
        <SingleQuestionAnswerDiv>
            <div>{questionText}</div>
            <div>{givenAnswerText}</div>
            <div>{answerOptions.map((item, index) =>
                <optionStyle key={index} bgColor={chooseBgColor(item.answerText)}>
                    {item.answerText}
                </optionStyle>
            )}</div>
            <div>{rightNess}</div>
        </SingleQuestionAnswerDiv>
    )
}

export default SingleQuestionAnswerResult