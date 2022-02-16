import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {storeAnswerHandler} from '../State Management/givenAnswerListSlice';
import useStateHandler from '../State Management/useStateHandler';

function SingleQuestionDisplay({genreId, questionId, questionText, answerOptions, questionIndex, setQIndex, questions}) {
    const [selected, setSelected] = useState('');
    const {storeGivenAnswerHandler, submitGivenAnswerHandler} = useStateHandler();
    const history = useNavigate();

    useEffect(()=>{
        if(genreId){
            history("/genre/" + genreId + "/" + (questionIndex))
            setSelected('');
        }
    },[questionIndex])

    const onPrevClick = (e)=>{
        e.preventDefault();
        setQIndex(prev=> prev-1)
    }
    const checkCorrectNessHandler = () =>{
        return answerOptions.find((item)=>{
            return item.answerText === selected;
        })
    }
    const onNextClick = (e)=>{
        e.preventDefault();
        if(selected !== ''){
            setQIndex(prev=> prev + 1)
            const correctNess = checkCorrectNessHandler();
            storeGivenAnswerHandler({questionId: questionId, givenAnswerText: selected, rightNess: correctNess.isCorrect});
        }else{
            alert("Answer The Question To Proceed Further")
        }
    }
    const onAnswerChange = (e)=>{
        setSelected(e.target.value);
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const correctNess = checkCorrectNessHandler();
        storeGivenAnswerHandler({questionId: questionId, givenAnswerText: selected, rightNess: correctNess.isCorrect});
        submitGivenAnswerHandler();
        history('/result');
    }
  return (
    <div>
        {genreId}
        {questionId}
        <br/>
        {questionText}
        <div>
            {
                answerOptions?.map((item, index)=>
                <div>
                    <input key={index} type="radio" value={item?.answerText} checked={(selected===item?.answerText)?true:false} onChange={(e)=>onAnswerChange(e)}/>{item?.answerText}
                </div>)
            }
        </div>
        {
            (questionIndex === 0) ? <button disabled>Previous Question</button> : <button onClick={(e)=>onPrevClick(e)}>Previous Question</button>   
        }
        {
            (questionIndex === questions.length-1) ? <button onClick={(e)=>onSubmitHandler(e)}>Submit Quiz</button> : <button onClick={(e)=>onNextClick(e)}>Next Question</button>
        }
        
        
    </div>
  )
}

export default SingleQuestionDisplay