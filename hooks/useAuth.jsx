import { useContext } from "react";
import AuthContext from "../src/context/AuthContext/AuthContext";

const useAuth = () => {
  const contex = useContext(AuthContext);
  return contex;
};

export default useAuth;
