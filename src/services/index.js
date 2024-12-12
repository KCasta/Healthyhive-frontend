import axios from "axios";

const url = import.meta.env.VITE_API_URL;

const $http = axios.create({
  baseURL: url,
});

$http.interceptors.request.use(
  (config) => {
    if (
      config.url.includes("login-user") ||
      config.url.includes("create-user")
    ) {
      return config;
    }
    let token;

    if (config.url.includes("verify-email")) {
      token = sessionStorage.getItem("verificationToken");
    } else {
      token = localStorage.getItem("accessToken");
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $http;
