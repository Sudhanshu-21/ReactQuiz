import { useQuiz } from "../../../contexts/QuizContext";
import QueNumber from "./QueNumber";

function IndexTab() {
  const { numQuestions } = useQuiz();
  const numberOfTimes = numQuestions;

  const repeatedElements = Array.from(
    { length: numberOfTimes },
    (_, index) => <QueNumber key={index} num={index + 1} />
  );
  
  return (
    <div className="container me-5 mt-5">
      <div className="row me-5">{repeatedElements}</div>
    </div>
  );
}

export default IndexTab;
