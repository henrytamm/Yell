import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getBizHours } from "../../store/bizHours";


const BizHoursCard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bizId } = useParams();
    const hours = useSelector((state) => state?.bizHoursReducer)

    useEffect(() => {
        dispatch(getBizHours(bizId));
    }, [dispatch]);


    return (
        <>
            <div className="biz-hours-container">
                <h6>Monday Open Hours: {hours.mondayOpen}</h6>
                <h6>Monday Closing Hours: {hours.mondayClose}</h6>
                <h6>Tuesday Open Hours: {hours.tuesdayOpen}</h6>
                <h6>Tuesday Closing Hours: {hours.tuesdayClose}</h6>
                <h6>Wednesday Open Hours: {hours.wednesdayOpen}</h6>
                <h6>Wednesday Closing Hours: {hours.wednesdayClose}</h6>
                <h6>Thursday Open Hours: {hours.thursdayOpen}</h6>
                <h6>Thursday Closing Hours: {hours.thursdayClose}</h6>
                <h6>Friday Open Hours: {hours.fridayOpen}</h6>
                <h6>Friday Closing Hours: {hours.fridayClose}</h6>
                <h6>Saturday Open Hours: {hours.saturdayOpen}</h6>
                <h6>Saturday Closing Hours: {hours.saturdayClose}</h6>
                <h6>Sunday Open Hours: {hours.sundayOpen}</h6>
                <h6>Sunday Closing Hours: {hours.sundayClose}</h6>
            </div>
        </>
    );
};

export default BizHoursCard;
