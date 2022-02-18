import React from 'react';
import SingleQuestionAnswerResult from '../../Components/SingleQuestionAnswerResult';
function AnswerKey({resultArrToShow}) {
    
  return (
    <div>
        <h3>Check The Answers Below</h3>
        {
            resultArrToShow?.map((item, index)=>
                <div key={index}>
                    <SingleQuestionAnswerResult key={index + item.questionId} genreId={item.genreId} questionText={item.questionText} questionId={item.questionId} givenAnswerText={item.givenAnswerText} answerOptions={item.answerOptions} rightNess={item.rightNess}/>
                </div>
            )
        }
    </div>
  )
}

export default AnswerKey