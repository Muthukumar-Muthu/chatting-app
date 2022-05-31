import { ref, uploadBytes } from "firebase/storage";
import { storageDb } from "../services/storage";
export default async function uploadChatPhotoToDb(file, path) {
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
