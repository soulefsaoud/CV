import { removeItem } from "./LocalStorage";

export function logout() {
  removeItem("loggedUser");
}
