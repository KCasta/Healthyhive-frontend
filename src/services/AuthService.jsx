import $http from ".";

const AuthService = {
  login: async (payload) => {
    return $http.post("/api/v1/auth/login-user", payload);
  },
  register: async (payload) => {
    return $http.post("/api/v1/auth/create-user", payload);
  },
  verifyEmail: async (payload) => {
    return $http.post("/api/v1/auth/verify-email", payload);
  },
};

export default AuthService;
