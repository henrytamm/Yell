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
        <div className="biz-name-2">{biz?.name}</div>
        <div className="main-biz-holder">
        <img className="biz-image" src={biz?.previewImage}></img>
        <h2 className="map-holder">
        <h3 className="biz-location-hours">Location & Business Hours</h3>
        <h4 className="biz-address">{biz?.address}</h4>
        <h4 className="biz-city-state">{biz?.city}, {biz?.state}</h4>
        <MyContainer biz={biz}/>
        </h2>
        <h4 className="biz-hours"><BizHoursCard/></h4>
        </div>

        <div>
        <h2 className="biz-desc">About the Business </h2>
        <h3 className="biz-desc-2">{biz?.description}</h3>
        </div>


        <div className="edit-biz-btn-container">
        {(sessionUser && biz.ownerId === sessionUser.id) && <button className="edit-biz-btn" onClick={editBizHandler}>
        <i class="fa-solid fa-pencil" style={{paddingRight:"5px"}}></i>
            Edit Business Info
        </button>}
        {(sessionUser && biz.ownerId === sessionUser.id) && <button className="delete-biz-btn" onClick={deleteBizHandler}>
        <i class="fa-solid fa-x" style={{paddingRight:"5px"}}></i>
            Delete Business
        </button>}
        </div>
        <div className="end-of-info-line"></div>
      </div>
    </>
  );
};

export default BizCard;
