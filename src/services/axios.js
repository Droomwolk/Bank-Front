/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import axios from "axios";

const api = axios.create({
  baseURL: "hhttp://localhost:3001/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getLogin = async () => {
  const response = await api.post("/user/login");
  return response.data;
};

export const getSignup = async () => {
  const response = await api.post("/user/signup");
  return response.data;
};

export const getFetchProfile = async () => {
  const response = await api.post("/user/profile");
  return response.data;
};

export const getUpdateProfile = async () => {
  const response = await api.put("/user/profile");
  return response.data;
};
