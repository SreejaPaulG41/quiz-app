import { configureStore } from "@reduxjs/toolkit";
import genreRender from './questionTopicCardSlice';
import genreBasedQuestions from './questionSortSlice';
import answerStoreHandler from './givenAnswerListSlice';

export const store = configureStore({
    reducer:{
        genreRender: genreRender,
        genreBasedQuestions: genreBasedQuestions,
        answerStoreHandler: answerStoreHandler,
    }
})
