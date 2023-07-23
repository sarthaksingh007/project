import React from "react";
import butterfly from "../image/icons8-butterfly-64.png";
import search from "../image/icons8-search-48.png";
import profile from "../image/icons8-person-24.png";
import news from "../image/icons8-news-48.png";
import home from "../image/icons8-home-48.png";
import newsp from "../image/icons8-newspaper-48.png";
import noti from "../image/icons8-notification-48.png";
import logout from "../image/icons8-logout-32.png";

export const Left = () => {
  return (
    <div className="Leftty">
      <div className="leftt">
        <div className="start">
          <div className="butter-l">
            <img src={butterfly} alt="" />
          </div>
        </div>
        <div className="startty">
          <div className="butter-fly">
            <img src={search} alt="" />
          </div>
          <div className="butter-fly">
            <img src={home} alt="" />
          </div>
          <div className="butter-fly">
            <img src={newsp} alt="" />
          </div>
          <div className="butter-fly">
            <img src={news} alt="" />
          </div>
          <div className="butter-fly">
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="bottomm">
          <div className="fly">
            <img src={noti} alt="" />
          </div>
          <div className="flyy">
            <img src={logout} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
