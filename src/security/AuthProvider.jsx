import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../client/ApiClient";
import LoginService from "../services/LoginService";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  /*const login = (username, password) => {
    const isValidUser = username === "test" && password === "123";
    setAuthenticated(isValidUser);
    return isValidUser;
  };*/
  
  const login = async (username, password) => {
    let interceptorId = null;
    try{
      const token = "Basic "+window.btoa(username+":"+password);
      const response = await LoginService.login(token);
      console.log("login successful");
      
      //Add token for every request made to backend
      interceptorId = apiClient.interceptors.request.use(config=>{
        config.headers.Authorization=token;
        return config;
      })
      setAuthenticated(true);
      return true;
    }catch(e){
      //Remove token
      if(interceptorId!=null){
        apiClient.interceptors.request.eject(interceptorId);
      }
      console.log("login failure");
      console.log(e)
    }
  };

  const logout = () => {
    setAuthenticated(false)
    navigate("/")
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  );
}
