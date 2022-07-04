import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Preloader from "../components/preloader/preloader";
import { auth } from "../firebase/services/auth";
const UserContext = createContext();

function UserContextProvider({ children }) {
  const { Provider } = UserContext;
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setPending(false);
    });
    return unsub;
  }, []);
  if (pending) {
    return <Preloader />;
  }
  return (
    <Provider
      value={{
        user,
      }}
    >
      {children}
    </Provider>
  );
}
export { UserContextProvider, UserContext };
