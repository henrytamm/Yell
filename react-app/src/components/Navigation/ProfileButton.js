import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

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

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  // const handleSubmitDemo = (e) => {
  //   e.preventDefault();
  //   <Redirect to="/" />
  //   return dispatch(sessionActions.demoLoginThunk())
  // }

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button onClick={openMenu}>
      <i class="fa-solid fa-user"></i>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li><Link to={`/users/${user.id}`}>
                  About Me
              </Link>
            </li>
            <li>{user.email}</li>
            <p><Link to='/biz/new' className="create-biz-button">
            <i class="fa-solid fa-plus" style={{width:20}}></i>
            Create your business!
              </Link></p>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
      {/* <form onSubmit={handleSubmitDemo}>
        <button>
          Demo Login
        </button>
      </form> */}
    </>
  );
}

export default ProfileButton;
