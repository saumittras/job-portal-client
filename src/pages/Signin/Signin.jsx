/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Lottie from "lottie-react";
import signinLottieData from "../../assets/login.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../sheared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = () => {
  const { loginUser, loading } = useContext(AuthContext);
  const location = useLocation();
  const naviget = useNavigate();
  console.log("location from Signin page", location);
  const from = location.state || "/";
  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // password validation
    //show password validation error
    loginUser(email, password)
      .then((result) => {
        console.log("user Logedin Successfully", result.user);
        naviget(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={signinLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form action="" onSubmit={handleUserLogin}>
            {" "}
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
            </div>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Signin;
