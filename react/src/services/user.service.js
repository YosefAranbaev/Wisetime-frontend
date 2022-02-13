import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/users";

const getTasks = (userId) => {
  return axios.get(`${API_URL}/${userId}/tasks`, { headers: authHeader() });
};

const getConstraints = (userId) => {
  return axios.get(`${API_URL}/${userId}/constraints`, { headers: authHeader() });
}

const updateConstraints = (userId, newConstraints) => {
  return axios.post(`${API_URL}/${userId}/constraints`, newConstraints, { headers: authHeader() });
}

const getCategories = (userId) => {
  return axios.get(`${API_URL}/${userId}/categories`, { headers: authHeader() });
}

const updateCategories = (userId, newCategories) => {
  return axios.post(`${API_URL}/${userId}/categories`, newCategories, { headers: authHeader() });
}

const getChart = (userId) => {
  return axios.get(`${API_URL}/${userId}/statistics/chart`, { headers: authHeader() });
}

const getGauge = (userId) => {
  return axios.get(`${API_URL}/${userId}/statistics/gauge`, { headers: authHeader() });
}

export default {
  getTasks,
  getConstraints,
  updateConstraints,
  getCategories,
  updateCategories,
  getChart,
  getGauge
};
