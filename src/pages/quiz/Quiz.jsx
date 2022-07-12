import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyValue } from "../../components/EmptyValue";
import { Rules } from "../../components/Rules";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementScore,
  incrementScore,
  resetScore,
} from "../../redux/categorySlice";
import "./quiz.css";

function Quiz() {
  const questions = useSelector((state) => state.category.questions);
  const dispatch = useDispatch();
  const [currentQues, setCurrentQues] = useState(0);
  const [rules, setRules] = useState(true);
  const navigate = useNavigate();

  // reset score
  useEffect(() => {
    dispatch(resetScore());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rules hide-show button function
  const rulesHandler = () => {
    setRules((val) => !val);
  };

  // result updation and action function
  const resultHandler = (isCorrect) => {
    isCorrect ? dispatch(incrementScore()) : dispatch(decrementScore());

    const nextQues = currentQues + 1;
    nextQues < questions.quiz.length
      ? setCurrentQues(nextQues)
      : navigate("/result");
  };

  return (
    <div className="quiz-container my-4 flex flex-col items-center">
      <h2 className="quiz-heading p-4 my-8">
        Welcome to <span className="quiz-name">{questions.quizName}</span> quiz!
      </h2>
      <div className="ques-container mx-8">
        <h4 className="quiz-ques my-4">
          Q{currentQues + 1}. {questions.quiz[currentQues].question}
        </h4>
        <div className="options-container flex flex-col">
          {questions.quiz[currentQues].options.map((option) => (
            <button
              className="quiz-option p-2 my-2"
              onClick={() => resultHandler(option.isCorrect)}
              key={option.answer}
            >
              {option.answer}
            </button>
          ))}
        </div>
      </div>
      {rules && <Rules rulesHandler={rulesHandler} />}
      {(Object.keys(questions).length === 0) === 0 && <EmptyValue />}
      <div className="rules-btn">
        <button className="btn btn-fab btn-round" onClick={rulesHandler}>
          <i className="fa-solid fa-question"></i>
        </button>
      </div>
    </div>
  );
}

export { Quiz };
