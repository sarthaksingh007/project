import React from "react";
import { useState } from "react";
// import "../style/lefttt123.css";
export default function Left() {
  const [width, setWidth] = useState(100);
  const [width1, setWidth1] = useState(100);

  const changeWidth = (event) => {
    setWidth(event.target.value);
  };

  const changeWidth1 = (event) => {
    setWidth1(event.target.value);
  };

  return (
    <>
      <div className="container3">
        <div className="container2">
          <h4>Retirement Strategy</h4>

          <h5 className="hee">Employee Contribution</h5>
          <div className="width1">
            <input
              className="range1"
              type="range"
              onChange={changeWidth}
              min={0}
              max={100}
              step={1}
              value={width}
            ></input>

            <h5>{width}%</h5>
          </div>

          <h5 className="hee">Retirement Age</h5>
          <div className="width1">
            <input
              className="range2"
              type="range"
              onChange={changeWidth1}
              min={0}
              max={70}
              step={1}
              value={width1}
            ></input>

            <h5>{width1}</h5>
          </div>

          <hr />

          <div className="info1">
            <h4>Employer Contribution</h4>
            <p>8.4%</p>
          </div>

          <div className="info1">
            <h4>Interest Rate</h4>
            <p>5%</p>
          </div>

          <button type="button" class="btn btnnn btn-primary">
            Update
          </button>
          <br />

          <a className="firsta" href="/">
            View Help Docs &gt;
          </a>
        </div>
        <div className="container1">
          <div className="para">
          <p className="para1">Are you considering a</p>
          <p className="para2">Housing Advance?</p>
          <p className="para3">Limited time reduced interest.</p>
          </div>
          <a className="seconda" href="/">
            Learn More &gt;
          </a>
        </div>
      </div>
    </>
  );
}
