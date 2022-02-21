import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {genreBasedQuestionSort, firstLoadUnAnsweredQuestion} from './questionSortSlice';
import {storeAnswerHandler, storeUnAnsweredHandler, submittedAnswerHandler, showPreviousAnswerHandler} from './givenAnswerListSlice';

function useStateHandler() {
    const genreDetails = useSelector(state => state.genreRender.genreDetails);
    const questionData = useSelector(state=>state.genreBasedQuestions.questionData);
    const genreBasedQuestionData = useSelector(state=>state.genreBasedQuestions.genreBasedQuestionData);
    const onLoadUnAnseredQuestion = useSelector(state=>state.genreBasedQuestions.onLoadUnAnseredQuestion);
    const answerArr = useSelector(state=>state.answerStoreHandler.answerArr);
    const unAnsweredArray = useSelector(state=>state.answerStoreHandler.unAnsweredArr);
    const submittedAnswerArr = useSelector(state=>state.answerStoreHandler.submittedAns);
    const prevAnswer = useSelector(state=>state.answerStoreHandler.previousQuestionAnswer);
    const genreBasedQuestionTime = useSelector(state=>state.genreBasedQuestions.genreBasedQuestionTime);
    const genreBasedQuestionFullMarks = useSelector(state=>state.genreBasedQuestions.genreBasedQuestionFullMarks);
    
    
    const dispatch = useDispatch();

    const genreBasedSortQuestionHandler = (genreId)=>{
        dispatch(genreBasedQuestionSort(genreId))
    }
    const getUnAnsweredQuestionOnFirstLoad = ()=>{
        dispatch(firstLoadUnAnsweredQuestion());
    }
    const storeGivenAnswerHandler = (answer)=>{
        dispatch(storeAnswerHandler(answer))
    }
    const storeNotAnsweredHandler = (answers)=>{
        dispatch(storeUnAnsweredHandler(answers));
    }
    const submitGivenAnswerHandler = ()=>{
        dispatch(submittedAnswerHandler());
    }
    const previousQuestionAnswerHandler = (answer)=>{
        dispatch(showPreviousAnswerHandler(answer));
    }
    return {genreDetails, questionData, genreBasedQuestionData, onLoadUnAnseredQuestion, answerArr, unAnsweredArray, submittedAnswerArr, prevAnswer, genreBasedQuestionTime,
         genreBasedQuestionFullMarks, genreBasedSortQuestionHandler, getUnAnsweredQuestionOnFirstLoad, storeGivenAnswerHandler, storeNotAnsweredHandler, submitGivenAnswerHandler, 
         previousQuestionAnswerHandler}
  
}

export default useStateHandler;