import { useQuiz } from "../../../contexts/QuizContext";

function QueNumber({ num}) {
  const { dispatch, index, markedArray } = useQuiz();
  return (
    <div className="col-2 mb-5 ">
      <button
        className={` btn  fs-2 py-3  w-100 text-center   ${
          index === num - 1
            ? "btn-primary"
            : markedArray[num - 1] === 2
            ? "btn-success"
            : markedArray[num - 1] === 1
            ? "btn-danger"
            : "btn-outline-light"
        }`}
        onClick={() => dispatch({ type: "questionIndex", payload: num - 1 })}
      >
        {num}
      </button>
    </div>
  );
}
export default QueNumber;
