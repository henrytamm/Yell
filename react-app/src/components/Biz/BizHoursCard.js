import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getBizHours } from "../../store/bizHours";
import "./BizHours.css"


const BizHoursCard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bizId } = useParams();
    let hours = useSelector((state) => state?.bizHoursReducer)

    useEffect(() => {
        dispatch(getBizHours(bizId))
    }, [dispatch]);

    let today = new Date()
    let currentTimeString = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`


    return (
        <>
            <div className="biz-hours-container">
                <h6 className="operating-hours">Mon {hours.mondayOpen} - {hours.mondayClose}
                    {(today.getDay() === 1 && (hours.mondayOpen < currentTimeString) && (currentTimeString < hours.mondayClose)) && <h7 className="open-label"> Open now</h7>}</h6>
                <h6 className="operating-hours">Tue {hours.tuesdayOpen} - {hours.tuesdayClose}
                    {(today.getDay() === 2 && (hours.tuesdayOpen < currentTimeString) && (currentTimeString < hours.tuesdayClose)) && <h7 className="open-label"> Open now</h7>}</h6>
                <h6 className="operating-hours">Wed {hours.wednesdayOpen} - {hours.wednesdayClose}
                    {(today.getDay() === 3 && (hours.wednesdayOpen < currentTimeString) && (currentTimeString < hours.wednesdayClose)) && <h7 className="open-label"> Open now</h7>}</h6>
                <h6 className="operating-hours">Thu {hours.thursdayOpen} - {hours.thursdayClose}
                    {(today.getDay() === 4 && (hours.thursdayOpen < currentTimeString) && (currentTimeString < hours.thursdayClose)) && <h7 className="open-label"> Open now</h7>}</h6>
                <h6 className="operating-hours">Fri {hours.fridayOpen} - {hours.fridayClose}
                    {(today.getDay() === 5 && (hours.fridayOpen < currentTimeString) && (currentTimeString < hours.fridayClose)) && <h7 className="open-label"> Open now</h7>}</h6>
                <h6 className="operating-hours">Sat {hours.saturdayOpen} - {hours.saturdayClose}
                    {(today.getDay() === 6 && (hours.saturdayOpen < currentTimeString) && (currentTimeString < hours.saturdayClose)) && <h7 className="open-label"> Open now</h7>}</h6>
                <h6 className="operating-hours">Sun {hours.sundayOpen} - {hours.sundayClose}
                    {(today.getDay() === 0 && (hours.sundayOpen < currentTimeString) && (currentTimeString < hours.sundayClose)) && <h7 className="open-label"> Open now</h7>}</h6>
            </div>
        </>
    );
};

export default BizHoursCard;
