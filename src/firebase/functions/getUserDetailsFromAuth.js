import { auth } from "../services/auth";
import User_photo from "../../assests/user-photo.jpeg";
export function getUserId() {
  return auth.currentUser.uid;
}
export function getUserPhotoUrl() {
  return auth.currentUser.photoURL || User_photo;
}
export function getUserEmailId() {
  return auth.currentUser.email;
}
export function getUserName() {
  return auth.currentUser.displayName;
}
