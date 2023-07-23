import React from "react";
// import { BarChart } from "recharts";
import BarChart from "../component/BarChart";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const Middle = () => {
  return (
    <div className="middle">
      <div className="heading">
        <h5>Retirement Income</h5>
        <h2>Starting Year 2056</h2>
      </div>
      <div className="detail">
        <div className="information infom1">
          <h3>$300,000</h3>
          <p>My goal</p>
          <hr className="underlinee" />
        </div>
         <div className="inform2">
         <div className="information">
          <h3>59%</h3>
          <p>Goal Achieved</p>
          <hr className="underlinee" />
        </div>
        <div className="information">
          <h3>$300</h3>
          <p>Est. monthly income</p>
          <hr className="underlinee" />
        </div>
         </div>
        
      </div>
      <div className="barchart">
        <h2 className="headingss">Contribution overtime</h2>
        <BarChart />
      </div>
      <div className="prog">
        <h2>How do i compare to my peers? </h2>
        <p className="progp">
          These numbers represent current goal achievement
        </p>
        <div className="progresss">
          <div className="datas">
            <div class="btn-group">
              <p>Age:</p>
              <button
                type="button"
                class="btn divvv dataaa  dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Under 30
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <hr />

            <div class="btn-group">
              <p>Salary:</p>
              <button
                type="button"
                class="btn divvv dataaa  dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                k20 - k30
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <hr />

            <div class="btn-group">
              <p>Gender:</p>
              <button
                type="button"
                class="btn  divvv dataaa dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Male
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </div>

          {/* progress */}
          <div className="cicleee">
            <div className="barrr">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={60}
                duration={1.4}
                easingFunction={easeQuadInOut}
                repeat
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                    animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: "#22d6aa",
                        textColor: "black",
                      })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <h5 className="avg">Average</h5>
            </div>
            <div className="barrr">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={60}
                duration={1.4}
                easingFunction={easeQuadInOut}
                repeat
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                    animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: "#22d6aa",
                        textColor: "black",
                      })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <h5 className="me">Top</h5>
            </div>
            <div className="barrr">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={60}
                duration={1.4}
                easingFunction={easeQuadInOut}
                repeat
              >
                {(value) => {
                  const roundedValue = Math.round(value);
                  return (
                    <CircularProgressbar
                      value={value}
                      text={`${roundedValue}%`}
                      /* This is important to include, because if you're fully managing the
                    animation yourself, you'll want to disable the CSS animation. */
                      styles={buildStyles({
                        pathTransition: "none",
                        pathColor: "#22d6aa",
                        textColor: "black",
                      })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
              <h5 className="me">Me</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
