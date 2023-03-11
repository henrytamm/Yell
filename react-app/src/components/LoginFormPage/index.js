import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const handleSubmitDemo = (e) => {
    e.preventDefault();
    <Redirect to="/" />;
    return dispatch(sessionActions.demoLoginThunk());
  };

  return (
    <>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <h2 className="login-header">Log in to Yell</h2>
            </div>
            <div className="signup-container">
              <p className="signup-link"> New to Yell?</p>
              <NavLink className="signup-btn" to="/signup">
                Sign Up
              </NavLink>
            </div>
          <div className="email-container">
            <label>
            <input className="login-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="password-container">
            <input className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            Log In
          </button>
          <h3 className="login-or">
            <p className="or-line"></p>
            <p className="or-label">OR</p>
            <p className="or-line"></p>
          </h3>
          <div className="demo-user-container">
            <button onClick={handleSubmitDemo} className="demo-btn">
              Demo User
            </button>
          </div>
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
export default LoginFormPage;
