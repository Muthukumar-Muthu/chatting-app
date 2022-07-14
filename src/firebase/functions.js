import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  doc,
  updateDoc,
  collection,
  serverTimestamp,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import noUserPhoto from "../assests/user-photo.jpeg";
import { auth, db, storageDb } from "../firebase/config";

export function getUserId() {
  return auth.currentUser?.uid;
}
export function getUserPhotoUrl() {
  return auth.currentUser.photoURL;
}
export function getUserEmailId() {
  return auth.currentUser.email;
}
export function getUserName() {
  return auth.currentUser.displayName;
}
export async function generateNewChat(chatName, chatAbout, chatPhoto) {
  const uid = getUserId();
  try {
    //creating new chat
    const chatId = await createChat(chatName, chatAbout, chatPhoto);
    //add that chat to owner
    await addDoc(collection(db, `users/${uid}/chats`), { chatId });
    return chatId;
  } catch (error) {
    console.error(error);
  }
}

export async function createChat(
  chatName = "",
  chatAbout = "",
  chatImg = null
) {
  const uid = getUserId();
  const response = await addDoc(collection(db, `chats`), {
    imgUrl: null,
    name: chatName,
    recentMsg: "",
    about: chatAbout,
    createdAt: serverTimestamp(),
    createdBy: uid,
    lastUpdate: serverTimestamp(),
    membersId: [uid],
  });
  const { id: chatId } = response;
  const chatImgUrl = await uploadChatPhotoToDb(
    chatImg,
    `chats/${chatId}/chatImg`
  );
  await updateChatDetail(chatId, chatImgUrl);
  return chatId;
}

export async function updateChatDetail(chatId, chatImgUrl) {
  try {
    await updateDoc(doc(db, `chats/${chatId}`), {
      imgUrl: chatImgUrl,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function uploadChatPhotoToDb(file, path) {
  let result = "";
  try {
    const storageRef = ref(storageDb, path);

    result = await uploadBytes(storageRef, file);

    return result.ref._location.path_;
  } catch (error) {
    console.warn(error);
  }
}

export async function getChatImgUrl(path) {
  try {
    const response = await getDownloadURL(ref(storageDb, path));
    return response;
  } catch (error) {
    console.warn("null path for chatImg", path);
    return noUserPhoto;
  }
}
export async function sendMessage(chatId, text) {
  const userId = getUserId();
  try {
    if (!text) throw new Error("Empty message. Not sending the message");
    await addDoc(collection(db, `chats/${chatId}/chats`), {
      senderId: userId,
      text,
      time: serverTimestamp(),
    });
  } catch (error) {
    console.warn(error);
  }
}
/*
async function updateChatObjWithRecentMsg(chatId, text, chatObj) {
  try {
    await updateDoc(doc(db, `chats/${chatId}/`), {
      ...chatObj,
      lastUpdateTime: serverTimestamp(),
      recentMsg: text,
    });
  } catch (error) {
    console.warn(error);
  }
}
*/
export default async function joinChat(chatId) {
  const userId = getUserId();
  try {
    const chatDetail = await getChatDetail(chatId);
    const chatPresented = await checkChatList(userId, chatId);
    if (!chatPresented) {
      await addDoc(collection(db, `users/${userId}/chats`), {
        chatId: chatId,
      });
      await updateChatObj(chatId, chatDetail);
    } else throw new Error(`chat already presented`);
  } catch (e) {
    console.warn(e);
  }
  async function getChatDetail(chatId) {
    try {
      const snapshot = await getDoc(doc(db, `chats/${chatId}`));
      return snapshot.data();
    } catch (error) {
      console.log("while getting chatDetail");
      console.warn(error);
      throw error;
    }
  }
}
async function checkChatList(chatId) {
  const userId = getUserId();
  console.log(`checking chat List`);
  let chatPresented = false;
  const q = query(
    collection(db, `users/${userId}/chats`),
    where("chatId", "==", chatId)
  );
  const snap = await getDocs(q);
  console.log("checking chatList");
  snap.forEach((doc) => {
    chatPresented = true;
    console.log(doc.data());
  });
  console.warn(chatPresented);
  return chatPresented;
}

async function updateChatObj(chatId, chatDetail) {
  const userId = getUserId();
  try {
    const updatedMembersId = [...chatDetail.membersId, userId];
    console.log(updatedMembersId);

    await setDoc(doc(db, "chats", chatId), {
      ...chatDetail,
      membersId: updatedMembersId,
    });
  } catch (error) {
    console.log(error, "while updating the chtdetai");
  }
}
