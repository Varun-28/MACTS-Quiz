import React, { useEffect, useState } from "react";
import { useCategory } from "../../utils/category-context";
import { quizData } from "../../data/quizData.js";
import { useNavigate } from "react-router-dom";
import "./quiz.css";
import { EmptyValue } from "../../components/EmptyValue";
import { Rules } from "../../components/Rules";

function Quiz() {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const result = quizData.find(
    (element) => element.categoryValue === selectedCategory.value
  );
  const [currentQues, setCurrentQues] = useState(0);
  const [rules, setRules] = useState(true);
  const navigate = useNavigate();

  // reset score
  useEffect(() => {
    setSelectedCategory((val) => ({ ...val, score: 0 }));
  }, []);

  const rulesHandler = () => {
    setRules((val) => !val);
  };
  const resultHandler = (isCorrect) => {
    const nextQues = currentQues + 1;
    nextQues < result.quiz.length
      ? setCurrentQues(nextQues)
      : navigate("/result");

    isCorrect
      ? setSelectedCategory((val) => ({ ...val, score: val.score + 10 }))
      : setSelectedCategory((val) => ({ ...val, score: val.score - 10 }));
  };

  return (
    <div className="quiz-container my-4 flex flex-col items-center">
      <h2 className="quiz-heading p-4 my-8">
        Welcome to <span className="quiz-name">{result.quizName}</span> quiz!
      </h2>
      <div className="ques-container">
        <h4 className="quiz-ques my-4">
          Q{currentQues + 1}. {result.quiz[currentQues].question}
        </h4>
        <div className="options-container flex flex-col">
          {result.quiz[currentQues].options.map((option) => (
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
      {selectedCategory.value.length === 0 && <EmptyValue />}
      <div className="rules-btn">
        <button class="btn btn-fab btn-round" onClick={rulesHandler}>
          <i class="fa-solid fa-question"></i>
        </button>
      </div>
    </div>
  );
}

export { Quiz };
