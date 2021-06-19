// import { EnhancedStore } from "@reduxjs/toolkit";
import axios from "axios";

export const setupAxios = (/*_store: EnhancedStore*/): void => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
  // axios.interceptors.response.use((response) => response?.data ?? response);

  // Example of access store auth token in every Axios Request
  // axios.interceptors.request.use((config) => {
  //   const {
  //     auth: { authToken },
  //   } = store.getState();

  //   if (authToken) {
  //     config.headers.Authorization = `Bearer ${authToken}`;
  //   }

  //   return config;
  // });
};
