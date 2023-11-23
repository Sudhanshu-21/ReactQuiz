import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../contexts/QuizContext"; // Make sure the path is correct

function Navbar() {
  // <-- Corrected component name to start with an uppercase letter
  const { dispatch } = useQuiz(); // Using the custom hook

  return (
    <>
      {/* Hello world */}
      <nav className="navbar navbar-expand-lg grad2">
        <div className="container-fluid">
          <Link
            to="/"
            className="nav-link  mb-2 mb-lg-0 ms-4 text-white fs-2"
            onClick={() => dispatch({ type: "restart" })}
          >
            Home
          </Link>
          <button
            className="navbar-toggler btn btn-outline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-4">
              <li className="nav-item hover me-3">
                <Link
                  to="/QuizPortal"
                  className="nav-link text-white fs-2"
                  onClick={() => dispatch({ type: "restart" })}
                >
                  Quiz{" "}
                </Link>
              </li>
              <li className="nav-item hover me-3">
                <Link
                  to="/quizForm"
                  className="nav-link text-white fs-2"
                  onClick={() => dispatch({ type: "restart" })}
                >
                  Create{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
