import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  return (
    <>
      <button className="profile-button-click" onClick={openMenu}>
        <i class="fa-solid fa-user"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            {sessionUser && (
              <Link to={`/users/${user.id}`}>
                <i
                  class="fa-solid fa-id-card"
                  style={{ paddingRight: "5px" }}
                ></i>
                About Me
              </Link>
            )}
          </li>
          <li>
            {sessionUser && (
              <Link to="/biz/new" className="create-spot-button">
                <i
                  class="fa-regular fa-plus"
                  style={{ paddingRight: "5px" }}
                ></i>
                Create your Business!
              </Link>
            )}
          </li>
          <li>
            {sessionUser && (
              <button className="log-out" onClick={logout}>
                <i
                  class="fa-solid fa-right-from-bracket"
                  style={{ paddingRight: "5px" }}
                ></i>
                Log Out
              </button>
            )}
          </li>

          <li>
            {!sessionUser && (
              <button className="log-in-btn">
                <NavLink to="/login">Log In</NavLink>
              </button>
            )}
          </li>
          <li>
            {!sessionUser && (
              <button className="sign-up-btn">
                <NavLink to="/signup">Sign Up</NavLink>
              </button>
            )}
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
