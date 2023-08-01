import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";
import "./index.css";

const TuitItem = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "tesla.png",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-auto">
          <img
            width={50}
            className="float-end rounded-circle"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <div>
            <i
              className="bi bi-x-lg "
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
            <div>
              {tuit.userName} . {tuit.time}
            </div>
            <div className="fw-bolder">{tuit.topic}</div>
            <div>{tuit.title}</div>
            {/* <div classname="wd-tuit-footer">
              <div classname="wd-tuit-interaction-pair">
                <i classname="fa fa-comment"></i>
                <div classname="wd-interaction-count">{tuit.replies}</div>
              </div>
              <div classname="wd-tuit-interaction-pair">
                <i classname="fa fa-retweet"></i>
                <div classname="wd-interaction-count">{tuit.retuits}</div>
              </div>
              <div classname="wd-tuit-interaction-pair">
                <i classname="fa fa-heart"></i>
                <div classname="wd-interaction-count">{tuit.likes}</div>
              </div>
              <i classname="fa fa-upload"></i>
            </div> */}
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
