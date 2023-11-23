import { useQuiz } from "../../contexts/QuizContext";
import { Link } from "react-router-dom";
function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="d-flex flex-column">
      <p className="text-center fs-1 px-5 py-4 rounded-pill bg-primary">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="text-center fs-4 mb-5">(Highscore: {highscore} points)</p>
      <div className="row">
        <div className="col-6 d-flex justify-content-start">
          <button
            className="btn btn-secondary rounded-pill fs-2 px-5 py-3 align-self-center "
            onClick={() => dispatch({ type: "restart" })}
          >
            Restart quiz
          </button>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Link
            to="/"
            className="btn btn-secondary rounded-pill fs-2 px-5 py-3 align-self-center "
            onClick={() => dispatch({ type: "restart" })}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FinishScreen;
