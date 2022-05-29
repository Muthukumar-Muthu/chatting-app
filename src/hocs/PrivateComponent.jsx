import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateComponent = ({ render }) => {
  const { user } = useContext(UserContext);
  return user ? <Navigate to={"/"} /> : <Navigate to={"/login"} />;
};
export default PrivateComponent;
