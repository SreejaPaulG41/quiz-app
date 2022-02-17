import React, {useEffect, useState} from 'react'
import useStateHandler from '../../State Management/useStateHandler';
import {useParams} from 'react-router-dom';
import SingleQuestionDisplay from '../../Components/SingleQuestionDisplay';

function QuestionDisplayContainer() {
    const { genreBasedQuestionData, answerArr} = useStateHandler();
    const [questionToDisplay, setQuestionToDisplay] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);

    // console.log(genreBasedQuestionData)
    // console.log(questionIndex)
    // console.log("Answer")
    // console.log(answerArr)

    useEffect(()=>{
        const filteredQuestion = genreBasedQuestionData.find((item, index)=>{
            return index === questionIndex;
        })
        setQuestionToDisplay(filteredQuestion);
    },[genreBasedQuestionData, questionIndex])
  return (
    <div>
        <h1>QuestionDisplayContainer</h1>
        <div>
            <SingleQuestionDisplay genreId={questionToDisplay.genreId} questionId={questionToDisplay.questionId} questionText={questionToDisplay.questionText} answerOptions={questionToDisplay.answerOptions} questionIndex={questionIndex} setQIndex={setQuestionIndex} questions={genreBasedQuestionData}/>
        </div>
    </div>
  )
}

export default QuestionDisplayContainer