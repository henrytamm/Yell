import { getBizes, getOneBiz, removeBiz } from "../../../store/biz";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import MyContainer from '../GoogleMaps'
import BizHoursCard from "../BizHoursCard";
import "./BizCard.css"

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

  const sessionUser = useSelector(state => state.session.user)


  return (
    <>
      <div className="biz-top-container">
        <img className="biz-image" src={biz?.previewImage}></img>
        <p className="biz-hours"><BizHoursCard/></p>
        <div>
        <h1 className="biz-name">{biz?.name}</h1>

        <div className="biz-desc-container">
        <h2 className="biz-desc">About the business </h2>
        <h2 className="biz-desc-2">{biz?.description}</h2>
        </div>

        <div className="biz-location-container">
        <h2 className="biz-location">Location </h2>
        <p className="biz-address">{biz?.address}</p>
        <p className="biz-city-state">{biz?.city}, {biz?.state}</p>
        </div>

        </div>
        <div>
        {(sessionUser && biz.ownerId === sessionUser.id) && <button className="edit-and-delete-button" onClick={editBizHandler}>
            Edit Business Details
        </button>}
        {(sessionUser && biz.ownerId === sessionUser.id) && <button className="edit-and-delete-button" onClick={deleteBizHandler}>
            Delete Business
        </button>}
        </div>
        <MyContainer biz={biz}/>
      </div>
    </>
  );
};

export default BizCard;
