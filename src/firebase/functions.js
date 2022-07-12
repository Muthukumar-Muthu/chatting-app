import { auth } from "../firebase/config";

export function getUserId() {
  return auth.currentUser.uid;
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
