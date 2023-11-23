import { useQuiz } from "../../../contexts/QuizContext";
function Options({ question, num }) {
  const { dispatch, answer, markedArray } = useQuiz();

  return (
    <div className="d-flex flex-column mb-5">
      {question.options.map((option, index) => (
        <button
          className={`btn rounded-pill fs-2 p-3 mb-3 ${
            markedArray[num]
              ? index === answer
                ? answer === question.correctOption
                  ? "btn-primary"
                  : "btn-danger"
                : ""
              : "btn-secondary"
          } ${
            markedArray[num] && index === question.correctOption ? "btn-primary" : ""
          }`}
          key={option}
          disabled={markedArray[num]}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
