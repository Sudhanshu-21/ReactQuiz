import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./QuizPortal.css";
import { useQuiz } from "../../../contexts/QuizContext";

function QuizPortalCard(dis) {
  const full = dis.dis;
  const {quizTitle} = useQuiz;
  return (
    <>
      <div className="col-xl-4 col-lg-6 hover">
        <Link to={`/QuizPortal/quiz?idx=${0}&flag=$`}>
          <div className="card l-bg-cherry">
            <div className="card-statistic-3 p-4">
              <div className="card-icon card-icon-large">
                <i className="fas fa-question" />
              </div>
              <div className="mb-4">
                <h5 className="card-title mb-0 fs-1">{quizTitle}</h5>
              </div>
              <div className="row align-items-center mb-2 d-flex">
                <div className="col-8">
                  <h2 className="d-flex align-items-center mb-0">3,243</h2>
                </div>
                <div className="col-4 text-right">
                  <span>
                    12.5% <i className="fa fa-arrow-up" />
                  </span>
                </div>
              </div>
              <div
                className="progress mt-1 "
                data-height={8}
                style={{ height: 8 }}
              >
                <div
                  className="progress-bar l-bg-cyan"
                  role="progressbar"
                  data-width="25%"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "25%" }}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-xl-4 col-lg-6 hover" >
        <div className="card l-bg-blue-dark">
          <div className="card-statistic-3 p-4">
            <div className="card-icon card-icon-large">
              <i className="fas fa-users" />
            </div>
            <div className="mb-4">
              <h5 className="card-title mb-0">Customers</h5>
            </div>
            <div className="row align-items-center mb-2 d-flex">
              <div className="col-8">
                <h2 className="d-flex align-items-center mb-0">15.07k</h2>
              </div>
              <div className="col-4 text-right">
                <span>
                  9.23% <i className="fa fa-arrow-up" />
                </span>
              </div>
            </div>
            <div
              className="progress mt-1 "
              data-height={8}
              style={{ height: 8 }}
            >
              <div
                className="progress-bar l-bg-green"
                role="progressbar"
                data-width="25%"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "25%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 hover">
        <div className="card l-bg-green-dark">
          <div className="card-statistic-3 p-4">
            <div className="card-icon card-icon-large">
              <i className="fas fa-ticket-alt" />
            </div>
            <div className="mb-4">
              <h5 className="card-title mb-0">Ticket Resolved</h5>
            </div>
            <div className="row align-items-center mb-2 d-flex">
              <div className="col-8">
                <h2 className="d-flex align-items-center mb-0">578</h2>
              </div>
              <div className="col-4 text-right">
                <span>
                  10% <i className="fa fa-arrow-up" />
                </span>
              </div>
            </div>
            <div
              className="progress mt-1 "
              data-height={8}
              style={{ height: 8 }}
            >
              <div
                className="progress-bar l-bg-orange"
                role="progressbar"
                data-width="25%"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "25%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 hover" >
        <div className="card l-bg-blue-dark">
          <div className="card-statistic-3 p-4">
            <div className="card-icon card-icon-large">
              <i className="fas fa-users" />
            </div>
            <div className="mb-4">
              <h5 className="card-title mb-0">Customers</h5>
            </div>
            <div className="row align-items-center mb-2 d-flex">
              <div className="col-8">
                <h2 className="d-flex align-items-center mb-0">15.07k</h2>
              </div>
              <div className="col-4 text-right">
                <span>
                  9.23% <i className="fa fa-arrow-up" />
                </span>
              </div>
            </div>
            <div
              className="progress mt-1 "
              data-height={8}
              style={{ height: 8 }}
            >
              <div
                className="progress-bar l-bg-green"
                role="progressbar"
                data-width="25%"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "25%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 hover">
        <div className="card l-bg-orange-dark">
          <div className="card-statistic-3 p-4">
            <div className="card-icon card-icon-large">
              <i className="fas fa-dollar-sign" />
            </div>
            <div className="mb-4">
              <h5 className="card-title mb-0">Revenue Today</h5>
            </div>
            <div className="row align-items-center mb-2 d-flex">
              <div className="col-8">
                <h2 className="d-flex align-items-center mb-0">$11.61k</h2>
              </div>
              <div className="col-4 text-right">
                <span>
                  2.5% <i className="fa fa-arrow-up" />
                </span>
              </div>
            </div>
            <div
              className="progress mt-1 "
              data-height={8}
              style={{ height: 8 }}
            >
              <div
                className="progress-bar l-bg-cyan"
                role="progressbar"
                data-width="25%"
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "25%" }}
              />
            </div>
          </div>
        </div>
      </div>
      {full && (
        <>
          <div className="col-xl-4 col-lg-6 hover">
            <div className="card l-bg-green-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-ticket-alt" />
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Ticket Resolved</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">578</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      10% <i className="fa fa-arrow-up" />
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height={8}
                  style={{ height: 8 }}
                >
                  <div
                    className="progress-bar l-bg-orange"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 hover">
            <div className="card l-bg-orange-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-dollar-sign" />
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Revenue Today</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">$11.61k</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      2.5% <i className="fa fa-arrow-up" />
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height={8}
                  style={{ height: 8 }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 hover">
            <div className="card l-bg-green-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-ticket-alt" />
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Ticket Resolved</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">578</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      10% <i className="fa fa-arrow-up" />
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height={8}
                  style={{ height: 8 }}
                >
                  <div
                    className="progress-bar l-bg-orange"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 hover">
            <div className="card l-bg-orange-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-dollar-sign" />
                </div>
                <div className="mb-4">
                  <h5 className="card-title mb-0">Revenue Today</h5>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">$11.61k</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      2.5% <i className="fa fa-arrow-up" />
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height={8}
                  style={{ height: 8 }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default QuizPortalCard;
