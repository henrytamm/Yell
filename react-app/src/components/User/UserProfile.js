import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink, useHistory } from "react-router-dom";

const UserProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state?.session.user)
    console.log(user)

    const userMonth = user.createdAt.split(' ')[2]
    console.log('this is month', userMonth)
    const userYear = user.createdAt.split(' ')[3]
    console.log('this is year', userYear)

    return (
        <>
        <div className="profile-container">
            <div className="profile-pic-container">
                <img className="profile-pic" src={user.userPictureUrl} alt='profile pic' style={{width: 200, height:200}}/>
            </div>
        </div>

        <div>
            <h1 className="username-container">{user.firstName} {user.lastName}</h1>
        </div>

            <h2 className="zipcode-container">{user.zipCode}</h2>
            <h2 className="user-since-container">User since </h2>
            <p className="date-container">{userMonth} {userYear}</p>
        </>
    )
}

export default UserProfile