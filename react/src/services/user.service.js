import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/users";

const getTasks = (userId) => {
  return axios.get(`${API_URL}/${userId}/tasks`, { headers: authHeader() });
};

export default {
  getTasks
};
