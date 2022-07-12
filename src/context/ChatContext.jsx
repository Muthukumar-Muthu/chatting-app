import { createContext, useState } from "react";

const ChatContext = createContext();

function ChatContextProvider({ children }) {
  const { Provider } = ChatContext;
  const [chat, setChat] = useState({});

  return (
    <Provider
      value={{
        chat,
        setChat,
      }}
    >
      {children}
    </Provider>
  );
}

export { ChatContextProvider, ChatContext };
