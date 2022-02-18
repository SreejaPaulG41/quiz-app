import React, {useState, useEffect} from 'react';
import {SingleQuestionAnswerDiv, OptionStyle} from '../Components/Styles/SingleQuestionAnswerDiv.styled';

function SingleQuestionAnswerResult({ genreId, questionText, questionId, givenAnswerText, answerOptions, rightNess}) {
    const chooseBgColor = (option)=>{
        if((option.answerText === givenAnswerText) && rightNess){
            return "#99ff99"; //green color
        }else if((option.answerText === givenAnswerText) && !rightNess){
            return "#ffcccc"; //red color
        }else if((option.answerText != givenAnswerText) && option.isCorrect){
            return "#99ff99"; //green color
        }else if((option.answerText != givenAnswerText) && !option.isCorrect){
            return "#c2c2d6"; //gray color
        }
    }
    const borderColor = (option)=>{
        if((option.answerText === givenAnswerText) && rightNess){
            return "#99ff99"; //green color
        }else if((option.answerText === givenAnswerText) && !rightNess){
            return "#ffcccc"; //red color
        }else if((option.answerText != givenAnswerText) && option.isCorrect){
            return "#99ff99"; //green color
        }else if((option.answerText != givenAnswerText) && !option.isCorrect){
            return "#c2c2d6"; //gray color
        }
    }
    return (
        <SingleQuestionAnswerDiv>
            <div>{questionText}</div>
            <div>{givenAnswerText}</div>
            <div>{answerOptions.map((item, index) =>
                <OptionStyle key={index} bgColor={chooseBgColor(item)}>
                    {item.answerText}
                </OptionStyle>
            )}</div>
            <div>{rightNess}</div>
        </SingleQuestionAnswerDiv>
    )
}

export default SingleQuestionAnswerResult