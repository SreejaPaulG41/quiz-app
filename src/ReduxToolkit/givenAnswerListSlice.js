import { createSlice, current } from '@reduxjs/toolkit';
import {sliceNames} from './storeConstants';

const initialState = {
    answerArr: [],
    unAnsweredArr: [],
    submittedAns: [],
    previousQuestionAnswer: '',
}

const givenAnswerListSlice = createSlice({
    name: sliceNames.GIVEN_ANSWER_LIST,
    initialState,
    reducers: {
        storeAnswerHandler: (state = initialState, action) => {
            const presentArr = state.answerArr;
            console.log("Funcs")
            console.log(current(state))
            const presentData = presentArr.find((item) => {
                return item.questionId === action.payload.questionId;
            })
            console.log("presentArr")
            console.log(presentData)
            if (presentData) {
                const index = presentArr.indexOf(presentData);
                presentArr[index] = action.payload;
                console.log("on Change")
                console.log(current(state))
            } else {
                presentArr.push(action.payload);
                const ans = state.answerArr;
                const notAns = state.unAnsweredArr[1];
                console.log(" up")
                console.log(current(state))
                const answeredIds = ans.map((item) => {
                    return item.questionId
                })
                const prevUnanseredIds = notAns.map((item) => {
                    return item.questionId
                })
                const nowUnAnswered = prevUnanseredIds.filter((item) => {
                    return !answeredIds.includes(item);
                })
                const nowUnAnsweredItems = notAns.filter((item) => {
                    return nowUnAnswered.includes(item.questionId);
                })
                console.log("In Reducer")
                console.log(nowUnAnsweredItems)
                state.unAnsweredArr[1] = nowUnAnsweredItems;

            }
        },
        storeUnAnsweredHandler: (state, action) => {
            if (state.answerArr.length === 0) {
                console.log("In Reducer")
                console.log(action.payload)
                console.log(action.payload[0])
                const arrayOfUnanswered = action.payload[0];
                const modifiedArrayOfUnAnswered = arrayOfUnanswered?.map((item)=>({
                    ...item,
                    givenAnswerText: '',
                    rightNess: false, 
                    answerGiven: false 
                }))
                state.unAnsweredArr.push(modifiedArrayOfUnAnswered);
            } else {
                console.log("on blank reponse")
                console.log(action.payload)
                const presentArr = state.unAnsweredArr[1];
                const presentData = presentArr.find((item) => {
                    return item.questionId === action.payload.questionId;
                })

                if (presentData) {
                    const index = presentArr.indexOf(presentData);
                    presentArr[index] = action.payload;
                }
            }
        },
        showPreviousAnswerHandler: (state, action) => {
            const questionId = action.payload.questionId;
            const presentArr = state.answerArr;
            const previousQuestion = presentArr.find((item) => {
                return item.questionId === questionId;
            })
            if (previousQuestion) {
                state.previousQuestionAnswer = previousQuestion.givenAnswerText;
            } else {
                state.previousQuestionAnswer = '';
            }
        },
        submittedAnswerHandler: (state) => {
            console.log(current(state))
            const presentAnsweredArr = state.answerArr;
            const presentUnAnsweredArr = state.unAnsweredArr[1];
            const submittedAns = presentAnsweredArr.concat(presentUnAnsweredArr);
            state.submittedAns = submittedAns;
        }
    }
})

export const { storeAnswerHandler, storeUnAnsweredHandler, showPreviousAnswerHandler, submittedAnswerHandler } = givenAnswerListSlice.actions;

export default givenAnswerListSlice.reducer;