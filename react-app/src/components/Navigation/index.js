import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import SearchBar from "../SearchBar/SearchBar";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import YELL from "../../images/YELL.png";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      <div className="logo-container">
        <NavLink exact to="/">
          <img className="logo" src={YELL}></img>
        </NavLink>
      </div>
      <div className="search-bar-container">
        <p className="search-bar-input">
          <SearchBar />
        </p>
      </div>
      {isLoaded && (
        <div className="profile-button-container">
          <ProfileButton user={sessionUser} />
        </div>
      )}
    </nav>
  );
}

export default Navigation;
