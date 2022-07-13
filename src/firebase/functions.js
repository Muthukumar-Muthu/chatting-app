import { ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  doc,
  updateDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

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
    console.log(`creating new chat for uid ${uid}`);
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
    imgurl: null,
    name: chatName,
    recentMsg: "",
    chatAbout: chatAbout,
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
      chatImg: chatImgUrl,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function uploadChatPhotoToDb(file, path) {
  console.log("uploading file");
  let result = "";
  try {
    const storageRef = ref(storageDb, path);
    console.log("wait uploading");
    result = await uploadBytes(storageRef, file);
    console.log("uploaded");

    console.log("imgPath", result.ref._location.path_);
    return result.ref._location.path_;
  } catch (error) {
    console.warn(error);
  }
}
