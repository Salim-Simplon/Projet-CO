import Axios from "axios";
import {
  ADD_USER,
  GET_ALL_USER,
  DELETE_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "./types";
import JwtDecode from "jwt-decode";

/* add  user */

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export function postUser(el) {
  return (dispatch) =>
    Axios.post(`http://localhost:8000/users/`, {
      _id: el._id,
      name: el.name,
      cin: el.cin,
      adress: el.adress,
      tel: el.tel,
      mail: el.mail,
      pass: el.pass,
      role: el.role,
    })
      .then((res) => dispatch(addUser(el)))
      .catch((err) => console.log(err));
}

// Get users

export const getAlluser = (payload) => ({
  type: GET_ALL_USER,
  payload: payload,
});

export function GetUsersFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:8000/users/").then((res) => {
      console.log("slt", res.data);
      // localStorage.setItem("id", res.data._id);
      dispatch(getAlluser(res.data));
    });
}

// Connect users

export const connectUser = (payload) => ({
  type: LOGIN_USER,
  payload: payload,
});

export function connectUserFromApi(cin, pass) {
  return (dispatch) =>
    Axios.post(`http://localhost:8000/users/login`, {
      cin: cin,
      pass: pass,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          localStorage.setItem("token", res.data);
          window.location.pathname = "/home";
        }
        const payload = JwtDecode(res.data);
        dispatch(connectUser(payload));
      })
      .catch((err) => console.log(err));
}

// deconnect user

export const logoutUser = () => {
  localStorage.removeItem("token");
  const action = {
    type: LOGOUT_USER,
    payload: "none",
  };
  return action;
};

/* delete user */

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export function deleteUserFromApi(_id) {
  return (dispatch) =>
    Axios.delete("http://localhost:8000/users/" + _id).then((res) =>
      dispatch(GetUsersFromApi())
    );
}

export function getCurrentUser() {
  return (dispatch) => {
    if (localStorage.getItem("token") !== null){
    const payload = JwtDecode(localStorage.getItem("token"));
    dispatch(connectUser(payload));}
  };
}
