import { useNavigate } from "react-router-dom";
const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return { logout };
};

export default useLogout;
