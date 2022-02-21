import React from 'react';
import {Link} from 'react-router-dom';
import {IndividualCard} from './Styles/QuestionTopicContainer.styled';
import useStateHandler from '../ReduxToolkit/useStateHandler';

function QuizTopicCard({name, id}) {
    const {genreBasedSortQuestionHandler} = useStateHandler();

    return (
        <IndividualCard>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <Link to={"/genre/" + id + "/1"}>
                    <button onClick={()=>genreBasedSortQuestionHandler(id)}>Start Quiz</button>
                </Link>
            </div>
        </IndividualCard>
    )
}

export default QuizTopicCard;