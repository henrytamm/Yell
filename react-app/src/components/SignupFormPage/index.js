import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import { NavLink } from "react-router-dom";
import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [pictureUrl, setPictureUrl] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const payload = {
        username,
        email,
        password,
        'first_name':firstName,
        'last_name':lastName,
        'zip_code':zipCode,
        'user_picture_url':pictureUrl
      }
      const data = await dispatch(signUp(payload));
      if (data) {
        setErrors(data);
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  return (
    <>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <h2 className="signup-header">Sign Up to Yell</h2>
          </div>
          <div className="login-container">
            <p className="login-link"> Already have an account?</p>
            <NavLink className="login-btn" to="/login">
              Log In
            </NavLink>
          </div>
          <div>
            <input className="signup-input"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            ></input>
          </div>
          <div>
          <input className="signup-input"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div>
          <input className="signup-input"
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            ></input>
          </div>
          <div>
          <input className="signup-input"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            ></input>
          </div>
          <div>
          <input className="signup-input"
              type="text"
              placeholder="Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
            ></input>
          </div>
          <div>
          <input className="signup-input"
              type="text"
              placeholder="Profile Picture Url"
              onChange={(e) => setPictureUrl(e.target.value)}
              value={pictureUrl}
            ></input>
          </div>
          <div>
          <input className="signup-input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <div>
          <input className="signup-input"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required={true}
            ></input>
          </div>
          <button className="signup-button" type="submit">
            Sign Up
          </button>
          <div className="error-container">
            {errors.map((error, idx) => (
              <div key={idx}>{error}</div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupFormPage;
