import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((response) => console.log(response.user))
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
