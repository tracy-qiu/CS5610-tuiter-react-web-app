import React from "react";
import "./index.css";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

function TuitStats({ tuit }) {
  const dispatch = useDispatch();
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
          <i
            className="fa fa-heart"
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
            }
          ></i>
          <div className="wd-interaction-count">{tuit.likes}</div>
        </div>
        <i className="fa fa-upload"></i>
      </div>
    </>
  );
}
export default TuitStats;
