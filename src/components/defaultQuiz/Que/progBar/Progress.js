import { useQuiz } from "../../../../contexts/QuizContext";
import ProgressBar from "./ProgressBar";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints } = useQuiz();

  return (
    <div className="container">
      <ProgressBar />
      <div className="row fs-3 my-3 ">
        <div className="col-6 ">
          Question <strong>{index + 1}</strong> / {numQuestions}
        </div>

        <div className="col-6 text-end">
          <strong>{points}</strong> / {maxPossiblePoints}
        </div>
      </div>
    </div>
  );
}

export default Progress;
