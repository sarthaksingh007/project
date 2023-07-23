import React from "react";
import profile from "../image/profile.png";
const left1 = () => {
  return (
    <div className="Leftt">
      <div className="profile">
        <img className="profileimage" src={profile} alt="" srcSet="" />
        <div className="headdd">
          <h1>Hi Mike,</h1>
          <br />
          <p>Welcome back.</p>
        </div>
      </div>
      <div className="info">
        <div className="upper">
          <h3>Today</h3>
          <div className="accbal">
            <h1>$19,892</h1>
            <br />
            <p className="price">Account Balance</p>
          </div>
          <div className="neww">
            <div className="year-to-date">
              <h3>$19,892</h3>
              <br />
              <p className="price">
                Year-to-date <span>contributions</span>
              </p>
            </div>
            <div className="totInves">
              <h3>$1,892</h3>
              <br />
              <p className="price">Total Interest</p>
            </div>
          </div>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              I want to
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="/">HTML</a>
              </li>
              <li>
                <a href="/">CSS</a>
              </li>
              <li>
                <a href="/">JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="recent">
          <h3>Recent Transactions</h3>
          <div className="detailss1">
            <p>2020-08-07</p>
            <p className="with">Withdrawal Transfer to Bank-XXX11</p>
            <hr />
          </div>
          <div className="detailss2">
            <p>2020-08-07</p>
            <p className="with">Withdrawal Transfer to Bank-XXX11</p>
            <hr />
          </div>
          <div className="detailss3">
            <p>2020-08-07</p>
            <p className="with">Withdrawal Transfer to Bank-XXX11</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default left1;
