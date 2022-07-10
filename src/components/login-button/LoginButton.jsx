import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/services/auth";
import "./style.css";
const LoginButton = ({ callBack = () => {} }) => {
  async function loginHandler() {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(auth, googleProvider);
      callBack();
    } catch (err) {
      console.warn(err);
    }
  }
  return (
    <div className="login-button" onClick={loginHandler}>
      <button>Login</button>
    </div>
  );
};
export default LoginButton;
