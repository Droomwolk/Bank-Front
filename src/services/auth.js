import { AxiosInstance } from "./axios";

const API_URL = "http://localhost:3000/api/auth/";

const register = (username, email, password) => {
  const {
    auth: { emailLogin, passwordLogin },
  } = store.getState();
  return AxiosInstance.post(`${API_URL}signup`, {
    username,
    email,
    password,
  });
};

const login = (username, password) =>
  AxiosInstance.post(`${API_URL}signin`, {
    username,
    password,
  }).then((response) => {
    if (response.data.username) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem("user");
  return AxiosInstance.post(`${API_URL}signout`).then(
    (response) => response.data
  );
};

const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
