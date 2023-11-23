import React from "react";
import Loader from "./Loader";
import Error from "../Error";
import StartScreen from "./StartScreen";
import Question from "./Que/Question";
import NextButton from "./footer/NextButton";
import Progress from "./Que/progBar/Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./footer/Footer";
import Timer from "./footer/Timer";
import IndexTab from "./QueNum/IndexTab.js";
import { useQuiz, fetchData } from "../../contexts/QuizContext";
import { useSearchParams } from "react-router-dom";
// import useQuizData from "../useQuizData";

function Quiz() {
  const { status, dispatch } = useQuiz();
  const [searchParams, setSearchParams] = useSearchParams();
  const idx = searchParams.get("idx");
  const flag = searchParams.get("flag");
  // console.log("idx: "+idx);
  // console.log("flag: "+flag);
  if(flag===1){
    setSearchParams({flag: 0})
    fetchData(dispatch, idx);
    
  }
  // fetchData(dispatch, idx);
  return (
    <>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      <div className="container">
        {status === "active" && (
          <div className="row">
            <div className="col-5 me-5">
              <IndexTab />
            </div>
            <div className="col-6 ms-5">
              <>
                <Progress />
                <Question />
                <Footer>
                  <Timer />
                  <NextButton />
                </Footer>
              </>
            </div>
          </div>
        )}
      </div>
      {status === "finished" && <FinishScreen />}
    </>
  );
}

export default Quiz;
