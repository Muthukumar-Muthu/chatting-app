import { ref, getDownloadURL } from "firebase/storage";
import { storageDb } from "../services/storage";
import noUserPhoto from "../../assests/user-photo.jpeg";
export async function getChatImgUrl(path) {
  try {
    const response = await getDownloadURL(ref(storageDb, path));
    console.assert(response);
    return response;
  } catch (error) {
    console.warn("null path for chatImg");
    return noUserPhoto;
  }
}
