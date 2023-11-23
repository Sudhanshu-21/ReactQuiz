// import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useReducer, useEffect } from "react";
// import useQuizData from "../components/useQuizData";
const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  markedArray: Array(15).fill(0),
  status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  count: 0,
  answer: null,
  points: 0,
  quizTitle: "",
  flag: "",
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "quizTitleReceived":
      return {
        ...state,
        quizTitle: action.payload,
        flag: "title",
      };
    case "dataReceived":
      return {
        ...state,
        questions: action.payload.quiz,
        // quizTitle: action.payload.quizTitle,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      const newmarkedArray = [...state.markedArray];
      action.payload === question.correctOption
        ? (newmarkedArray[state.index] = 2)
        : (newmarkedArray[state.index] = 1);
      return {
        ...state,
        answer: action.payload,
        count: state.count + 1,
        markedArray: newmarkedArray,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: (state.index + 1) % state.questions.length,
        answer: null,
      };
    case "questionIndex":
      return { ...state, index: action.payload };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unkonwn");
  }
}

async function fetchQuizTitle(dispatch) {
  try {
    const response = await fetch(`http://localhost:8000/quiz/title`);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "quizTitleReceived", payload: data });
      // console.log("Title");
      // console.log(data[1].quizTitle);
    }
  } catch (error) {
    dispatch({ type: "dataFailed" });
  }
}

async function fetchData(dispatch, idx) {
  if (idx != null) {
    try {
      const response = await fetch(`http://localhost:8000/quiz?idx=${idx}`);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
        // console.log(data.quiz);
      }
      // else {
      //   dispatch({ type: "dataFailed" });
      // }
    } catch (error) {
      dispatch({ type: "dataFailed" });
    }
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      markedArray,
      count,
      status,
      index,
      answer,
      points,
      quizTitle,
      flag,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    if (idx != null) {
      fetchQuizTitle(dispatch);
    }
  }, [flag]);

  const queryString = window.location.search;
  const queryParams = new URLSearchParams(queryString);
  let idx = queryParams.get("idx");
  if (idx === null) {
    idx = 0;
  }
  // console.log(idx);

  useEffect(() => {
    if (idx != null) {
      fetchData(dispatch, idx);
    }
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        count,
        index,
        answer,
        points,
        quizTitle,
        flag,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        markedArray,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz, fetchData, fetchQuizTitle };
