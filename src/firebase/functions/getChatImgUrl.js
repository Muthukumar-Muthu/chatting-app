import { ref, getDownloadURL } from "firebase/storage";
import { storageDb } from "../services/storage";

export async function getChatImgUrl(path) {
  try {
    const response = await getDownloadURL(ref(storageDb, path));
    console.assert(response);
    return response;
  } catch (error) {
    console.log("some error occured");

    console.warn(error);
  }
}
