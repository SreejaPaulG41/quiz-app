import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStateHandler from '../State Management/useStateHandler';
import { ButtonDiv } from '../Components/Styles/ButtonDiv.Styled';

function SingleButtonInChart({ item, genreId, questionId, answerOptions, selectedAnswer }) {
  const navigate = useNavigate();
  const questionNoFromUrl = parseInt(useParams().qIndex);
  const { answerArr, unAnsweredArray, genreBasedQuestionData, onLoadUnAnseredQuestion, storeGivenAnswerHandler, storeNotAnsweredHandler } = useStateHandler();
  const [answeredQues, setAnsweredQues] = useState([]);
  const [unAnswereQues, setUnAnsweredQues] = useState([]);
  const [unAnsweredIndexArr, setUnAnsweredIndexArr] = useState([]);
  const [colorOfButton, setColorOfButton] = useState('');

  useEffect(() => {
    setAnsweredQues(answerArr);
    setUnAnsweredQues(unAnsweredArray[1])
    console.log(".....")
    console.log("Answer")
    console.log(answerArr)
    console.log("Unanswered")
    console.log(unAnsweredArray[1])
  }, [questionNoFromUrl]);

  useEffect(() => {
    //All Ansered Question ID
    if (answeredQues.length > 0 && unAnswereQues.length > 0) {
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
      const notAnsweredIds = allQuestionIds.filter((item) => {
        return !answeredQuestionIds.includes(item);
      })
      // console.log("Not ID")
      // console.log(notAnsweredIds);
      //Not Answered Question Index
      if (notAnsweredIds.length > 0) {
        const notAnseredItem = genreBasedQuestionData.map((item, index) => {
          if (notAnsweredIds.includes(item.questionId)) {
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
        setUnAnsweredIndexArr(notAnseredIndex);
      }
    } else if (answeredQues.length > 0 && unAnswereQues.length === 0) {
      setUnAnsweredIndexArr([]);
    } else {
      const notAnseredIndex = onLoadUnAnseredQuestion[0]?.map((item, index) => {
        return index + 1;
      })
      setUnAnsweredIndexArr(notAnseredIndex);
    }

  }, [answeredQues, unAnswereQues])

  useEffect(() => {
    console.log('/////')
    console.log(unAnsweredIndexArr)
    console.log(item)
    if (unAnsweredIndexArr.includes(item)) {
      console.log("Yellow");
      setColorOfButton("Yellow");
    } else {
      console.log("Green");
      setColorOfButton("Green");
    }

  }, [unAnsweredIndexArr, item]);

  const questionButtonClick = () => {
    if (selectedAnswer !== '') {
      storeQuestionAnswer();
    } else {
      storeUnAnswerQuestionHandler();
    }
    if (genreId) {
      navigate('/genre/' + genreId + '/' + item);
    }
  }
  const checkCorrectNessHandler = () => {
    return answerOptions.find((item) => {
      return item.answerText === selectedAnswer;
    })
  }
  const storeQuestionAnswer = () => {
    const correctNess = checkCorrectNessHandler();
    storeGivenAnswerHandler({ questionId: questionId, givenAnswerText: selectedAnswer, rightNess: correctNess ? correctNess.isCorrect : false, answerGiven: true });
  }
  const storeUnAnswerQuestionHandler = () => {
    storeNotAnsweredHandler({ questionId: questionId, givenAnswerText: selectedAnswer, rightNess: false, answerGiven: false })
  }

  const getBgColorButton = () => {
    return colorOfButton;
  }
  return (
    <ButtonDiv bgcolor={getBgColorButton(item)}>
      <button onClick={() => questionButtonClick()}>
        {item}
      </button>
    </ButtonDiv>
  )
}

export default SingleButtonInChart