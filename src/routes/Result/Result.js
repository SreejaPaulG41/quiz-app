import React, {useState, useEffect} from 'react';
import useStateHandler from '../../ReduxToolkit/useStateHandler';
import AnswerKey from './answerKey';
import MarksPannel from './marksPannel';


function Result() {
  const [resultArrToShow, setResultArrToShow] = useState([]);
  const [percentageMarks, setPercentageMarks] = useState(0);
  
    const {submittedAnswerArr, genreBasedQuestionData, genreBasedQuestionFullMarks} = useStateHandler();

    useEffect(()=>{
      const totalQuestionCopy = [...genreBasedQuestionData];
      console.log("In Result")
      console.log(submittedAnswerArr)
      //Sort the array in case there is some missing in between 
      const sortedSubmittedAnswer = submittedAnswerArr?.slice().sort((a,b)=>{
        return a.questionId - b.questionId;
      })
      const resultArr = totalQuestionCopy.map((item, index)=>({
        ...item,
        givenAnswerText : sortedSubmittedAnswer[index].givenAnswerText,
        rightNess : sortedSubmittedAnswer[index].rightNess,
        answerGiven: sortedSubmittedAnswer[index].answerGiven,
      }))
      const marksGot = resultArr.reduce((acc, item)=>{
        console.log(item.questionMark)
        console.log(item.rightNess)
        return  (item.rightNess) ? (acc + item.questionMark) : ((item.answerGiven)? (acc - (item.questionMark*0.50)) : acc);
      },0);
      const percentage = (marksGot / genreBasedQuestionFullMarks) * 100;
      setPercentageMarks(percentage);
      setResultArrToShow(resultArr);

  },[submittedAnswerArr, genreBasedQuestionData]);

  return (
    <div style={{padding: '10px', marginTop: '30px'}}>
      <MarksPannel percentageMarksGot={percentageMarks}/>
      <AnswerKey resultArrToShow={resultArrToShow}/>
    </div>
  )
}

export default Result