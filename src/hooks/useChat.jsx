import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

export default function useChat() {
  const { chat, setChat } = useContext(ChatContext);
  return { chat, setChat };
}
