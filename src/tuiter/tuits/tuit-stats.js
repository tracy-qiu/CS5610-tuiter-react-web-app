import React from "react";
import "./index.css";

function TuitStats({ tuit }) {
  return (
    <>
      <link href="../../vendors/fontawesome/css/all.css" rel="stylesheet" />
      <div className="wd-tuit-footer">
        <div className="wd-tuit-interaction-pair">
          <i className="fa fa-comment"></i>
          <div className="wd-interaction-count">{tuit.replies}</div>
        </div>
        <div className="wd-tuit-interaction-pair">
          <i className="fa fa-retweet"></i>
          <div className="wd-interaction-count">{tuit.retuits}</div>
        </div>
        <div className="wd-tuit-interaction-pair">
          <i className="fa fa-heart"></i>
          <div className="wd-interaction-count">{tuit.likes}</div>
        </div>
        <i className="fa fa-upload"></i>
      </div>
    </>
  );
}
export default TuitStats;
