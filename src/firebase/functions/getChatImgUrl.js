import { ref, getDownloadURL } from "firebase/storage";
import { storageDb } from "../services/storage";
import noUserPhoto from "../../assests/user-photo.jpeg";
export async function getChatImgUrl(path) {
  console.log(path);

  try {
    const response = await getDownloadURL(ref(storageDb, path));
    console.log("img1", response);
    return response;
  } catch (error) {
    console.warn("null path for chatImg", path);
    return noUserPhoto;
  }
}
