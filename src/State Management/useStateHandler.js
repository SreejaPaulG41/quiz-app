import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {genreBasedQuestionSort} from './questionSortSlice';
import {storeAnswerHandler, submittedAnswerHandler, showPreviousAnswerHandler} from './givenAnswerListSlice';

function useStateHandler() {
    const genreDetails = useSelector(state => state.genreRender.genreDetails);
    const questionData = useSelector(state=>state.genreBasedQuestions.questionData);
    const genreBasedQuestionData = useSelector(state=>state.genreBasedQuestions.genreBasedQuestionData);
    const answerArr = useSelector(state=>state.answerStoreHandler.answerArr);
    const submittedAnswerArr = useSelector(state=>state.answerStoreHandler.submittedAns);
    const prevAnswer = useSelector(state=>state.answerStoreHandler.previousQuestionAnswer);
    const genreBasedQuestionTime = useSelector(state=>state.genreBasedQuestions.genreBasedQuestionTime);
    const genreBasedQuestionFullMarks = useSelector(state=>state.genreBasedQuestions.genreBasedQuestionFullMarks);


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
    const previousQuestionAnswerHandler = (answer)=>{
        dispatch(showPreviousAnswerHandler(answer));
    }
    return {genreDetails, questionData, genreBasedQuestionData, answerArr, submittedAnswerArr, prevAnswer, genreBasedQuestionTime, genreBasedQuestionFullMarks, genreBasedSortQuestionHandler, storeGivenAnswerHandler, submitGivenAnswerHandler, previousQuestionAnswerHandler}
  
}

export default useStateHandler;