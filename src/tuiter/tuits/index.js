import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import { deleteTuit } from "./tuits-reducer";
import "./index.css";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  // const { tuits } = useSelector((state) => state.tuits);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitsList;
