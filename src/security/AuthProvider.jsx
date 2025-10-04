import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const login = (username, password) => {
    const isValidUser = username === "test" && password === "123";
    setAuthenticated(isValidUser);
    return isValidUser;
  };
  
  const logout = () => {
    setAuthenticated(false)
    navigate("/")
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  );
}
