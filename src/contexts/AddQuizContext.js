import { createContext, useContext, useReducer } from "react";

const AddQuizContext = createContext();
const initialState = {
  quizTitle: "",
  isQuizTitleSubmitted: false,
  isFirstQuestionSubmitted: false,
  isQuestionSubmitted: false,
  num: 0,
  questions: [
    {
      question: "",
      options: ["", "", "", ""],
      correctOption: 0,
      points: 1,
    },
  ],
};

function quizReducer(state, action) {
  switch (action.type) {
    case "QuizTitle":
      const title = action.payload;
      return {
        ...state,
        quizTitle: title,
        isQuizTitleSubmitted: true,
      };
    case "submitQuestion":
      const newQuestion = action.payload;

      const updatedQuestions = state.isFirstQuestionSubmitted
        ? [...state.questions, newQuestion]
        : [newQuestion];
      return {
        ...state,
        isFirstQuestionSubmitted: true,
        isQuestionSubmitted: true,
        questions: updatedQuestions,
      };

    case "addNextQuestion":
      return {
        ...state,
        num: state.num + 1,
        isQuestionSubmitted: false,
      };
    case "submitQuiz":
      return {
        ...initialState,
      };
    case "removeQuestion":
      return {
        ...state,
        num: state.num,
        questions: state.questions.filter(
          (_, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
}

function AddQuizProvider({ children }) {
  const [addQuizState, dispatch] = useReducer(quizReducer, initialState);

  return (
    <AddQuizContext.Provider value={{ addQuizState, dispatch }}>
      {children}
    </AddQuizContext.Provider>
  );
}

function useAddQuiz() {
  const context = useContext(AddQuizContext);
  if (context === undefined)
    throw new Error("AddQuizContext was used outside of the QuizProvider");
  return context;
}

export { AddQuizProvider, useAddQuiz };
