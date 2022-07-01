import axios from "axios";
//import { ENVIRONMENT } from "../constants";
const LOGIN_API_URL = 'http://localhost:8080/api/login';
const REGISTER_API_URL = 'http://localhost:8080/api/register';

const register = (name, surname, email, password, ) => {
  return axios.post(REGISTER_API_URL, {
    name,
    surname,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(LOGIN_API_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });   
};

const logout = () => {
  localStorage.clear();
  window.location.replace("/home");
};

const getCurrentUser = () => {
  if (!!localStorage.getItem("updatedUser")) {
    return JSON.parse(localStorage.getItem("updatedUser"));
  }
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};