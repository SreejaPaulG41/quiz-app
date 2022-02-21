import React, { useState, useEffect } from 'react';
import SingleButtonInChart from '../../Components/singleButtonInChart';
import useStateHandler from '../../ReduxToolkit/useStateHandler';
import { useParams } from 'react-router-dom';
import { QuestionButtonChartDiv } from '../../Components/Styles/QuestionButtonChartDiv.styled';

function QuestionChart({ genreId, questionId, answerOptions, selectedAnswer }) {
    const { genreBasedQuestionData } = useStateHandler();
    const [buttonValue, setButtonValue] = useState([]);
    // const genreId = useParams().genreId;

    useEffect(() => {
        const len = genreBasedQuestionData.length;
        const buttonsArr = [];
        for (let i = 0; i < len; i++) {
            buttonsArr[i] = i + 1;
        }
        setButtonValue(buttonsArr)
    }, [genreBasedQuestionData]);

    return (
        <QuestionButtonChartDiv>
            <div>
                {
                    buttonValue.map((item, index) =>
                        <SingleButtonInChart key={index} item={item} genreId={genreId} questionId={questionId} answerOptions={answerOptions} selectedAnswer={selectedAnswer} />
                    )
                }
            </div>
        </QuestionButtonChartDiv>
    )
}

export default QuestionChart