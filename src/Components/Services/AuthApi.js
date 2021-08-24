import axios from "axios";
import jwtDecode from "jwt-decode";
import { v4 as uuidv4 } from "uuid";

import { getItem, addItem, removeItem } from "./LocalStorage";

export function hasAuthenticated() {
  const token = getItem("Token");
  const result = token ? tokenIsValid(token) : false;

  if (false === result) {
    removeItem("Token");
  }

  return result;
}

export function login() {
  return axios
    .get("http://localhost:3060/users")
    .then((response) => response.data.token)
    .then(() => {
      addItem("Token", uuidv4());

      return true;
    });
}

export function logout() {
  removeItem("Token");
}

function tokenIsValid(token) {
  const { exp: expiration } = jwtDecode(token);

  if (expiration * 1000 > new Date().getTime()) {
    return true;
  }

  return false;
}
