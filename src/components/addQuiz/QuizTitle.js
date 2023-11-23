import React from "react";

import { useAddQuiz } from "../../contexts/AddQuizContext";
// import { Link } from "react-router-dom";

function QuizTitle() {
  const { dispatch, addQuizState } = useAddQuiz();
  const Next = (event) => {
    const title = event.target.value;
    dispatch({ type: "QuizTitle", payload: title });
    console.log(addQuizState);
  };

  return (
    <>
      <div className="mb-5">
        <label htmlFor="quizTitle" className="mb-2 fs-1 fw-bold">
          Quiz Title
        </label>
        <br />
        <input
          type="text"
          id="quizTitle"
          className="form-control form-control-lg fs-1 mb-5"
          placeholder="Quiz Title"
          onChange={Next}
          aria-label=".form-control-lg example"
        />
      </div>
    </>
  );
}

export default QuizTitle;
