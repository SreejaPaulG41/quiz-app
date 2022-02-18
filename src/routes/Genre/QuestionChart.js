import React, {useState, useEffect} from 'react';
import SingleButtonInChart from '../../Components/SingleButtonInChart';
import useStateHandler from '../../State Management/useStateHandler';
import {useParams} from 'react-router-dom';

function QuestionChart({ genreId, questionId, answerOptions, selectedAnswer}) {
    const { genreBasedQuestionData} = useStateHandler();
    const [buttonValue, setButtonValue] = useState([]);
    // const genreId = useParams().genreId;
    
    useEffect(()=>{
        const len = genreBasedQuestionData.length;
        const buttonsArr = [];
        for(let i=0;i<len;i++){
            buttonsArr[i] = i+1;
        }
        setButtonValue(buttonsArr)
    },[genreBasedQuestionData]);

  return (
    <div>
        <h3>QuestionChart</h3>
        <div style={{display: "flex"}}>
        {
            buttonValue.map((item, index)=>
            <SingleButtonInChart key={index} item={item} genreId={genreId} questionId={questionId} answerOptions={answerOptions} selectedAnswer={selectedAnswer}/>
            )
        }
        </div>
    </div>
  )
}

export default QuestionChart