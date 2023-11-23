import React from "react";
import { useQuiz } from "../../../../contexts/QuizContext";

function ProgressBar() {
  const { numQuestions, count } = useQuiz();
  const Parentdiv = {
    height: 15,
    width: "auto",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${((count) * 100) / numQuestions}%`,
    backgroundColor: "#0d6efd",
    borderRadius: 30,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
}

export default ProgressBar;
