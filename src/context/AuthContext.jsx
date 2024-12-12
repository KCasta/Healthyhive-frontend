import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null
  );

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, setUserInfo, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
