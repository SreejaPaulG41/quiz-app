import React from 'react';
import {Link} from 'react-router-dom';
import {genreBasedQuestionSort} from '../State Management/questionSortSlice';
import useStateHandler from '../State Management/useStateHandler';

function QuizTopicCard({name, id}) {
    const {genreBasedSortQuestionHandler} = useStateHandler();

    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                <Link to={"/genre/" + id + '/0'}>
                    <button onClick={()=>genreBasedSortQuestionHandler(id)}>Start Quiz</button>
                </Link>
            </div>
        </div>
    )
}

export default QuizTopicCard;