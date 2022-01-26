import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api";

const register = (username, email, password) => {
  return axios.post(API_URL + "/auth/signup", {
    username,
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/auth/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const isAuthorized = () => {
  return axios.get(API_URL + '/validate', { headers: authHeader() })
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  isAuthorized,
  getCurrentUser
};
