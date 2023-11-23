import React from "react";
import "./QuizPortal.css";
// import QuizPortalCard from "./QuizPortalCard";
import { Link } from "react-router-dom";
import { useQuiz } from "../../../contexts/QuizContext";

function QuizPortal(full) {
  // const dis = full.full;
  const { flag, quizTitle } = useQuiz();
  // console.log(quizTitle[0]);
  // console.log(flag);
  return (
    <div className="container">
      <div className="row ">
        <div className="col-xl-4 col-lg-6 hover height  mb-4">
          <Link to={`/QuizPortal/quiz?idx=${0}&flag=$`}>
            <div className="card l-bg-cherry h-100 size">
              <div className="card-statistic-3 p-4 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-question" />
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0 fs-1">
                    {flag === "title" && quizTitle[0].quizTitle}
                  </h5>
                </div>
                <div className="fs-5 overflow-y-hidden h-50">
                  Test your knowledge of React, one of the most popular
                  JavaScript libraries for building user interfaces. This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development! This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development! 
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div className="col-xl-4 col-lg-6 hover height overflow-y-hidden">
          <Link to={`/QuizPortal/quiz?idx=${0}&flag=$`}>
            <div className="card l-bg-green h-100">
              <div className="card-statistic-3 p-4 size">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-question" />
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0 fs-1">
                    {flag === "title" && quizTitle[1].quizTitle}
                  </h5>
                </div>
                <div className="fs-5 ">
                  Test your knowledge of React, one of the most popular
                  JavaScript libraries for building user interfaces. This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development! This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development!Test your knowledge of React, one of the most popular
                  JavaScript libraries for building user interfaces. This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development! This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development!
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-4 col-lg-6 hover height overflow-y-hidden">
          <Link to={`/QuizPortal/quiz?idx=${0}&flag=$`}>
            <div className="card l-bg-cherry h-100">
              <div className="card-statistic-3 p-4 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-question" />
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0 fs-1">
                    {flag === "title" && quizTitle[0].quizTitle}
                  </h5>
                </div>
                <div className="fs-5 overflow-y-hidden">
                  Test your knowledge of React, one of the most popular
                  JavaScript libraries for building user interfaces. This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development! This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development!
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-4 col-lg-6 hover height overflow-y-hidden">
          <Link to={`/QuizPortal/quiz?idx=${0}&flag=$`}>
            <div className="card l-bg-cherry h-100">
              <div className="card-statistic-3 p-4 ">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-question" />
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0 fs-1">
                    {flag === "title" && quizTitle[0].quizTitle}
                  </h5>
                </div>
                <div className="fs-5 overflow-y-hidden">
                  Test your knowledge of React, one of the most popular
                  JavaScript libraries for building user interfaces. This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development! This quiz
                  covers React fundamentals, components, state management,
                  hooks, and more. Challenge yourself and see how well you
                  understand React development!
                </div>
              </div>
            </div>
          </Link>
        </div>



      </div>
    </div>
  );
}

export default QuizPortal;
