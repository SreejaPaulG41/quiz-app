import React from 'react';
import useStateHandler from '../../State Management/useStateHandler';


function Result() {
    const {submittedAnswerArr, answerArr} = useStateHandler();
    console.log(submittedAnswerArr)
    console.log(answerArr)
  return (
    <div>Result</div>
  )
}

export default Result