import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    answerArr: [],
    submittedAns: [],
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
        submittedAnswerHandler: (state, action)=>{
            const presentArr = state.answerArr;
            return {...state, submittedAns: [presentArr]}
        }
    }
})

export const {storeAnswerHandler, submittedAnswerHandler} = givenAnswerListSlice.actions;

export default givenAnswerListSlice.reducer;