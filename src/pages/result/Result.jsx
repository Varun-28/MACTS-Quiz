import React from "react";
import { useCategory } from "../../utils/category-context";
import { quizData } from "../../data/quizData.js";
import "./result.css";
import { Link } from "react-router-dom";

function Result() {
  const { selectedCategory } = useCategory();
  const { quiz } = quizData.find(
    (element) => element.categoryValue === selectedCategory.value
  );
  const scoreArr = [-50, -30, -10, 30, 50];
  const correctQues = scoreArr.indexOf(selectedCategory.score) + 1;

  return (
    <div className="my-4 flex flex-col">
      <h2 className="result-heading my-4">Quiz Result</h2>
      <h3 className="result-score my-8 mx-auto p-2">
        You Scored: <span className="score">{selectedCategory.score}</span>/50
      </h3>
      <h4 className="correct-ques mx-8 mb-4">Correct Questions : <span className="correct-ques-count">{correctQues}</span>/5</h4>
      {quiz.map((item) => (
        <div key={item.question} className="ques-wrapper">
          <h4>Q. {item.question}</h4>
          {item.options.map((option) => (
            <p
              key={option.answer}
              className={`my-4 ${option.isCorrect && "option-correct"}`}
            >
              <i className="fas fa-angle-right"></i> {option.answer}
            </p>
          ))}
        </div>
      ))}
      <div className="play-again-wrapper">
        <Link to="/category">
          <button className="play-again-btn btn btn-primary">
            Play Again!
          </button>
        </Link>
      </div>
    </div>
  );
}

export { Result };
