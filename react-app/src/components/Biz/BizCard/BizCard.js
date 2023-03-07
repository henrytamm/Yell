import { getBizes, getOneBiz, removeBiz } from "../../../store/biz";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import MyContainer from '../GoogleMaps'


const BizCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { bizId } = useParams();
  const biz = useSelector((state) => state?.bizReducer)

  useEffect(() => {
    dispatch(getOneBiz(bizId));
  }, [dispatch]);

  const editBizHandler = () => {
    history.push(`/biz/${bizId}/edit`);
  };

  const deleteBizHandler = () => {
    const deleteConfirm = window.confirm(
      `Are you sure you want to delete this spot?`
    );
    if (deleteConfirm) {
      dispatch(removeBiz(biz.id));
      history.push(`/`);
    }
  };

  return (
    <>
      <div className="biz-info-container">
        <h1>{biz?.name}</h1>
        <h2>{biz?.description}</h2>
        <h3>{biz?.address}</h3>
        <h4>
          {biz?.city}, {biz?.state}
        </h4>
        <button className="edit-and-delete-button" onClick={editBizHandler}>
              Edit Spot
        </button>
        <button className="edit-and-delete-button" onClick={deleteBizHandler}>
            Delete Spot
        </button>
        <MyContainer biz={biz}/>
      </div>
    </>
  );
};

export default BizCard;
