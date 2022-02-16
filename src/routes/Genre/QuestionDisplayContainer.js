import React, {useEffect, useState} from 'react'
import useStateHandler from '../../State Management/useStateHandler';
import {useParams} from 'react-router-dom';
import SingleQuestionDisplay from '../../Components/SingleQuestionDisplay';

function QuestionDisplayContainer() {
    const { genreBasedQuestionData, answerArr} = useStateHandler();
    const [questionToDisplay, setQuestionToDisplay] = useState({});
    const questionIndex = parseInt(useParams().quesIndex);
    const [qIndex, setQIndex] = useState(questionIndex);

    console.log(genreBasedQuestionData)
    console.log(questionIndex)
    console.log("Answer")
    console.log(answerArr)

    useEffect(()=>{
        const filteredQuestion = genreBasedQuestionData.find((item, index)=>{
            return index === qIndex;
        })
        setQuestionToDisplay(filteredQuestion);
    },[genreBasedQuestionData, questionIndex, qIndex])
  return (
    <div>
        <h1>QuestionDisplayContainer</h1>
        <div>
            <SingleQuestionDisplay genreId={questionToDisplay.genreId} questionId={questionToDisplay.questionId} questionText={questionToDisplay.questionText} answerOptions={questionToDisplay.answerOptions} questionIndex={qIndex} setQIndex={setQIndex} questions={genreBasedQuestionData}/>
        </div>
    </div>
  )
}

export default QuestionDisplayContainer