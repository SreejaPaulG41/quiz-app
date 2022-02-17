import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    answerArr: [],
    submittedAns: [],
    previousQuestionAnswer: '',
}

const givenAnswerListSlice = createSlice({
    name: 'Given Answer List',
    initialState,
    reducers: {
        storeAnswerHandler: (state = initialState, action)=>{
            const presentArr = state.answerArr;
            const presentData = presentArr.find((item)=>{
                return item.questionId === action.payload.questionId;
            })
            if(presentData){
                const index = presentArr.indexOf(presentData);
                presentArr[index] = action.payload;
            }else{
                presentArr.push(action.payload)
            }
        },
        showPreviousAnswerHandler: (state, action)=>{
            const questionId = action.payload.questionId;
            const presentArr = state.answerArr;
            const previousQuestion = presentArr.find((item)=>{
                return item.questionId === questionId;
            })
            if(previousQuestion){
                state.previousQuestionAnswer = previousQuestion.givenAnswerText;
            }else{
                state.previousQuestionAnswer = '';
            }
        },
        submittedAnswerHandler: (state)=>{
            const presentArr = state.answerArr;
            state.submittedAns = presentArr;
        }
    }
})

export const {storeAnswerHandler, showPreviousAnswerHandler, submittedAnswerHandler} = givenAnswerListSlice.actions;

export default givenAnswerListSlice.reducer;