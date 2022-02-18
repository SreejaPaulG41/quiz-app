import React, { useEffect, useState } from 'react'
import useStateHandler from '../../State Management/useStateHandler';
import { useParams } from 'react-router-dom';
import SingleQuestionDisplay from '../../Components/SingleQuestionDisplay';
import QuestionChart from './QuestionChart';

function QuestionDisplayContainer() {
    const { genreBasedQuestionData, answerArr } = useStateHandler();
    const [questionToDisplay, setQuestionToDisplay] = useState({});
    const qsIndex = parseInt(useParams().qIndex);
    const [questionIndex, setQuestionIndex] = useState(qsIndex-1);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    useEffect(()=>{
        setQuestionIndex(qsIndex - 1);
    },[qsIndex]);

    useEffect(() => {
        const filteredQuestion = genreBasedQuestionData.find((item, index) => {
            return index === questionIndex;
        })
        setQuestionToDisplay(filteredQuestion);
    }, [genreBasedQuestionData, questionIndex])

    return (
        <div>
            <h1>QuestionDisplayContainer</h1>
            <div style={{display: "flex"}}>
                <div style={{flex:1}}>
                    <SingleQuestionDisplay genreId={questionToDisplay.genreId} questionId={questionToDisplay.questionId} 
                        questionText={questionToDisplay.questionText} answerOptions={questionToDisplay.answerOptions} 
                        questionIndex={questionIndex} setQIndex={setQuestionIndex} questions={genreBasedQuestionData} 
                        setSelectedAnswer={setSelectedAnswer}
                    />
                </div>
                <div>
                    <QuestionChart genreId={questionToDisplay.genreId} questionId={questionToDisplay.questionId} 
                    answerOptions={questionToDisplay.answerOptions} selectedAnswer={selectedAnswer} />
                </div>
            </div>

        </div>
    )
}

export default QuestionDisplayContainer