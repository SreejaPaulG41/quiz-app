import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStateHandler from '../State Management/useStateHandler';

function SingleQuestionDisplay({ genreId, questionId, questionText, answerOptions, questionIndex, setQIndex, questions, setSelectedAnswer}) {
    const [selected, setSelected] = useState('');
    const { prevAnswer, storeGivenAnswerHandler, submitGivenAnswerHandler, previousQuestionAnswerHandler } = useStateHandler();
    const history = useNavigate();

    useEffect(() => {
        previousQuestionAnswerHandler({ questionId: questionId })
        setSelected(prevAnswer ? prevAnswer : '');
    }, [questionId, prevAnswer])

    useEffect(()=>{
        if(genreId){
            history('/genre/' + genreId + "/" + (questionIndex + 1))
        }
    },[questionIndex])

    useEffect(()=>{
        setSelectedAnswer(selected);
    },[selected])

    const checkCorrectNessHandler = () => {
        return answerOptions.find((item) => {
            return item.answerText === selected;
        })
    }
    const storeQuestionAnswer = ()=>{
        const correctNess = checkCorrectNessHandler();
        storeGivenAnswerHandler({ questionId: questionId, givenAnswerText: selected, rightNess: correctNess? correctNess.isCorrect : false});
    }
    const onPrevClick = (e) => {
        e.preventDefault();
        setQIndex(prev => prev - 1);
        storeQuestionAnswer();
    }
    const onNextClick = (e) => {
        e.preventDefault();
        setQIndex(prev => prev + 1);
        storeQuestionAnswer();
    }
    const onAnswerChange = (e) => {
        setSelected(e.target.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const correctNess = checkCorrectNessHandler();
        storeGivenAnswerHandler({ questionId: questionId, givenAnswerText: selected, rightNess: correctNess? correctNess.isCorrect : false });
        submitGivenAnswerHandler();
        history('/result');
    }
    return (
        <div>
            {genreId}
            {questionId}
            <br />
            {questionText}
            <div>
                {
                    answerOptions?.map((item, index) =>
                        <div>
                            <input key={index} type="radio" value={item?.answerText} checked={(selected === item?.answerText) ? true : false} onChange={(e) => onAnswerChange(e)} />{item?.answerText}
                        </div>)
                }
            </div>
            {
                (questionIndex === 0) ? <button disabled>Previous Question</button> : <button onClick={(e) => onPrevClick(e)}>Previous Question</button>
            }
            {
                (questionIndex === questions.length - 1) ? <button onClick={(e) => onSubmitHandler(e)}>Submit Quiz</button> : <button onClick={(e) => onNextClick(e)}>Next Question</button>
            }


        </div>
    )
}

export default SingleQuestionDisplay