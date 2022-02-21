import React , {useState, useEffect} from 'react';
import starFace from '../../Assets/Images/star.png';
import sadFace from '../../Assets/Images/sad.png';
import scaredFace from '../../Assets/Images/scared.png';
import happyFace from '../../Assets/Images/happy.png';
import {MarkShowDiv} from '../../Components/Styles/MarkShowDiv.styled';

function MarksPannel({percentageMarksGot}) {
    const [image, setImage] = useState('');
    const [feedBack, setFeedBack] = useState('');

    const imageToShow = ()=>{
        if(percentageMarksGot<0 || (percentageMarksGot>=0 && percentageMarksGot<30)){
            setImage(sadFace);
            setFeedBack("You Didn't Qualify. Better Luck Next Time!");
        }else if (percentageMarksGot>=30 && percentageMarksGot<=45){
            setImage(scaredFace);
            setFeedBack("You Barely Passed. Try Hard Next Time!");
        }else if(percentageMarksGot>45 && percentageMarksGot<75){
            setImage(happyFace);
            setFeedBack("You Performed Well. Good Luck!");
        }else if(percentageMarksGot>=75 && percentageMarksGot<=100){
            setImage(starFace);
            setFeedBack("You Scored Among Top 2% Of The Candidates! Well Done.")
        }else{
            setImage(happyFace);
            setFeedBack("Plaese Give the Quiz To See The Result");
        }
    }

    useEffect(()=>{
        imageToShow();
    },[percentageMarksGot])
  return (
    <MarkShowDiv>
        <img src={image} alt="face"/>
        <h1>{feedBack}</h1>
    </MarkShowDiv>
  )
}

export default MarksPannel