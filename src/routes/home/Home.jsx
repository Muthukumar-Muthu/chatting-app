import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ChatContextProvider } from "../../context/ChatContext";
import { collection, onSnapshot } from "firebase/firestore";

import LeftBar from "../../components/left-bar/LeftBar";
import RightBar from "../../components/right-bar/RightBar";
import LoginButton from "../../components/login-button/LoginButton";
import { getUserId } from "../../firebase/functions";
import { db } from "../../firebase/config";

const Home = () => {
  const { user } = useContext(UserContext);
  const [chatList, setChatList] = useState({
    data: [],
    error: null,
    loading: true,
  });

  useEffect(() => {
    function listenChatList() {
      let unsub = () => {};
      if (user) {
        unsub = onSnapshot(
          collection(db, `users/${getUserId()}/chats`),
          (snapshot) => {
            const data = [];

            snapshot.forEach((doc) => {
              data.push({ ...doc.data(), docId: doc.id });
            });
            setChatList((p) => ({
              ...p,
              data: data,
              loading: false,
            }));
          },
          (error) => {
            console.error(error);
            setChatList((p) => ({ ...p, error, loading: false }));
          }
        );
        return unsub;
      }
    }
    listenChatList();
    return () => {};
  }, [user]);

  console.log(chatList);

  if (!user) {
    return <LoginButton />;
  }

  return (
    <ChatContextProvider>
      <div className="App">
        <LeftBar {...chatList} />
        <RightBar />
      </div>
    </ChatContextProvider>
  );
};
export default Home;
