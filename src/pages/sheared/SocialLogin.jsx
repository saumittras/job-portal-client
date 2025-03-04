import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const naviget = useNavigate();
  console.log("location from Signin page", location);
  const from = location.state || "/";
  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((response) => {
        console.log(response.user);
        naviget(from);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="socal-login flex justify-center items-center">
        <button
          onClick={handleGoogleSignin}
          className="btn btn-wide rounded-3xl m-4"
        >
          <FaGoogle />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
