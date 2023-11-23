import { useQuiz } from "../../../contexts/QuizContext";

function NextButton() {
  const { dispatch, count, numQuestions, markedArray, index } = useQuiz();

  if (!markedArray[index]) return null;

  if (count < numQuestions)
    return (
      <button
        className="btn btn-secondary rounded-pill fs-2 p-3 px-5 float-end"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
      
  if (count === numQuestions)
    return (
      <button
        className="btn btn-secondary rounded-pill fs-2 p-3 px-5 float-end"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
