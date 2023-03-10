import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SearchBar from '../SearchBar/SearchBar';
import * as sessionActions from '../../store/session';
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import yelplogo from "../../images/yelplogo.png"

function Navigation({ isLoaded }) {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);

	




	const handleSubmitDemo = (e) => {
		e.preventDefault();
		<Redirect to="/" />
		return dispatch(sessionActions.demoLoginThunk())
	  }

	return (
		<ul>
				<div className='logo-container'>
				<NavLink exact to="/" className='home-button-container'>
					<img className='logo' src={yelplogo}></img>
				</NavLink>
				</div>
			{isLoaded && (
				<li className='profile-button-container'>
					<ProfileButton user={sessionUser} />
				</li>
			)}
			<form onSubmit={handleSubmitDemo} className="demo-login-container">
        <button>
          Demo Login
        </button>
      </form>
			<div className='search-bar-container'>
				<p className='search-bar-input'><SearchBar/></p>
			</div>
		</ul>
	);
}

export default Navigation;







