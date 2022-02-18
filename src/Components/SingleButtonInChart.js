import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStateHandler from '../State Management/useStateHandler';
import { ButtonDiv } from '../Components/Styles/ButtonDiv.Styled';

function SingleButtonInChart({ item, genreId, questionId, answerOptions, selectedAnswer }) {
  const { genreBasedQuestionData, answerArr, unAnsweredArray, storeGivenAnswerHandler } = useStateHandler();
  const navigate = useNavigate();
  const [unAnsweredArr, setUnAnsweredArr] = useState([]);

  useEffect(() => {
    console.log("unanswered")
    console.log(unAnsweredArray)
    console.log("answered")
    console.log(answerArr)
  }, [unAnsweredArray, answerArr])

  const checkCorrectNessHandler = () => {
    return answerOptions.find((item) => {
      return item.answerText === selectedAnswer;
    })
  }
  const storeQuestionAnswer = () => {
    const correctNess = checkCorrectNessHandler();
    storeGivenAnswerHandler({ questionId: questionId, givenAnswerText: selectedAnswer, rightNess: correctNess ? correctNess.isCorrect : false });
  }

  useEffect(() => {
    console.log(selectedAnswer)
    if (answerOptions && questionId && selectedAnswer && answerOptions){
      storeQuestionAnswer();
    }
  }, [selectedAnswer]);

  useEffect(() => {
    if (questionId) {

        //All Ansered Question ID
        const answeredQuestionIds = answerArr.map((item) => {
          return item.questionId;
        })
        // console.log("given answer")
        // console.log(answerArr)
        //All Questions ID
        const allQuestionIds = genreBasedQuestionData.map((item) => {
          return item.questionId;
        })
        // console.log("all")
        // console.log(genreBasedQuestionData)
        //Not Answered Question ID
        const notAnswered = allQuestionIds.filter((item) => {
          return !answeredQuestionIds.includes(item);
        })
        // console.log("Not ID")
        // console.log(notAnswered);
        //Not Answered Question Index
        if (notAnswered.length > 0) {
          const notAnseredItem = genreBasedQuestionData.map((item, index) => {
            if (notAnswered.includes(item.questionId)) {
              return index;
            } else {
              return item;
            }
          })
          const notAnseredIndex = [];
          for (let i = 0; i < notAnseredItem.length; i++) {
            if (typeof notAnseredItem[i] === 'number') {
              notAnseredIndex.push(notAnseredItem[i] + 1);
            }
          }
          // console.log("index")
          // console.log(notAnseredIndex)
          setUnAnsweredArr(notAnseredIndex);
        }

    } else {
      setUnAnsweredArr([]);
    }
  }, [questionId]);

  // useEffect(() => {
  //   const unAnsweredId = unAnsweredArr.map((item) => item.questionId);
  //   const allQuestionIds = genreBasedQuestionData.map((item) => {
  //     return item.questionId;
  //   })
  //   const notAnswered = allQuestionIds.filter((item) => {
  //     return unAnsweredId.includes(item);
  //   })
  //   if (notAnswered.length > 0) {
  //     const notAnseredItem = genreBasedQuestionData.map((item, index) => {
  //       if (notAnswered.includes(item.questionId)) {
  //         return index;
  //       } else {
  //         return item;
  //       }
  //     })
  //     const notAnseredIndex = [];
  //     for (let i = 0; i < notAnseredItem.length; i++) {
  //       if (typeof notAnseredItem[i] === 'number') {
  //         notAnseredIndex.push(notAnseredItem[i] + 1);
  //       }
  //     }
  //     // console.log("index")
  //     // console.log(notAnseredIndex)
  //     setUnAnsweredArr(notAnseredIndex);
  //   }


  // }, [unAnsweredArray])

  const questionButtonClick = (item) => {
    navigate('/genre/' + genreId + "/" + item);
    if (answerOptions && questionId && selectedAnswer && answerOptions) {
      storeQuestionAnswer();
    }
  }

  const getBgColorButton = (item) => {
    console.log(unAnsweredArr)
    if (((unAnsweredArr.length === 0) || unAnsweredArr.includes(item))) {
      console.log("true")
      return "yellow";
    } else {
      console.log("false")
      return "green";
    }
  }

  return (
    <ButtonDiv bgcolor={getBgColorButton(item)}>
      <button onClick={() => questionButtonClick(item)}>
        {item}
      </button>
    </ButtonDiv>
  )
}

export default SingleButtonInChart