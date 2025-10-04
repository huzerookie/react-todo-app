import { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const login = (username, password) => {
    if (username === "test" && password === "123") {
      setAuthenticated(true);
      return true;
    }
    setAuthenticated(false);
    return false;
  };
  const logout = () => setAuthenticated(false)
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  );
}
