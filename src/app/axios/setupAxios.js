import axios from "axios";

export const setupAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
  axios.interceptors.response.use((response) => response?.data ?? response);
};
