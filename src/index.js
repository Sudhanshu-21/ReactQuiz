import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizProvider } from "./contexts/QuizContext";
import { AddQuizProvider } from "./contexts/AddQuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <AddQuizProvider>
        <App />
      </AddQuizProvider>
    </QuizProvider>
  </React.StrictMode>
);
