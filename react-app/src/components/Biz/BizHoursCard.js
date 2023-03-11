import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getBizHours } from "../../store/bizHours";
import "./BizHours.css"


const BizHoursCard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bizId } = useParams();
    const hours = useSelector((state) => state?.bizHoursReducer)

    useEffect(() => {
        dispatch(getBizHours(bizId));
    }, [dispatch]);

    const today = new Date();

    let dayObj = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }

    let todayStr = dayObj[`${today.getDay()}`];
    console.log(todayStr)
    console.log(hours)
    for (let key in hours) {
        console.log( hours.key.includes(todayStr))
    }

    return (
        <>
            <div className="biz-hours-container">
            <h6 className="operating-hours">Mon {hours.mondayOpen} - {hours.mondayClose}</h6>
            <h6 className="operating-hours">Tue {hours.tuesdayOpen} - {hours.tuesdayClose}</h6>
            <h6 className="operating-hours">Wed {hours.wednesdayOpen} - {hours.wednesdayClose}</h6>
            <h6 className="operating-hours">Thu {hours.thursdayOpen} - {hours.thursdayClose}</h6>
            <h6 className="operating-hours">Fri {hours.fridayOpen} - {hours.fridayClose}</h6>
            <h6 className="operating-hours">Sat {hours.saturdayOpen} - {hours.saturdayClose}</h6>
            <h6 className="operating-hours">Sun {hours.sundayOpen} - {hours.sundayClose}</h6>
            </div>
        </>
    );
};

export default BizHoursCard;
