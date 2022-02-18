import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    answerArr: [],
    unAnsweredArr: [],
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
                return item.questionId === action.payload.questionId && action.payload.givenAnswerText!=='';
            })
            if(action.payload.givenAnswerText!==''){
                if(presentData){
                    const index = presentArr.indexOf(presentData);
                    presentArr[index] = action.payload;
                }else{
                    presentArr.push(action.payload);
                    const unAteendPresentArr = state.unAnsweredArr;
                    const prevUnAteendAns = unAteendPresentArr.find((item)=>{
                        return item.questionId === action.payload.questionId;
                    })
                    if(prevUnAteendAns){
                        const indexPresent = unAteendPresentArr.indexOf(prevUnAteendAns);
                        if(indexPresent > -1){
                            unAteendPresentArr.splice(indexPresent,1);
                        }
                    }
                }
            }else{
                const unAteendPresentArr = state.unAnsweredArr;
                const presentData = unAteendPresentArr.find((item)=>{
                    return item.questionId === action.payload.questionId;
                })
                if(presentData){
                    const index = unAteendPresentArr.indexOf(presentData);
                    unAteendPresentArr[index] = action.payload;
                }else{
                    state.unAnsweredArr.push(action.payload);
                }
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