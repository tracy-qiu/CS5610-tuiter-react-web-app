import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";
import "./index.css";

const TuitsList = () => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  const { tuits } = useSelector((state) => state.tuits);
  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitsList;
