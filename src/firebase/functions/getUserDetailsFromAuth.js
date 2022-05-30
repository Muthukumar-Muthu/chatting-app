import { auth } from "../services/auth";

export function getUserId() {
  return auth.currentUser.uid;
}
export function getUserPhotoUrl() {
  return auth.currentUser.photoURL;
}
export function getUserEmailId() {
  return auth.currentUser.email;
}
