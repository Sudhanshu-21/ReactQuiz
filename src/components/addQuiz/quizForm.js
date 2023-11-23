import React from "react";
import AddQuestion from "./AddQuestion.js";
import { useAddQuiz } from "../../contexts/AddQuizContext";
import { useNavigate } from "react-router-dom";
import QuizTitle from "./QuizTitle.js";

function QuizForm() {
  const navigate = useNavigate();
  const { dispatch, addQuizState } = useAddQuiz();
  const isDisabled =
    !addQuizState.isFirstQuestionSubmitted ||
    addQuizState.isQuestionSubmitted ||
    !addQuizState.isQuizTitleSubmitted;
  const AddNextQuestion = async () => {
    await dispatch({ type: "addNextQuestion" });
    console.log("Question is added");
    console.log(addQuizState);
  };

  const SubmitQuiz = async () => {
    await dispatch({ type: "submitQuiz" });
    console.log("Quiz is Submitted");
    console.log(addQuizState);
    
    navigate("/");
  };

  return (
    <div className="container mw-50 mx-5" style={{ width: 800 }}>
      <h1 className="text-center mb-5">Create Your Quiz</h1>

      <QuizTitle />

      <AddQuestion />

      <div className="row">
        <div className="mb-5 col-6">
          <button
            type="submit"
            className="btn btn-primary fs-2 px-5 py-3 rounded-pill"
            onClick={() => AddNextQuestion()}
            disabled={!addQuizState.isQuestionSubmitted}
          >
            Add Next Question
          </button>
        </div>

        <div className="mb-5 col-6 d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-danger fs-2 px-5 py-3 rounded-pill"
            onClick={() => SubmitQuiz()}
            disabled={isDisabled}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizForm;
