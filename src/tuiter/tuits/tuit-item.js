import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";
import TuitStats from "./tuit-stats";
import "./index.css";

const TuitItem = ({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title: `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
    image: "tesla-logo.jpg",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <>
      <link href="../../vendors/fontawesome/css/all.css" rel="stylesheet" />
      {/* <link
        href="../../vendors/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      /> */}
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
                class="fa-solid fa-x float-end"
                onClick={() => deleteTuitHandler(tuit._id)}
              ></i>
              <div>
                {tuit.userName} . {tuit.handle} . {tuit.time}
              </div>
              <div className="fw-bolder">{tuit.topic}</div>
              <div>{tuit.title}</div>
              <TuitStats tuit={tuit} />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default TuitItem;
