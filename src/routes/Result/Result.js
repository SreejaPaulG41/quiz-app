import React, {useState, useEffect} from 'react';
import useStateHandler from '../../State Management/useStateHandler';
import AnswerKey from './AnswerKey';
import MarksPannel from './MarksPannel';


function Result() {
  const [resultArrToShow, setResultArrToShow] = useState([]);
  const [percentageMarks, setPercentageMarks] = useState(0);
  
    const {submittedAnswerArr, genreBasedQuestionData, genreBasedQuestionFullMarks} = useStateHandler();

    useEffect(()=>{
      const totalQuestionCopy = [...genreBasedQuestionData];
      const resultArr = totalQuestionCopy.map((item, index)=>({
        ...item,
        givenAnswerText : submittedAnswerArr[index].givenAnswerText,
        rightNess : submittedAnswerArr[index].rightNess,
      }))
      const marksGot = resultArr.reduce((acc, item)=>{
        return  (item.rightNess) ? (acc + item.questionMark) : (acc);
      },0);
      const percentage = (marksGot / genreBasedQuestionFullMarks) * 100;
      setPercentageMarks(percentage);
      setResultArrToShow(resultArr);

  },[submittedAnswerArr, genreBasedQuestionData]);

  return (
    <div>
      <h1>Result</h1>
      <MarksPannel percentageMarksGot={percentageMarks}/>
      <AnswerKey resultArrToShow={resultArrToShow}/>
    </div>
  )
}

export default Result