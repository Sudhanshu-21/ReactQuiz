import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import necessary components from Remix

import Quiz from "./defaultQuiz/Quiz";
import QuizTitle from "./addQuiz/QuizTitle";
import QuizForm from "./addQuiz/quizForm";
import QuizPortal from "./defaultQuiz/QuizPortal/QuizPortal";
import AppLayout from "./AppLayout";


export default function App() {
  
  const router = createBrowserRouter([
    {
      element: <AppLayout/>,
      children: [{
        path: "/",
        element: <QuizPortal full={false} />,
      },
      // {
      //   path: "/quiz",
      //   element: <Quiz />,
      // },
      {
        path: "/QuizPortal",
        element: <QuizPortal full={true} />,
      },
      {
        path: "/quizTitle",
        element: <QuizTitle />,
      },
      {
        path: "/quizForm",
        element: <QuizForm />,
      },
      {
        path: "/QuizPortal/quiz",
        element: <Quiz />,
        
      }]
    }
    
  ]);

  return <RouterProvider router={router} />;
}
