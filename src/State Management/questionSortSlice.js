import { createSlice } from "@reduxjs/toolkit";
import {questions} from '../Data/questions';

const initialState = {
    questionData: questions,
    genreBasedQuestionData: [],
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
        }
    }
})

export const {genreBasedQuestionSort} = questionSortSlice.actions;

export default questionSortSlice.reducer;