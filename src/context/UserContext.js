import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/services/auth";
const UserContext = createContext();

function UserContextProvider({ children }) {
  const { Provider } = UserContext;
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return <h1>Loading...</h1>;
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
