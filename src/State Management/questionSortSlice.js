import { createSlice } from "@reduxjs/toolkit";
import {questions} from '../Data/questions';

const initialState = {
    questionData: questions,
    genreBasedQuestionData: [],
    genreBasedQuestionTime: 0,
    genreBasedQuestionFullMarks: 0,
}

const questionSortSlice = createSlice({
    name: 'Question Sorting According To Genre',
    initialState,
    reducers:{ //will contain the reduece functions
        genreBasedQuestionSort: (state = initialState , action)=>{
            const allQuestions = state.questionData;
            const filterQuestions = allQuestions.filter((item)=>{
                return item.genreId === action.payload;
            })
            state.genreBasedQuestionData = filterQuestions;    
            const timeAlloted = state.genreBasedQuestionData.reduce((acc, item)=>{
                acc = acc + item.timeAlloted;
                return acc;
            },0)     
            state.genreBasedQuestionTime = timeAlloted;
            const fullMarks = state.genreBasedQuestionData.reduce((acc, item)=>{
                acc = acc + item.questionMark;
                return acc;
            },0)
            state.genreBasedQuestionFullMarks = fullMarks;   
        }
    }
})

export const {genreBasedQuestionSort} = questionSortSlice.actions;

export default questionSortSlice.reducer;