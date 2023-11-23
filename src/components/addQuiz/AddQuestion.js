import React from "react";
import { useForm } from "react-hook-form";
import { useAddQuiz } from "../../contexts/AddQuizContext";

function AddQuestion() {
  const { dispatch, addQuizState } = useAddQuiz();

  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      question: "",
      options: ["", "", "", ""],
      correctOption: 0,
      points: 1,
    },
  });

  const { errors, isDirty, isSubmitSuccessful } = formState;

  const onSubmit = async (data) => {
    console.log(isSubmitSuccessful);
    if (isSubmitSuccessful) {
      await dispatch({ type: "submitQuestion", payload: data });
      console.log(addQuizState);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-2">
      <div className="mb-4">
        <label htmlFor="question" className="mb-2 fs-2 fw-bold">
          Question {addQuizState.num + 1}
        </label>
        <br />
        <input
          className="form-control form-control-lg fs-2"
          type="text"
          id="question"
          placeholder="Question"
          aria-label=".form-control-lg example"
          {...register("question", { required: "Question is required" })}
        ></input>
        {errors.question && (
          <span className="text-danger">{errors.question.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="mb-2 fs-2 fw-bold">Options:</label>

        <div>
          <input
            className="form-control form-control-lg mb-2 fs-2"
            type="text"
            placeholder={`Option 1`}
            id={`option1`}
            aria-label=".form-control-lg example"
            {...register("options[0]", {
              required: "Option is required",
            })}
          ></input>
          {errors.option?.type === "required" && (
            <span className="text-danger">dfhfj</span>
          )}
        </div>

        <div>
          <input
            className="form-control form-control-lg mb-2 fs-2"
            type="text"
            placeholder={`Option 2`}
            id={`option1`}
            aria-label=".form-control-lg example"
            {...register("options[1]", {
              required: "Option is required",
            })}
          ></input>
          {errors.option?.type === "required" && (
            <span className="text-danger">dfhfj</span>
          )}
        </div>

        <div>
          <input
            className="form-control form-control-lg mb-2 fs-2"
            type="text"
            placeholder={`Option 3`}
            id={`option1`}
            aria-label=".form-control-lg example"
            {...register("options[2]", {
              required: "Option is required",
            })}
          ></input>
          {errors.option?.type === "required" && (
            <span className="text-danger">dfhfj</span>
          )}
        </div>

        <div>
          <input
            className="form-control form-control-lg mb-2 fs-2"
            type="text"
            placeholder={`Option 4`}
            id={`option1`}
            aria-label=".form-control-lg example"
            {...register("options[3]", {
              required: "Option is required",
            })}
          ></input>
          {errors.option?.type === "required" && (
            <span className="text-danger">dfhfj</span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="points" className="mb-2 fs-2 fw-bold">
          Correct Option:
        </label>
        <br />
        <input
          className="form-control form-control-lg fs-2"
          type="number"
          id="correctOption"
          placeholder="Correct Option"
          aria-label=".form-control-lg example"
          {...register("correctOption", {
            required: "Correct Option is required",
            min: 1,
            max: 4,
          })}
        />

        {(errors.correctOption?.type === "max" ||
        errors.correctOption?.type === "min" ? (
          <span className="text-danger">Value must be in between 1 to 4</span>
        ) : (
          ""
        )) ||
          (errors.correctOption && (
            <span className="text-danger">{errors.correctOption.message}</span>
          ))}
      </div>
      <div className="mb-5">
        <label htmlFor="points" className="mb-2 fs-2 fw-bold">
          Points:
        </label>
        <br />
        <input
          className="form-control form-control-lg fs-2"
          type="number"
          id="points"
          placeholder="Points"
          aria-label=".form-control-lg example"
          {...register("points", {
            required: "Points are required",
            min: 1,
          })}
        />
        {errors.points && (
          <span className="text-danger">{errors.points.message}</span>
        )}
      </div>
      <div className="row">
        <div className="mb-5 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-light fs-2 rounded-pill px-5 py-3"
            disabled={!isDirty || addQuizState.isQuestionSubmitted}
          >
            Submit Question
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddQuestion;
