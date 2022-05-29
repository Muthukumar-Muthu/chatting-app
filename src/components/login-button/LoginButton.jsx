import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/services/auth";
import "./style.css";
const LoginButton = () => {
  async function loginHandler() {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    console.log(`result - ${result}`);
  }
  return (
    <div className="login-button" onClick={loginHandler}>
      <button>Login</button>
    </div>
  );
};
export default LoginButton;
