import { useQuiz } from "../../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, quizTitle, flag, dispatch } = useQuiz();
  // console.log(quizTitle);
  return (
    <div className="d-flex flex-column text-center ">
      
      <h2>Welcome to The {flag === "title" && quizTitle[0].quizTitle} Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-secondary rounded-pill fs-2 py-3 w-50 align-self-center"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
