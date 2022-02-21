import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { QuestionTopicContainer, QuestionTopicsDiv, QuestionSingleTopicCard } from '../../Components/Styles/QuestionTopicContainer.styled';
import QuizTopicCard from '../../Components/quizTopicCard';
import useStateHandler from '../../ReduxToolkit/useStateHandler';

function QuizTopicCardContainer() {
  const {genreDetails} = useStateHandler();

  return (
    <QuestionTopicContainer>
      <QuestionTopicsDiv>
        {
          genreDetails?.map((item, index) =>
            <QuestionSingleTopicCard key={index}>
              <QuizTopicCard name={item.genreName} id={item.genreId}/>
            </QuestionSingleTopicCard>)
        }
      </QuestionTopicsDiv>
    </QuestionTopicContainer>
  )
}

export default QuizTopicCardContainer