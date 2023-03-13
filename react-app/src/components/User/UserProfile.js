import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink, useHistory } from "react-router-dom";
import "./UserProfile.css"

const UserProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const user = useSelector(state => state?.session.user)

    const userMonth = user.createdAt.split(' ')[2]

    const userYear = user.createdAt.split(' ')[3]

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
