import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {genreBasedQuestionSort} from './questionSortSlice';
import {storeAnswerHandler} from './givenAnswerListSlice';
import {submittedAnswerHandler} from './givenAnswerListSlice';

function useStateHandler() {
    const genreDetails = useSelector(state => state.genreRender.genreDetails);
    const questionData = useSelector(state=>state.genreBasedQuestions.questionData);
    const genreBasedQuestionData = useSelector(state=>state.genreBasedQuestions.genreBasedQuestionData);
    const answerArr = useSelector(state=>state.answerStoreHandler.answerArr);
    const submittedAnswerArr = useSelector(state=>state.answerStoreHandler.submittedAns);

    const dispatch = useDispatch();

    const genreBasedSortQuestionHandler = (genreId)=>{
        dispatch(genreBasedQuestionSort(genreId))
    }
    const storeGivenAnswerHandler = (answer)=>{
        dispatch(storeAnswerHandler(answer))
    }
    const submitGivenAnswerHandler = ()=>{
        dispatch(submittedAnswerHandler());
    }
    return {genreDetails, questionData, genreBasedQuestionData, answerArr, submittedAnswerArr, genreBasedSortQuestionHandler, storeGivenAnswerHandler, submitGivenAnswerHandler}
  
}

export default useStateHandler;